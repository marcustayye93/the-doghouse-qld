import { useState, type ReactNode } from 'react';
import { siteConfig } from '../config';

/**
 * Shared form infrastructure for all Doghouse QLD forms.
 * Submissions POST as JSON to siteConfig.formsEndpoint (TO BE SUPPLIED -
 * see "ZZZN Remaining Real World Connection details.docx"). Until an endpoint
 * is configured, forms validate fully but explain the connection is pending
 * instead of silently discarding enquiries.
 */

type Status = 'idle' | 'sending' | 'unconfigured' | 'error' | 'sent';

export function FormShell({
  formName,
  children,
  submitLabel = 'Submit',
  successHeading = 'Thank you.',
  successMessage = 'Your submission has been received. We will be in touch soon.',
}: {
  formName: string;
  children: ReactNode;
  submitLabel?: string;
  successHeading?: string;
  successMessage?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
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
        <h2 className="font-display text-4xl font-bold text-deep">{successHeading}</h2>
        <p className="mx-auto mt-3 max-w-md leading-relaxed text-ink/80">{successMessage}</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-5" noValidate={false}>
      {/* Honeypot: invisible to humans, catches bots */}
      <input type="text" name="company" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
      {children}
      {status === 'unconfigured' && (
        <p role="alert" className="rounded-xl border border-honey/40 bg-honey/10 p-4 text-sm leading-relaxed text-ink">
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
        className="inline-flex items-center justify-center rounded-xl bg-brand px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-branddark disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending...' : submitLabel}
      </button>
    </form>
  );
}

const inputClass =
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
  return (
    <label className="block text-sm font-semibold text-ink">
      {label} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={inputClass}
      />
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
  return (
    <label className="block text-sm font-semibold text-ink">
      {label} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      <textarea name={name} required={required} placeholder={placeholder} rows={rows} className={inputClass} />
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
  return (
    <label className="block text-sm font-semibold text-ink">
      {label} {required && <span className="text-branddark" aria-hidden="true">*</span>}
      <select name={name} required={required} className={inputClass} defaultValue="">
        <option value="" disabled>
          Please select...
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
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
  return (
    <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-ink">
      <input
        type="checkbox"
        name={name}
        required={required}
        className="mt-1 h-5 w-5 shrink-0 accent-[#17A296]"
      />
      <span>
        {label} {required && <span className="font-bold text-branddark" aria-hidden="true">*</span>}
      </span>
    </label>
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
  return (
    <fieldset className="text-sm font-semibold text-ink">
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
    </fieldset>
  );
}
