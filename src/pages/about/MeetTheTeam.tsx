import { PawDivider, usePageMeta } from '../../components/ui';
import { PhotoPlaceholder } from './PhotoPlaceholder';

interface TeamMember {
  name: string;
  role: string;
  paragraphs: string[];
}

// OWNER: Individual team member photographs for Charmaine, Stacey, Ayva and
// John are to be supplied by The Doghouse QLD. Each profile below currently
// renders a placeholder via PhotoPlaceholder in the Profile component.

const team: TeamMember[] = [
  {
    name: 'Charmaine',
    role: 'The Heart Behind The Doghouse',
    paragraphs: [
      'I have loved dogs for as long as I can remember. What began with my little childhood sidekick Poochie eventually grew into a lifelong passion for dogs, breeding, genetics, health, temperament and puppy development.',
      'Today, I oversee The Doghouse QLD breeding program and the decisions that shape it, from researching and planning breeding pairings and reviewing health and genetic information to raising our puppies, observing their developing personalities and helping families find the puppy who may be the right fit for their home.',
      "I am continually learning, questioning and refining what we do. For me, breeding isn't simply about producing beautiful puppies. It is about making thoughtful decisions before they are born, giving them the very best beginning we can during their first eight weeks, and supporting the families who love them long after they leave The Doghouse.",
    ],
  },
  {
    name: 'Stacey',
    role: 'The Right-Hand Gal',
    paragraphs: [
      'Stacey is my right-hand gal and an important part of the hands-on care that goes into raising our Doghouse puppies.',
      'She helps with the everyday world behind the scenes, including preparing and cleaning our whelping and puppy areas, weighing and caring for puppies, routine treatments and worming, and helping implement our puppy curriculum as the puppies grow.',
      'From handling and socialisation to desensitisation, confidence building and early learning experiences, Stacey helps make sure the many little things that need to happen each day happen. Raising puppies properly involves an enormous amount of hands-on work, and Stacey is an important part of making that possible.',
    ],
  },
  {
    name: 'Ayva',
    role: 'Puppy Playmaker & Videographer',
    paragraphs: [
      'Ayva helps bring plenty of fun into The Doghouse puppy curriculum.',
      'She helps with puppy activities and developmental experiences, spending time playing, interacting and working with the puppies as they explore new things and build their confidence.',
      'Ayva is also often behind the camera, capturing videos of our puppies and their adventures so our families can share in those special weeks of development before their puppy comes home. Those videos give families a little window into life at The Doghouse while also capturing some very special puppy memories along the way.',
    ],
  },
  {
    name: 'John',
    role: 'The Dad Who Does It All',
    paragraphs: [
      'John is the man behind an enormous number of the practical jobs that keep The Doghouse running.',
      'He helps with driving and appointments, maintenance, cleaning, caring for our adult dogs and puppies, and all those unexpected jobs that seem to appear when you have a house full of dogs and growing puppies.',
      'Whether something needs collecting, fixing, cleaning, transporting or simply another pair of hands is needed, John is usually there to help. His practical support, weekend help and moral support make him a very important part of life behind the scenes at The Doghouse.',
    ],
  },
];

function Profile({ member, flip }: { member: TeamMember; flip: boolean }) {
  return (
    <section className="grid items-center gap-8 md:grid-cols-2 md:gap-12">
      <div className={flip ? 'md:order-2' : ''}>
        {/* OWNER: Team member photograph to be supplied by The Doghouse QLD. */}
        <PhotoPlaceholder />
      </div>
      <div className={flip ? 'md:order-1' : ''}>
        <h2 className="font-display text-4xl  leading-tight text-brand md:text-5xl">
          {member.name}
        </h2>
        <p className="mt-2 text-sm font-bold uppercase tracking-[0.18em] text-branddark">
          {member.role}
        </p>
        <div className="prose-dog mt-4">
          {member.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function MeetTheTeam() {
  usePageMeta(
    'Meet the Team',
    'Meet the people behind The Doghouse QLD.'
  );

  return (
    <main>
      <section className="mx-auto max-w-6xl px-5 pt-10 pb-4 md:pt-14">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-branddark">
          About Us
        </p>
        <h1 className="text-center font-display text-5xl  leading-tight text-brand md:text-6xl">
          Meet the Team
        </h1>
        <div className="prose-dog mx-auto mt-5 max-w-3xl text-center">
          <p>
            It takes a village to raise our Doghouse puppies, and behind every litter are the
            people who help make those precious first eight weeks possible.
          </p>
          <p>
            From breeding decisions and puppy care to socialisation, early learning, videos,
            appointments, cleaning, maintenance and all the little jobs in between, everyone has
            their part to play. Meet the small, hands-on team behind The Doghouse QLD.
          </p>
        </div>
      </section>

      <PawDivider />

      <div className="mx-auto max-w-6xl space-y-14 px-5 py-10 md:space-y-20 md:py-14">
        {team.map((member, i) => (
          <Profile key={member.name} member={member} flip={i % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
