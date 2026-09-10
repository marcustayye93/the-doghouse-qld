import type { RouteDef } from '../routes';
import PrivacyPolicy from '../pages/legal/PrivacyPolicy';
import TermsConditions from '../pages/legal/TermsConditions';

// Filled in by the section build. Do not edit routes.ts directly.
export const legalRoutes: RouteDef[] = [
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | The Doghouse QLD',
    description:
      'Read The Doghouse QLD Privacy Policy and learn how personal information provided through our website, enquiries, applications and services is handled.',
    Component: PrivacyPolicy,
  },
  {
    path: '/terms-and-conditions',
    title: 'Website Terms & Conditions | The Doghouse QLD',
    description:
      'Read the Website Terms & Conditions for The Doghouse QLD, including information about website use, puppies, educational content, intellectual property and services.',
    Component: TermsConditions,
  },
];
