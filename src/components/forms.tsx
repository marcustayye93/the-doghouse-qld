import { createContext, useContext, useState, type ReactNode } from 'react';
import { siteConfig } from '../config';

/**
 * Shared form infrastructure for all Doghouse QLD forms.
 * Submissions POST as JSON to siteConfig.formsEndpoint (TO BE SUPPLIED -
 * see "ZZZN Remaining Real World Connection details.docx"). Until an endpoint
 * is configured, forms validate fully but explain the connection is pending
 * instead of silently discarding enquiries.
 *
 * Validation is custom and inline (ZZZA: "display simple, friendly messages
 * beside the relevant field"). The form carries noValidate so no browser-native
 * bubbles appear; on submit each field is checked and the message for that
 * field is rendered directly beside it. Per-field messages come from the
 * `errorMessages` prop (doc-specified wording where the docs supply it);
 * anything without a supplied message falls back to a plain generic line.
 * Optional per-field format checks come from `fieldValidators` (e.g. the
 * Australian postcode check O.docx asks for on the puppy application).
 * Entered values are never cleared when a field needs correcting.
 */

type Status = 'idle' | 'sending' | 'unconfigured' | 'error' | 'sent';

type ErrorMap = Record<string, string>;

const FormErrorsContext = createContext<{ errors: ErrorMap }>({ errors: {} });

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FALLBACK_REQUIRED_MESSAGE = 'Please complete this field.';
const FALLBACK_EMAIL_MESSAGE = 'Please enter a valid email address.';

export function FormShell({
  formName,
  children,
  submitLabel = 'Submit',
  successHeading = 'Thank you.',
  successMessage = 'Your submission has been received. We will be in touch soon.',
  errorMessages = {},
  requiredGroups = [],
  fieldValidators = {},
}: {
  formName: string;
  children: ReactNode;
  submitLabel?: string;
  successHeading?: string;
  successMessage?: string;
  /** Per-field error messages, keyed by field name. Shown beside the field when it is invalid. */
  errorMessages?: Record<string, string>;
  /** At-least-one checkbox rules. Render the error with <FieldError fieldKey={key} /> beside the group. */
  requiredGroups?: { key: string; names: string[]; message: string }[];
  /** Optional per-field format checks, keyed by field name. Run on non-empty values; the message shows beside the field when the test fails. */
  fieldValidators?: Record<string, { test: (value: string) => boolean; message: string }>;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<ErrorMap>({});

  function messageFor(name: string, kind: 'required' | 'email'): string {
    const custom = errorMessages[name];
    if (custom) return custom;
    return kind === 'email' ? FALLBACK_EMAIL_MESSAGE : FALLBACK_REQUIRED_MESSAGE;
  }

  function validate(form: HTMLFormElement): { errors: ErrorMap; firstInvalid: string | null } {
    const next: ErrorMap = {};
    let firstInvalid: string | null = null;
    const mark = (name: string, msg: string) => {
      if (!(name in next)) {
        next[name] = msg;
        if (!firstInvalid) firstInvalid = name;
      }
    };

    const els = Array.from(form.elements) as Array<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >;
    const radioSeen = new Set<string>();
    for (const el of els) {
      const name = el.name;
      if (!name || name === 'company') continue; // skip the honeypot
      if (el instanceof HTMLInputElement && (el.type === 'hidden' || el.type === 'submit' || el.type === 'button')) continue;

      if (el instanceof HTMLInputElement && el.type === 'radio') {
        if (radioSeen.has(name)) continue;
        radioSeen.add(name);
        if (el.required) {
          const group = form.querySelectorAll(`input[type="radio"][name="${CSS.escape(name)}"]`);
          const checked = Array.from(group).some((r) => (r as HTMLInputElement).checked);
          if (!checked) mark(name, messageFor(name, 'required'));
        }
        continue;
      }

      if (el instanceof HTMLInputElement && el.type === 'checkbox') {
        if (el.required && !el.checked) mark(name, messageFor(name, 'required'));
        continue;
      }

      if (el instanceof HTMLSelectElement) {
        if (el.required && el.value === '') mark(name, messageFor(name, 'required'));
        continue;
      }

      const value = el.value.trim();
      if (el.required && value === '') {
        mark(name, messageFor(name, 'required'));
        continue;
      }
      if (value !== '' && el instanceof HTMLInputElement && el.type === 'email' && !EMAIL_RE.test(value)) {
        mark(name, messageFor(name, 'email'));
      }
      const formatCheck = fieldValidators[name];
      if (formatCheck && value !== '' && !formatCheck.test(value)) {
        mark(name, formatCheck.message);
      }
    }

    for (const g of requiredGroups) {
      const anyChecked = g.names.some((n) => {
        const input = form.querySelector(
          `input[type="checkbox"][name="${CSS.escape(n)}"]`
        ) as HTMLInputElement | null;
        return !!input?.checked;
      });
      if (!anyChecked) mark(g.key, g.message);
    }

    return { errors: next, firstInvalid };
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const { errors: next, firstInvalid } = validate(form);
    setErrors(next);
    if (firstInvalid) {
      let target: HTMLElement | null = form.querySelector(`[name="${CSS.escape(firstInvalid)}"]`);
      if (!target) {
        const g = requiredGroups.find((gr) => gr.key === firstInvalid);
        if (g) {
          target = form.querySelector(
            `input[type="checkbox"][name="${CSS.escape(g.names[0])}"]`
          );
        }
      }
      target?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      (target as HTMLElement | null)?.focus?.();
      return;
    }
    if (!siteConfig.formsEndpoint) {
      setStatus('unconfigured');
      return;
    }
    setStatus('sending');
    const formData = new FormData(form);
    // Collect multi-value fields (e.g. checkbox groups sharing a name) as arrays
    // so no selection is silently dropped; single-value fields stay scalar.
    const data: Record<string, string | string[]> = {};
    for (const key of new Set(formData.keys())) {
      const values = formData
        .getAll(key)
        .filter((v): v is string => typeof v === 'string' && v !== '');
      data[key] = values.length > 1 ? values : (values[0] ?? '');
    }
    try {
      const res = await fetch(siteConfig.formsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ form: formName, ...data }),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'sent') {
    return (
      <div className="rounded-2xl border border-brand/20 bg-mist p-8 text-center" role="status">
        <h2 className="font-bold text-4xl  text-bark">{successHeading}</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-bark/80">{successMessage}</p>
      </div>
    );
  }

  return (
    <FormErrorsContext.Provider value={{ errors }}>
      <form onSubmit={onSubmit} className="grid gap-5" noValidate>
        {/* Honeypot: invisible to humans, catches bots */}
        <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
        {children}
        {status === 'unconfigured' && (
          <p role="alert" className="rounded-xl border border-honey/40 bg-honey/10 p-4 text-sm leading-relaxed text-bark">
            Our online form system is being connected. Please contact us via the{' '}
            <a href="/resources/contact-us" className="font-bold text-branddark underline">Contact Us</a>{' '}
            page in the meantime and we will help you directly.
          </p>
        )}
        {status === 'error' && (
          <p role="alert" className="rounded-xl border border-red-300 bg-red-50 p-4 text-sm text-ink">
            Something went wrong sending your submission. Please try again, or contact us via the{' '}
            <a href="/resources/contact-us" className="font-bold text-branddark underline">Contact Us</a> page.
          </p>
        )}
        <button
          type="submit"
          disabled={status === 'sending'}
          className="inline-flex items-center justify-center rounded-full bg-cta px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : submitLabel}
        </button>
      </form>
    </FormErrorsContext.Provider>
  );
}

/** Inline error line rendered beside a field. */
function InlineError({ id, message }: { id: string; message: string }) {
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-normal leading-relaxed text-red-700">
      {message}
    </p>
  );
}

function useFieldError(name: string): string | undefined {
  const { errors } = useContext(FormErrorsContext);
  return errors[name];
}

/**
 * Renders the inline error for a custom key (e.g. a requiredGroups key).
 * Place it beside the relevant control inside the FormShell.
 */
export function FieldError({ fieldKey }: { fieldKey: string }) {
  const message = useFieldError(fieldKey);
  if (!message) return null;
  return <InlineError id={`${fieldKey}-error`} message={message} />;
}

export const inputClass =
  'mt-1.5 w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30';

export function Field({
  label,
  name,
  type = 'text',
  required = false,
  placeholder = '',
  autoComplete,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autoComplete?: string;
}) {
  const error = useFieldError(name);
  const errorId = `${name}-error`;
  return (
    <label className="block text-sm font-semibold text-bark">
      {label} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass + (error ? ' border-red-400' : '')}
      />
      {error && <InlineError id={errorId} message={error} />}
    </label>
  );
}

export function TextArea({
  label,
  name,
  required = false,
  placeholder = '',
  rows = 5,
}: {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}) {
  const error = useFieldError(name);
  const errorId = `${name}-error`;
  return (
    <label className="block text-sm font-semibold text-bark">
      {label} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={rows}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass + (error ? ' border-red-400' : '')}
      />
      {error && <InlineError id={errorId} message={error} />}
    </label>
  );
}

export function SelectField({
  label,
  name,
  options,
  required = false,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  const error = useFieldError(name);
  const errorId = `${name}-error`;
  return (
    <label className="block text-sm font-semibold text-bark">
      {label} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      <select
        name={name}
        required={required}
        defaultValue=""
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={inputClass + (error ? ' border-red-400' : '')}
      >
        <option value="" disabled>
          Please select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <InlineError id={errorId} message={error} />}
    </label>
  );
}

export function CheckboxField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  const error = useFieldError(name);
  const errorId = `${name}-error`;
  return (
    <span className="block">
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-bark">
        <input
          type="checkbox"
          name={name}
          required={required}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="mt-1 h-5 w-5 shrink-0 accent-[#17A296]"
        />
        <span>
          {label} {required && <span className="font-bold text-branddark" aria-hidden="true">*</span>}
        </span>
      </label>
      {error && <InlineError id={errorId} message={error} />}
    </span>
  );
}

export function RadioGroup({
  legend,
  name,
  options,
  required = false,
}: {
  legend: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  const error = useFieldError(name);
  const errorId = `${name}-error`;
  return (
    <fieldset className="text-sm font-semibold text-bark" aria-describedby={error ? errorId : undefined}>
      <legend>
        {legend} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      </legend>
      <div className="mt-2 grid gap-2">
        {options.map((o) => (
          <label key={o} className="flex cursor-pointer items-center gap-3 font-normal">
            <input type="radio" name={name} value={o} required={required} className="h-5 w-5 accent-[#17A296]" />
            {o}
          </label>
        ))}
      </div>
      {error && <InlineError id={errorId} message={error} />}
    </fieldset>
  );
}
