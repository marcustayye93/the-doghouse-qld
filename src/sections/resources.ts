import type { RouteDef } from '../routes';
import PuppyResources from '../pages/resources/PuppyResources';
import CavoodleCare from '../pages/resources/CavoodleCare';
import Grooming from '../pages/resources/Grooming';
import Blog from '../pages/resources/Blog';
import Faq from '../pages/resources/Faq';
import ContactUs from '../pages/resources/ContactUs';

// Filled in by the section build. Do not edit routes.ts directly.
export const resourceRoutes: RouteDef[] = [
  {
    path: '/resources/puppy-resources',
    title: 'Puppy Resources | The Doghouse QLD',
    description:
      'Practical puppy resources from The Doghouse QLD: preparing for your puppy, settling in, toilet training, sleep, feeding and the first weeks at home.',
    Component: PuppyResources,
  },
  {
    path: '/resources/cavoodle-care',
    title: 'Cavoodle Care Guide | The Doghouse QLD',
    description:
      'Everyday Cavoodle care from The Doghouse QLD: nutrition, exercise, dental care, preventative health and living well with your Cavoodle.',
    Component: CavoodleCare,
  },
  {
    path: '/resources/grooming',
    title: 'Cavoodle Grooming Guide | The Doghouse QLD',
    description:
      'Cavoodle coat care, brushing technique, professional grooming, nails, ears, eyes, teeth and handling, from puppyhood onward.',
    Component: Grooming,
  },
  {
    path: '/resources/blog',
    title: 'Cavoodle Blog & Puppy Advice | The Doghouse QLD',
    description:
      'Practical Cavoodle advice, puppy information, training and grooming tips, videos and behind-the-scenes moments from The Doghouse QLD.',
    Component: Blog,
  },
  {
    path: '/resources/faq',
    title: 'Frequently Asked Questions | The Doghouse QLD',
    description:
      'Straightforward answers to the questions The Doghouse QLD is asked most often about Cavoodles, puppies, health testing, grooming, pricing and more.',
    Component: Faq,
  },
  {
    path: '/resources/contact-us',
    title: 'Contact The Doghouse QLD | Cavoodle Breeder Queensland',
    description:
      'Get in touch with The Doghouse QLD in Caboolture, Queensland. Puppy enquiries, Guardian Homes, Doghouse Deli, training and general Cavoodle questions.',
    Component: ContactUs,
  },
];
