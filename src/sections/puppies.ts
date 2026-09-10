import type { RouteDef } from '../routes';
import AvailablePuppies from '../pages/puppies/AvailablePuppies';
import CurrentLitters from '../pages/puppies/CurrentLitters';
import PlannedLitters from '../pages/puppies/PlannedLitters';
import DoghouseMethod from '../pages/puppies/DoghouseMethod';
import FirstEightWeeks from '../pages/puppies/FirstEightWeeks';
import MatchingTemperament from '../pages/puppies/MatchingTemperament';
import ProcessApplying from '../pages/puppies/ProcessApplying';
import PuppyPricing from '../pages/puppies/PuppyPricing';
import MasterWaitlist from '../pages/puppies/MasterWaitlist';
import PreparingForPuppy from '../pages/puppies/PreparingForPuppy';

// Filled in by the section build. Do not edit routes.ts directly.
export const puppyRoutes: RouteDef[] = [
  {
    path: '/puppies/available-puppies',
    title: 'Available Puppies | The Doghouse QLD',
    description:
      'Meet the Doghouse Cavoodle puppies currently looking for their families, and learn how our thoughtful matching process works.',
    Component: AvailablePuppies,
  },
  {
    path: '/puppies/current-litters',
    title: 'Current Litters | The Doghouse QLD',
    description:
      'Current Litters at The Doghouse QLD.',
    Component: CurrentLitters,
  },
  {
    path: '/puppies/planned-litters',
    title: 'Planned & Upcoming Litters | The Doghouse QLD',
    description:
      'See the Doghouse litters we are planning or expecting, and learn what may be coming up at The Doghouse QLD.',
    Component: PlannedLitters,
  },
  {
    path: '/puppies/doghouse-method',
    title: 'The Doghouse Method™ | The Doghouse QLD',
    description:
      'Discover The Doghouse Method, the thoughtful puppy-raising approach behind The Doghouse QLD.',
    Component: DoghouseMethod,
  },
  {
    path: '/puppies/first-eight-weeks',
    title: 'The First Eight Weeks | The Doghouse QLD',
    description:
      'From tiny newborns to curious puppies ready for their families: the first eight weeks at The Doghouse QLD.',
    Component: FirstEightWeeks,
  },
  {
    path: '/puppies/matching-temperament',
    title: 'Puppy Matching & Temperament | The Doghouse QLD',
    description:
      'How we observe, assess and match each Doghouse puppy with the right family, through weeks of observation and temperament assessment.',
    Component: MatchingTemperament,
  },
  {
    path: '/puppies/process-applying',
    title: 'Puppy Process & Applying | The Doghouse QLD',
    description:
      'How the Doghouse puppy process works, from your first application through to finding your puppy. Start your application here.',
    Component: ProcessApplying,
  },
  {
    path: '/puppies/pricing',
    title: 'Puppy Pricing | The Doghouse QLD',
    description:
      'How Doghouse Cavoodle puppy pricing works: from approximately $4,500 upwards, equal pricing within a litter, and the $1,000 holding fee.',
    Component: PuppyPricing,
  },
  {
    path: '/puppies/master-waitlist',
    title: 'Master Waitlist | The Doghouse QLD',
    description:
      'Join the free Doghouse QLD Master Waitlist to hear about future litters and puppy availability.',
    Component: MasterWaitlist,
  },
  {
    path: '/puppies/preparing-for-your-puppy',
    title: 'Preparing for Your Puppy | The Doghouse QLD',
    description:
      'How The Doghouse QLD helps you prepare for Go Home Day, with two private guides provided at the right stages of your journey.',
    Component: PreparingForPuppy,
  },
];
