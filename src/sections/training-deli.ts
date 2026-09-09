import type { RouteDef } from '../routes';
import Training from '../pages/training-deli/Training';
import DoghouseDeli from '../pages/training-deli/DoghouseDeli';

// Filled in by the section build. Do not edit routes.ts directly.
export const trainingDeliRoutes: RouteDef[] = [
  {
    path: '/training',
    title: 'Cavoodle Training | The Doghouse QLD',
    description:
      'A Cavoodle-specific training program is being developed by The Doghouse QLD for Cavoodle families everywhere, focused on confident, well-mannered companions.',
    Component: Training,
  },
  {
    path: '/doghouse-deli',
    title: 'Doghouse Deli | Natural Dog Treat Boxes | The Doghouse QLD',
    description:
      'Doghouse Deli: natural, single-ingredient dog treats in a monthly assorted box, tried and tested by our own Cavoodles.',
    Component: DoghouseDeli,
  },
];
