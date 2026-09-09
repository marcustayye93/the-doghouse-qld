import type { RouteDef } from '../routes';
import OurGirls from '../pages/dogs/OurGirls';
import OurStuds from '../pages/dogs/OurStuds';
import RetiredLegacy from '../pages/dogs/RetiredLegacy';

// Filled in by the section build. Do not edit routes.ts directly.
export const dogRoutes: RouteDef[] = [
  {
    path: '/our-dogs/our-girls',
    title: 'Our Girls | The Doghouse QLD',
    description:
      'Meet the girls of The Doghouse QLD: current breeding girls, future hopefuls and much-loved retired girls.',
    Component: OurGirls,
  },
  {
    path: '/our-dogs/our-studs',
    title: 'Our Studs | The Doghouse QLD',
    description:
      'Meet the Doghouse QLD stud boys, the young future hopeful studs and our retired and legacy boys.',
    Component: OurStuds,
  },
  {
    path: '/our-dogs/retired-legacy-dogs',
    title: 'Retired & Legacy Dogs | The Doghouse QLD',
    description:
      'Celebrating the retired and legacy dogs of The Doghouse QLD and their place in our story.',
    Component: RetiredLegacy,
  },
];
