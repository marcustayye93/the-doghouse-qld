// Master navigation. Order and hierarchy follow the Final Master Site Map
// (ZZZL), which supersedes earlier drafts. Do not reorder without approval.

export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export const navigation: NavItem[] = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about-us',
    children: [
      { label: 'Our Story', path: '/about-us/our-story' },
      { label: 'Meet the Team', path: '/about-us/meet-the-team' },
      { label: 'Our Breeding Philosophy', path: '/about-us/our-breeding-philosophy' },
      { label: 'Health & Health Testing', path: '/about-us/health-testing' },
      { label: 'Guardian Homes', path: '/about-us/guardian-homes' },
    ],
  },
  {
    label: 'Puppies',
    path: '/puppies',
    children: [
      { label: 'Available Puppies', path: '/puppies/available-puppies' },
      { label: 'Current Litters', path: '/puppies/current-litters' },
      { label: 'Planned & Upcoming Litters', path: '/puppies/planned-litters' },
      { label: 'The Doghouse Method™', path: '/puppies/doghouse-method' },
      { label: 'The First Eight Weeks', path: '/puppies/first-eight-weeks' },
      { label: 'Puppy Matching & Temperament', path: '/puppies/matching-temperament' },
      { label: 'Puppy Process & Applying', path: '/puppies/process-applying' },
      { label: 'Puppy Pricing', path: '/puppies/pricing' },
      { label: 'Master Waitlist', path: '/puppies/master-waitlist' },
      { label: 'Preparing for Your Puppy', path: '/puppies/preparing-for-your-puppy' },
    ],
  },
  {
    label: 'Our Dogs',
    path: '/our-dogs',
    children: [
      { label: 'Our Girls', path: '/our-dogs/our-girls' },
      { label: 'Our Studs', path: '/our-dogs/our-studs' },
      { label: 'Retired & Legacy Dogs', path: '/our-dogs/retired-legacy-dogs' },
    ],
  },
  {
    label: 'Cavoodles',
    path: '/cavoodles',
    children: [
      { label: 'About Cavoodles', path: '/cavoodles/about' },
      { label: 'Cavoodle Generations', path: '/cavoodles/generations' },
      { label: 'Cavoodle Sizes', path: '/cavoodles/sizes' },
      { label: 'Coat Types', path: '/cavoodles/coat-types' },
      { label: 'Colours & Markings', path: '/cavoodles/colours-markings' },
      { label: 'Shedding', path: '/cavoodles/shedding' },
      { label: 'Living With a Cavoodle', path: '/cavoodles/living-with-a-cavoodle' },
      { label: 'The Theodore', path: '/cavoodles/the-theodore' },
    ],
  },
  { label: 'Training', path: '/training' },
  { label: 'Doghouse Deli', path: '/doghouse-deli' },
  {
    label: 'Resources',
    path: '/resources',
    children: [
      { label: 'Puppy Resources', path: '/resources/puppy-resources' },
      { label: 'Cavoodle Care', path: '/resources/cavoodle-care' },
      { label: 'Grooming', path: '/resources/grooming' },
      { label: 'Blog', path: '/resources/blog' },
      { label: 'Frequently Asked Questions', path: '/resources/faq' },
      { label: 'Contact Us', path: '/resources/contact-us' },
    ],
  },
];
