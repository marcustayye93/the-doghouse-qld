import { asset, usePageMeta, PageHero, ReadMore, CTAButton, PawDivider } from '../../components/ui';

export default function PreparingForPuppy() {
  usePageMeta(
    'Preparing for Your Puppy',
    'How The Doghouse QLD helps you prepare for Go Home Day, with two private guides provided at the right stages of your journey.'
  );
  return (
    <main>
      <PageHero
        title="Preparing for Your Puppy"
        eyebrow="Puppies"
        image={asset("/images/photos/pup-held-outdoors.jpg")}
        imageAlt="Cavoodle puppy being held outdoors"
        intro={
          <>
            <p>
              Welcoming a puppy into your family is incredibly exciting, but there is also plenty
              to think about before those little paws actually arrive.
            </p>
            <p>
              At The Doghouse QLD, we don&apos;t expect our puppy families to work everything out on
              their own. As you move through the final stages of your puppy journey, we&apos;ll
              provide you with two detailed guides at the appropriate times.
            </p>
            <p>
              The first helps you prepare your home, organise what your puppy will need and get
              everything ready for their arrival. The second helps prepare you with the knowledge
              and information you&apos;ll need as you bring your puppy home and begin life together.
            </p>
            <p>
              These guides are provided privately to our Doghouse puppy families, giving you
              detailed information at the stages when it becomes most useful.
            </p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="prose-dog">
          <ReadMore id="preparing-more" summary={<></>}>
            <h2>Preparing for Your Puppy Guide</h2>
            <p>
              Once a puppy has been allocated to your family and the holding fee has been received,
              we&apos;ll email you our Preparing for Your Puppy Guide.
            </p>
            <p>This guide is all about getting ready.</p>
            <p>
              It gives you the detailed information you&apos;ll need to prepare your home and family
              for your puppy&apos;s arrival, including puppy safety within the home, preparing an
              appropriate environment for your puppy, what we recommend having ready before Go Home
              Day and what you are likely to receive in your Doghouse Puppy Pack.
            </p>
            <p>
              Our Puppy Packs can change from time to time, so the guide provides an indication of
              what families are likely to receive rather than a guaranteed list of individual items.
            </p>
            <p>
              We email the Preparing for Your Puppy Guide at this stage so you have plenty of time
              to read through everything, purchase and organise what you need and prepare your home
              before your puppy arrives.
            </p>
            <p>
              The detailed contents of this guide are provided privately to our Doghouse puppy
              families rather than being published in full on our website.
            </p>

            <h2>Moving Into the Final Stage</h2>
            <p>
              As your puppy gets closer to Go Home Day, there are still some important things for
              us to complete.
            </p>
            <p>
              Your puppy will have their veterinary health examination and we will complete their
              temperament evaluation at approximately 6.5 to 7 weeks of age.
            </p>
            <p>
              Once these have been completed, we&apos;ll contact you to discuss your puppy&apos;s
              veterinary check, temperament evaluation and anything else relevant to your puppy.
            </p>
            <p>
              This gives us the opportunity to talk everything through together and make sure we
              are comfortable moving into the final stage of the journey.
            </p>
            <p>At this point, we&apos;ll email you our Bringing Your Puppy Home Guide.</p>

            <h2>Bringing Your Puppy Home Guide</h2>
            <p>The first guide is about preparing your home and getting everything ready.</p>
            <p>
              The Bringing Your Puppy Home Guide is about preparing you with the knowledge and
              information you&apos;ll need once your puppy comes home.
            </p>
            <p>
              This is a comprehensive guide covering the practical information our Doghouse
              families need as they begin life with their new puppy, including information about
              settling your puppy into their new home, toilet training, parasite prevention and
              other important aspects of caring for your puppy during those early days and beyond.
            </p>
            <p>We deliberately email this guide before your puppy arrives.</p>
            <p>
              This gives you time to read through the information, familiarise yourself with what
              to expect and ask questions if you need to before you&apos;re also dealing with all
              the excitement that comes with bringing home a new puppy.
            </p>
            <p>
              The detailed contents of the Bringing Your Puppy Home Guide are provided privately to
              our Doghouse puppy families rather than being published in full on our website.
            </p>

            <h2>A Guide You Can Keep Close By</h2>
            <p>
              We know that once your puppy arrives, having important information close at hand can
              be much easier than searching through old emails.
            </p>
            <p>
              For this reason, our Bringing Your Puppy Home Guide is also provided to our puppy
              families in a printed booklet format for easy reference.
            </p>
            <p>Families collecting their puppy will receive the printed booklet with their puppy&apos;s things.</p>
            <p>
              If your puppy is flying to you and therefore isn&apos;t travelling with one of our
              usual Puppy Packs, you will still receive the Bringing Your Puppy Home Guide in
              printed booklet form.
            </p>
            <p>
              The emailed version means you can familiarise yourself with the information before
              your puppy arrives, while the printed version gives you something convenient to keep
              and refer back to once your puppy is home.
            </p>

            <h2>Preparing You Before Those Little Paws Arrive</h2>
            <p>
              We believe preparing a family for their puppy is an important part of the Doghouse
              journey.
            </p>
            <p>
              Rather than overwhelming you with everything at once, we provide the information at
              the stages when it becomes most useful.
            </p>
            <p>
              The Preparing for Your Puppy Guide helps you prepare your home, organise what your
              puppy will need and understand what to have ready.
            </p>
            <p>
              Your puppy&apos;s veterinary health examination and temperament evaluation allow us to
              discuss those final important details with you before moving forward.
            </p>
            <p>
              Then the Bringing Your Puppy Home Guide helps prepare you with the knowledge and
              information you&apos;ll need as your puppy arrives home and begins their new life with
              your family.
            </p>
            <p>
              By the time Go Home Day arrives, you&apos;ll already have received the detailed
              information you need and had time to familiarise yourself with it.
            </p>
            <p>Then comes the best part.</p>
            <p>Bringing your Doghouse puppy home.</p>
          </ReadMore>

          <div className="mt-10 text-center">
            <CTAButton to="/puppies/process-applying">Learn About Our Puppy Process</CTAButton>
          </div>
        </div>
        <PawDivider />
      </section>
    </main>
  );
}
