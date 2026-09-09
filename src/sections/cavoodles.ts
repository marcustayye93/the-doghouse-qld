import type { RouteDef } from '../routes';
import AboutCavoodles from '../pages/cavoodles/AboutCavoodles';
import Generations from '../pages/cavoodles/Generations';
import Sizes from '../pages/cavoodles/Sizes';
import CoatTypes from '../pages/cavoodles/CoatTypes';
import ColoursMarkings from '../pages/cavoodles/ColoursMarkings';
import Shedding from '../pages/cavoodles/Shedding';
import LivingWith from '../pages/cavoodles/LivingWith';
import Theodore from '../pages/cavoodles/Theodore';

// Filled in by the section build. Do not edit routes.ts directly.
export const cavoodleRoutes: RouteDef[] = [
  {
    path: '/cavoodles/about',
    title: 'About Cavoodles | The Doghouse QLD',
    description:
      'Cavoodle temperament, sizes, coats, colours, shedding, grooming and family life, plus multi-generational Cavoodles from The Doghouse QLD.',
    Component: AboutCavoodles,
  },
  {
    path: '/cavoodles/generations',
    title: 'Cavoodle Generations | The Doghouse QLD',
    description:
      'What multi-generational Cavoodles are, and why a higher generation number does not automatically mean a better Cavoodle.',
    Component: Generations,
  },
  {
    path: '/cavoodles/sizes',
    title: 'Cavoodle Sizes | The Doghouse QLD',
    description:
      'Teacup, Toy and Mini Cavoodle sizes explained, and why adult size can only ever be an estimate. The Doghouse QLD.',
    Component: Sizes,
  },
  {
    path: '/cavoodles/coat-types',
    title: 'Cavoodle Coat Types | The Doghouse QLD',
    description:
      'Wool, fleece and shaggy Cavoodle coats explained, including furnishings and the classic teddy bear look.',
    Component: CoatTypes,
  },
  {
    path: '/cavoodles/colours-markings',
    title: 'Cavoodle Colours & Markings | The Doghouse QLD',
    description:
      'Cavoodle colours and markings, from red and chocolate to parti, phantom, tri-colour and merle, with a photo gallery.',
    Component: ColoursMarkings,
  },
  {
    path: '/cavoodles/shedding',
    title: 'Cavoodle Shedding | The Doghouse QLD',
    description:
      'Do Cavoodles shed? Honest answers on low-shedding coats, coat transition and allergies from The Doghouse QLD.',
    Component: Shedding,
  },
  {
    path: '/cavoodles/living-with-a-cavoodle',
    title: 'Living With a Cavoodle | The Doghouse QLD',
    description:
      'What living with a Cavoodle is really like: temperament, children, other pets, exercise, training and independence.',
    Component: LivingWith,
  },
  {
    path: '/cavoodles/the-theodore',
    title: 'The Theodore | The Doghouse QLD',
    description:
      'What the Theodore is: developing multi-generational companion-dog lines from the Cavoodle foundation, recognised through the MDBA.',
    Component: Theodore,
  },
];
