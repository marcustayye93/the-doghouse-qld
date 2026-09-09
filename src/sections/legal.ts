import type { RouteDef } from '../routes';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsConditions from '../pages/legal/TermsConditions';

// Filled in by the section build. Do not edit routes.ts directly.
export const legalRoutes: RouteDef[] = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | The Doghouse QLD',
    description:
      'How The Doghouse QLD collects, uses, shares and protects your personal information, including mailing lists and your rights.',
    Component: PrivacyPolicy,
  },
  {
    path: '/terms-and-conditions',
    title: 'Website Terms & Conditions | The Doghouse QLD',
    description:
      'Read the Website Terms & Conditions for The Doghouse QLD, covering website use, puppies, educational content, intellectual property and services.',
    Component: TermsConditions,
  },
];
