import type { RouteDef } from '../routes';
import OurStory from '../pages/about/OurStory';
import MeetTheTeam from '../pages/about/MeetTheTeam';
import BreedingPhilosophy from '../pages/about/BreedingPhilosophy';
import HealthTesting from '../pages/about/HealthTesting';
import GuardianHomes from '../pages/about/GuardianHomes';
import GuardianApplication from '../pages/about/GuardianApplication';

// Filled in by the section build. Do not edit routes.ts directly.
export const aboutRoutes: RouteDef[] = [
  {
    path: '/about-us/our-story',
    title: 'Our Story | The Doghouse QLD',
    description:
      'The story behind The Doghouse QLD, from a childhood sidekick named Poochie to a Queensland Cavoodle breeding program built on love and science.',
    Component: OurStory,
  },
  {
    path: '/about-us/meet-the-team',
    title: 'Meet the Team | The Doghouse QLD',
    description:
      'Meet the small, hands-on team behind The Doghouse QLD who raise our Cavoodle puppies through their precious first eight weeks.',
    Component: MeetTheTeam,
  },
  {
    path: '/about-us/our-breeding-philosophy',
    title: 'Our Breeding Philosophy | The Doghouse QLD',
    description:
      'Thoughtful breeding starts long before puppies are born. The health, temperament and structure considerations behind every Doghouse pairing.',
    Component: BreedingPhilosophy,
  },
  {
    path: '/about-us/health-testing',
    title: 'Health & Health Testing | The Doghouse QLD',
    description:
      'Health testing at The Doghouse QLD goes far beyond DNA. Learn about our comprehensive screening program for our breeding dogs.',
    Component: HealthTesting,
  },
  {
    path: '/about-us/guardian-homes',
    title: 'Guardian Homes | The Doghouse QLD',
    description:
      'Selected Doghouse breeding dogs live as loved family pets through our Guardian Program. Learn what is involved and how to apply.',
    Component: GuardianHomes,
  },
  {
    path: '/about-us/guardian-homes/apply',
    title: 'Guardian Home Application | The Doghouse QLD',
    description:
      'Apply to become a Guardian Home with The Doghouse QLD, or join our Guardian Opportunities list for future placements.',
    Component: GuardianApplication,
  },
];
