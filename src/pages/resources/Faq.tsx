import { useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { asset, PageHero, usePageMeta } from '../../components/ui';

const ilink =
  'font-semibold text-branddark underline decoration-brand/40 underline-offset-4 hover:decoration-brand';

type FaqItem = { q: string; a: ReactNode; text: string };
type FaqCategory = { name: string; items: FaqItem[] };

const faqData: FaqCategory[] = [
  {
    name: 'About The Doghouse QLD',
    items: [
      {
        q: 'Where is The Doghouse QLD located?',
        a: (
          <>
            <p>The Doghouse QLD is located in Caboolture, Queensland, north of Brisbane.</p>
            <p>Our puppies are raised in our home environment and purpose-designed puppy areas rather than in a commercial kennel environment.</p>
          </>
        ),
        text: 'Where is The Doghouse QLD located? The Doghouse QLD is located in Caboolture, Queensland, north of Brisbane. Our puppies are raised in our home environment and purpose-designed puppy areas rather than in a commercial kennel environment.',
      },
      {
        q: 'What breed do you specialise in?',
        a: (
          <>
            <p>We specialise in multi-generational Cavoodles.</p>
            <p>We are passionate about the continued development of the Cavoodle and support the development and recognition of the Theodore through the MDBA.</p>
          </>
        ),
        text: 'What breed do you specialise in? We specialise in multi-generational Cavoodles. We are passionate about the continued development of the Cavoodle and support the development and recognition of the Theodore through the MDBA.',
      },
      {
        q: 'Do you breed first-generation Cavoodles?',
        a: (
          <>
            <p>Our breeding program focuses on multi-generational Cavoodles rather than producing first-generation Cavalier King Charles Spaniel × Poodle litters.</p>
            <p>Most of our breeding is Cavoodle × Cavoodle, with carefully considered Cavalier backcrossing used where appropriate within our longer-term breeding program.</p>
            <p>You can learn much more about this under <Link to="/cavoodles/generations" className={ilink}>Cavoodle Generations</Link>.</p>
          </>
        ),
        text: 'Do you breed first-generation Cavoodles? Our breeding program focuses on multi-generational Cavoodles rather than producing first-generation Cavalier King Charles Spaniel × Poodle litters. Most of our breeding is Cavoodle × Cavoodle, with carefully considered Cavalier backcrossing used where appropriate within our longer-term breeding program. You can learn much more about this under CAVOODLES > Cavoodle Generations.',
      },
      {
        q: 'What is most important to you when breeding?',
        a: (
          <>
            <p>No breeding decision should be based on one characteristic alone.</p>
            <p>Health, temperament, genetics, structure, compatibility between the parents and the qualities we're hoping to strengthen in future generations all matter.</p>
            <p>Colour and appearance can certainly be part of a breeding decision, but they should never be considered in isolation from health and temperament.</p>
          </>
        ),
        text: "What is most important to you when breeding? No breeding decision should be based on one characteristic alone. Health, temperament, genetics, structure, compatibility between the parents and the qualities we're hoping to strengthen in future generations all matter. Colour and appearance can certainly be part of a breeding decision, but they should never be considered in isolation from health and temperament.",
      },
      {
        q: 'Are your puppies raised in your home?',
        a: (
          <>
            <p>Yes.</p>
            <p>Our puppies begin life in our dedicated indoor whelping room within our home, where we can closely monitor mothers and babies.</p>
            <p>As they grow, their world gradually becomes larger.</p>
            <p>They move into larger puppy areas and, when developmentally appropriate, experience supervised outdoor environments as part of their socialisation, confidence building and toilet-learning foundations.</p>
          </>
        ),
        text: 'Are your puppies raised in your home? Yes. Our puppies begin life in our dedicated indoor whelping room within our home, where we can closely monitor mothers and babies. As they grow, their world gradually becomes larger. They move into larger puppy areas and, when developmentally appropriate, experience supervised outdoor environments as part of their socialisation, confidence building and toilet-learning foundations.',
      },
    ],
  },
  {
    name: 'Our Puppies',
    items: [
      {
        q: 'How are Doghouse puppies raised?',
        a: (
          <>
            <p>Our puppies are raised using The Doghouse Method™, our own structured approach to early puppy development.</p>
            <p>It includes age-appropriate experiences involving ENS and ESI, handling, novelty, different surfaces, household sounds, grooming preparation, problem solving, confidence building, socialisation, desensitisation and exposure to everyday life.</p>
            <p>The purpose isn't to create puppies who have "seen everything" before eight weeks.</p>
            <p>That's impossible.</p>
            <p>We want to give them thoughtful foundations that help prepare them to continue learning when they join their families.</p>
          </>
        ),
        text: 'How are Doghouse puppies raised? Our puppies are raised using The Doghouse Method™, our own structured approach to early puppy development. It includes age-appropriate experiences involving ENS and ESI, handling, novelty, different surfaces, household sounds, grooming preparation, problem solving, confidence building, socialisation, desensitisation and exposure to everyday life. The purpose isn\'t to create puppies who have "seen everything" before eight weeks. That\'s impossible. We want to give them thoughtful foundations that help prepare them to continue learning when they join their families.',
      },
      {
        q: 'What are ENS and ESI?',
        a: (
          <>
            <p>ENS stands for Early Neurological Stimulation and ESI stands for Early Scent Introduction.</p>
            <p>These are structured early-development exercises introduced during a specific developmental period.</p>
            <p>They form one small part of our broader puppy-raising program rather than being treated as a complete socialisation program on their own.</p>
            <p>You can read more about our approach in <Link to="/puppies/doghouse-method" className={ilink}>The Doghouse Method™</Link>.</p>
          </>
        ),
        text: 'What are ENS and ESI? ENS stands for Early Neurological Stimulation and ESI stands for Early Scent Introduction. These are structured early-development exercises introduced during a specific developmental period. They form one small part of our broader puppy-raising program rather than being treated as a complete socialisation program on their own. Link to PUPPIES > The Doghouse Method™.',
      },
      {
        q: 'When can puppies go to their new homes?',
        a: (
          <>
            <p>Puppies cannot leave us before eight weeks of age.</p>
            <p>Occasionally we may decide that an individual puppy would benefit from remaining with us a little longer.</p>
            <p>The puppy's wellbeing and readiness come before a particular calendar date.</p>
          </>
        ),
        text: "When can puppies go to their new homes? Puppies cannot leave us before eight weeks of age. Occasionally we may decide that an individual puppy would benefit from remaining with us a little longer. The puppy's wellbeing and readiness come before a particular calendar date.",
      },
      {
        q: 'Can I choose my puppy based only on a photograph?',
        a: (
          <>
            <p>We understand that appearance matters to families and that sometimes one particular little face immediately catches your attention.</p>
            <p>But appearance isn't the only thing we want you to consider.</p>
            <p>Temperament, confidence, energy, sensitivity and the puppy's individual characteristics all influence how well they may suit a particular household.</p>
            <p>Our goal isn't simply to help you choose the puppy you find prettiest.</p>
            <p>It's to help you find a puppy who has the potential to fit beautifully into your life.</p>
          </>
        ),
        text: "Can I choose my puppy based only on a photograph? We understand that appearance matters to families and that sometimes one particular little face immediately catches your attention. But appearance isn't the only thing we want you to consider. Temperament, confidence, energy, sensitivity and the puppy's individual characteristics all influence how well they may suit a particular household. Our goal isn't simply to help you choose the puppy you find prettiest. It's to help you find a puppy who has the potential to fit beautifully into your life.",
      },
      {
        q: 'Do you temperament evaluate your puppies?',
        a: (
          <>
            <p>Yes.</p>
            <p>We evaluate our puppies at approximately six and a half to seven weeks of age, when we can gather more useful information about their developing individual temperaments.</p>
            <p>This information helps us consider how a puppy may fit with the lifestyle, expectations and household of a prospective family.</p>
            <p>Temperament evaluation is a snapshot of a developing puppy, not a guarantee of exactly what that dog will become as an adult.</p>
            <p>Genetics matter, but so do ongoing training, socialisation, experiences, environment and the relationship a family builds with their dog.</p>
          </>
        ),
        text: 'Do you temperament evaluate your puppies? Yes. We evaluate our puppies at approximately six and a half to seven weeks of age, when we can gather more useful information about their developing individual temperaments. This information helps us consider how a puppy may fit with the lifestyle, expectations and household of a prospective family. Temperament evaluation is a snapshot of a developing puppy, not a guarantee of exactly what that dog will become as an adult. Genetics matter, but so do ongoing training, socialisation, experiences, environment and the relationship a family builds with their dog.',
      },
      {
        q: "Can you guarantee a puppy's adult temperament?",
        a: (
          <>
            <p>No responsible breeder can guarantee exactly how an eight-week-old puppy will behave throughout its adult life.</p>
            <p>We make thoughtful breeding decisions, raise our puppies carefully, observe them closely and evaluate their developing temperaments.</p>
            <p>But the puppy's experiences after leaving us matter enormously too.</p>
            <p>We see puppy raising as a partnership between breeder and family.</p>
          </>
        ),
        text: "Can you guarantee a puppy's adult temperament? No responsible breeder can guarantee exactly how an eight-week-old puppy will behave throughout its adult life. We make thoughtful breeding decisions, raise our puppies carefully, observe them closely and evaluate their developing temperaments. But the puppy's experiences after leaving us matter enormously too. We see puppy raising as a partnership between breeder and family.",
      },
    ],
  },
  {
    name: 'Choosing a Cavoodle',
    items: [
      {
        q: 'What is a Cavoodle?',
        a: (
          <>
            <p>A Cavoodle, also known internationally as a Cavapoo, originated from crossing the Cavalier King Charles Spaniel and Poodle.</p>
            <p>Today, Cavoodles can also be bred through established Cavoodle lines rather than every generation returning to the two original parent breeds.</p>
            <p>The Doghouse QLD specialises in multi-generational Cavoodles.</p>
          </>
        ),
        text: 'What is a Cavoodle? A Cavoodle, also known internationally as a Cavapoo, originated from crossing the Cavalier King Charles Spaniel and Poodle. Today, Cavoodles can also be bred through established Cavoodle lines rather than every generation returning to the two original parent breeds. The Doghouse QLD specialises in multi-generational Cavoodles.',
      },
      {
        q: 'Are Cavoodles good family dogs?',
        a: (
          <>
            <p>They certainly can be.</p>
            <p>Cavoodles are often affectionate, intelligent and people-oriented companions, which is one reason they have become such popular family dogs.</p>
            <p>But breed label alone doesn't determine whether an individual dog is suitable for a particular family.</p>
            <p>Temperament, energy, sensitivity, training, socialisation and the family's lifestyle all matter.</p>
          </>
        ),
        text: "Are Cavoodles good family dogs? They certainly can be. Cavoodles are often affectionate, intelligent and people-oriented companions, which is one reason they have become such popular family dogs. But breed label alone doesn't determine whether an individual dog is suitable for a particular family. Temperament, energy, sensitivity, training, socialisation and the family's lifestyle all matter.",
      },
      {
        q: 'Are Cavoodles good with children?',
        a: (
          <>
            <p>Many Cavoodles live beautifully with children.</p>
            <p>But a good child-dog relationship requires guidance on both sides.</p>
            <p>Children need to learn how to interact respectfully with dogs, and puppies need to learn appropriate behaviour around children.</p>
            <p>Young children and dogs should be appropriately supervised.</p>
            <p>A puppy should also have somewhere safe to rest without being followed, climbed on or disturbed.</p>
          </>
        ),
        text: 'Are Cavoodles good with children? Many Cavoodles live beautifully with children. But a good child-dog relationship requires guidance on both sides. Children need to learn how to interact respectfully with dogs, and puppies need to learn appropriate behaviour around children. Young children and dogs should be appropriately supervised. A puppy should also have somewhere safe to rest without being followed, climbed on or disturbed.',
      },
      {
        q: 'Can Cavoodles live with other dogs?',
        a: (
          <>
            <p>Many can and do.</p>
            <p>The temperament and behaviour of both dogs matter, as does how introductions and ongoing interactions are managed.</p>
            <p>If you already have another dog, please tell us about them when you apply so we can take your existing household into consideration.</p>
          </>
        ),
        text: 'Can Cavoodles live with other dogs? Many can and do. The temperament and behaviour of both dogs matter, as does how introductions and ongoing interactions are managed. If you already have another dog, please tell us about them when you apply so we can take your existing household into consideration.',
      },
      {
        q: 'Can Cavoodles live with cats?',
        a: (
          <>
            <p>Many Cavoodles live successfully with cats, particularly when introductions are managed thoughtfully.</p>
            <p>The individual puppy, the cat's temperament, previous experiences and the way introductions are handled all matter.</p>
          </>
        ),
        text: "Can Cavoodles live with cats? Many Cavoodles live successfully with cats, particularly when introductions are managed thoughtfully. The individual puppy, the cat's temperament, previous experiences and the way introductions are handled all matter.",
      },
      {
        q: 'Are Cavoodles suitable for apartments?',
        a: (
          <>
            <p>A Cavoodle doesn't necessarily require a large property to have a good life.</p>
            <p>What matters is whether their physical, mental, social and training needs are being met.</p>
            <p>A dog living in an apartment with appropriate exercise, enrichment, training and companionship may have a far richer life than a dog who has a large backyard but very little meaningful interaction.</p>
            <p>Families also need to consider barking, toilet access and teaching their dog to settle.</p>
          </>
        ),
        text: "Are Cavoodles suitable for apartments? A Cavoodle doesn't necessarily require a large property to have a good life. What matters is whether their physical, mental, social and training needs are being met. A dog living in an apartment with appropriate exercise, enrichment, training and companionship may have a far richer life than a dog who has a large backyard but very little meaningful interaction. Families also need to consider barking, toilet access and teaching their dog to settle.",
      },
      {
        q: 'Are Cavoodles easy to train?',
        a: (
          <>
            <p>Cavoodles are generally intelligent and can be very responsive to training.</p>
            <p>But intelligent doesn't mean automatically trained.</p>
            <p>They still need clear, consistent teaching.</p>
            <p>Some can also be sensitive, excitable or extremely good at discovering which behaviours make their humans respond.</p>
            <p>Training should begin from the moment your puppy comes home and continue throughout life.</p>
          </>
        ),
        text: "Are Cavoodles easy to train? Cavoodles are generally intelligent and can be very responsive to training. But intelligent doesn't mean automatically trained. They still need clear, consistent teaching. Some can also be sensitive, excitable or extremely good at discovering which behaviours make their humans respond. Training should begin from the moment your puppy comes home and continue throughout life.",
      },
    ],
  },
  {
    name: 'Cavoodle Sizes',
    items: [
      {
        q: 'What sizes do you breed?',
        a: (
          <>
            <p>The Doghouse QLD breeds Cavoodles across smaller size ranges.</p>
            <p>As a general guide, we describe:</p>
            <p>Teacup: under approximately 4 kg</p>
            <p>Toy: approximately 4 to 8 kg</p>
            <p>Mini: approximately 7 to 12 kg</p>
            <p>There can be overlap between categories.</p>
          </>
        ),
        text: 'What sizes do you breed? The Doghouse QLD breeds Cavoodles across smaller size ranges. As a general guide, we describe: Teacup: under approximately 4 kg Toy: approximately 4 to 8 kg Mini: approximately 7 to 12 kg There can be overlap between categories.',
      },
      {
        q: 'Is "Teacup Cavoodle" an official breed size?',
        a: (
          <>
            <p>No.</p>
            <p>Teacup is a descriptive term used for particularly small Cavoodles. It isn't a formally recognised Cavoodle size classification.</p>
            <p>Where we use the term, we're using it to help families understand the approximate size we're expecting rather than claiming it is an official breed category.</p>
          </>
        ),
        text: 'Is "Teacup Cavoodle" an official breed size? No. Teacup is a descriptive term used for particularly small Cavoodles. It isn\'t a formally recognised Cavoodle size classification. Where we use the term, we\'re using it to help families understand the approximate size we\'re expecting rather than claiming it is an official breed category.',
      },
      {
        q: "Can you guarantee my puppy's adult weight?",
        a: (
          <>
            <p>No.</p>
            <p>We can provide an estimate based on the puppy, parents, previous offspring and the information available to us, but genetics don't operate according to a calculator.</p>
            <p>Even littermates can mature at different sizes.</p>
            <p>Adult weights are therefore predictions, not guarantees.</p>
          </>
        ),
        text: "Can you guarantee my puppy's adult weight? No. We can provide an estimate based on the puppy, parents, previous offspring and the information available to us, but genetics don't operate according to a calculator. Even littermates can mature at different sizes. Adult weights are therefore predictions, not guarantees.",
      },
    ],
  },
  {
    name: 'Coats and Shedding',
    items: [
      {
        q: 'What Cavoodle coat types do you have?',
        a: (
          <>
            <p>We broadly describe our coats as:</p>
            <p>Wool: Generally tighter and curlier.</p>
            <p>Fleece: Typically a softer curl or wave that sits between wool and shaggy.</p>
            <p>Shaggy: Can range from a gentle curl or wave through to a considerably straighter appearance.</p>
            <p>Individual coats vary, even within the same litter.</p>
          </>
        ),
        text: 'What Cavoodle coat types do you have? We broadly describe our coats as: Wool: Generally tighter and curlier. Fleece: Typically a softer curl or wave that sits between wool and shaggy. Shaggy: Can range from a gentle curl or wave through to a considerably straighter appearance. Individual coats vary, even within the same litter.',
      },
      {
        q: 'Are Cavoodles non-shedding?',
        a: (
          <>
            <p>We don't guarantee any Cavoodle to be completely non-shedding.</p>
            <p>Our Cavoodles are bred as low-shedding dogs, but the amount of shedding can vary with coat type and genetics.</p>
            <p>Wool coats generally tend towards the lower-shedding end, but individual dogs vary.</p>
          </>
        ),
        text: "Are Cavoodles non-shedding? We don't guarantee any Cavoodle to be completely non-shedding. Our Cavoodles are bred as low-shedding dogs, but the amount of shedding can vary with coat type and genetics. Wool coats generally tend towards the lower-shedding end, but individual dogs vary.",
      },
      {
        q: 'Are Cavoodles hypoallergenic?',
        a: (
          <>
            <p>We don't guarantee a Cavoodle to be hypoallergenic.</p>
            <p>People can react to more than shed hair, including dander and saliva.</p>
            <p>If somebody in your household has significant dog allergies, we recommend discussing this appropriately before assuming a Cavoodle will automatically solve the problem.</p>
          </>
        ),
        text: "Are Cavoodles hypoallergenic? We don't guarantee a Cavoodle to be hypoallergenic. People can react to more than shed hair, including dander and saliva. If somebody in your household has significant dog allergies, we recommend discussing this appropriately before assuming a Cavoodle will automatically solve the problem.",
      },
      {
        q: 'Why is my puppy shedding more as they grow?',
        a: (
          <>
            <p>Puppy coats change.</p>
            <p>As the adult coat develops, families may notice changes in texture, curl and shedding.</p>
            <p>This transition can continue through approximately the first 18 months, although every dog develops differently.</p>
            <p>A puppy's early coat isn't necessarily an exact representation of their eventual adult coat.</p>
          </>
        ),
        text: "Why is my puppy shedding more as they grow? Puppy coats change. As the adult coat develops, families may notice changes in texture, curl and shedding. This transition can continue through approximately the first 18 months, although every dog develops differently. A puppy's early coat isn't necessarily an exact representation of their eventual adult coat.",
      },
      {
        q: 'Do your puppies have furnishings?',
        a: (
          <>
            <p>Our puppies have at least one copy of the furnishings gene associated with the characteristic furnished Cavoodle face.</p>
          </>
        ),
        text: 'Do your puppies have furnishings? Our puppies have at least one copy of the furnishings gene associated with the characteristic furnished Cavoodle face.',
      },
    ],
  },
  {
    name: 'Colours and Markings',
    items: [
      {
        q: 'What colours do Cavoodles come in?',
        a: (
          <>
            <p>Cavoodles can occur in a beautiful variety of colours and patterns.</p>
            <p>Colours we discuss within our program include red, apricot, cream, chocolate and black, together with shades such as ruby and caramel.</p>
            <p>Patterns can include abstract white, parti, phantom, tri-colour and merle variations.</p>
            <p>You can explore this further in <Link to="/cavoodles/colours-markings" className={ilink}>Colours &amp; Markings</Link>.</p>
          </>
        ),
        text: 'What colours do Cavoodles come in? Cavoodles can occur in a beautiful variety of colours and patterns. Colours we discuss within our program include red, apricot, cream, chocolate and black, together with shades such as ruby and caramel. Patterns can include abstract white, parti, phantom, tri-colour and merle variations. Link to CAVOODLES > Colours & Markings.',
      },
      {
        q: "Does a puppy's colour stay exactly the same?",
        a: (
          <>
            <p>Not necessarily.</p>
            <p>Coat colour can change as a puppy matures.</p>
            <p>Some colours may lighten or soften, and the adult coat may look somewhat different from the puppy coat.</p>
            <p>We can describe what we see and what genetics tell us, but we can't promise that a puppy will remain precisely the same shade throughout life.</p>
          </>
        ),
        text: "Does a puppy's colour stay exactly the same? Not necessarily. Coat colour can change as a puppy matures. Some colours may lighten or soften, and the adult coat may look somewhat different from the puppy coat. We can describe what we see and what genetics tell us, but we can't promise that a puppy will remain precisely the same shade throughout life.",
      },
      {
        q: 'Is colour more important than temperament?',
        a: (
          <>
            <p>No.</p>
            <p>It's completely reasonable to have preferences about colour, coat and appearance.</p>
            <p>But we don't believe those preferences should override suitability.</p>
            <p>The puppy has to live in your family long after the excitement of choosing a colour has passed.</p>
          </>
        ),
        text: "Is colour more important than temperament? No. It's completely reasonable to have preferences about colour, coat and appearance. But we don't believe those preferences should override suitability. The puppy has to live in your family long after the excitement of choosing a colour has passed.",
      },
    ],
  },
  {
    name: 'Health and Health Testing',
    items: [
      {
        q: 'Do you health test your breeding dogs?',
        a: (
          <>
            <p>Yes.</p>
            <p>Health testing is an important part of our breeding program.</p>
            <p>Our approach moving forward includes comprehensive DNA testing together with relevant physical and specialist assessments such as hip and elbow assessment, cardiac evaluation including echocardiography, specialist ophthalmology examinations, patella assessment, teeth and bite assessment and general physical evaluation.</p>
            <p>The appropriate testing depends on the individual dog and its role within our breeding program.</p>
          </>
        ),
        text: 'Do you health test your breeding dogs? Yes. Health testing is an important part of our breeding program. Our approach moving forward includes comprehensive DNA testing together with relevant physical and specialist assessments such as hip and elbow assessment, cardiac evaluation including echocardiography, specialist ophthalmology examinations, patella assessment, teeth and bite assessment and general physical evaluation. The appropriate testing depends on the individual dog and its role within our breeding program.',
      },
      {
        q: 'Does DNA testing mean a puppy can never develop a health problem?',
        a: (
          <>
            <p>No.</p>
            <p>DNA testing is extremely useful, but it isn't a crystal ball.</p>
            <p>It allows breeders to test for particular known genetic variants for which reliable tests are available.</p>
            <p>It doesn't predict every illness or condition a dog could ever develop.</p>
            <p>Some conditions are influenced by multiple genes, environment, development, injury, chance or factors we don't yet fully understand.</p>
          </>
        ),
        text: "Does DNA testing mean a puppy can never develop a health problem? No. DNA testing is extremely useful, but it isn't a crystal ball. It allows breeders to test for particular known genetic variants for which reliable tests are available. It doesn't predict every illness or condition a dog could ever develop. Some conditions are influenced by multiple genes, environment, development, injury, chance or factors we don't yet fully understand.",
      },
      {
        q: 'Do you provide a health guarantee?',
        a: (
          <>
            <p>Yes.</p>
            <p>Our puppies are provided with a health guarantee subject to the terms of our puppy agreement.</p>
            <p>Families have a 10-day period following handover to have their puppy independently examined by their own veterinarian.</p>
            <p>Our genetic health guarantee extends for two years and relates to genetic diseases detectable through DNA testing that was available at the time the puppy's parents were tested, subject to the terms and conditions of our agreement.</p>
            <p>Conditions that are not straightforward single-gene DNA-testable diseases, including environmentally and developmentally influenced conditions, aren't automatically covered by that genetic guarantee.</p>
            <p>Families should read the complete puppy agreement rather than relying on a short website summary when making a purchase decision.</p>
          </>
        ),
        text: "Do you provide a health guarantee? Yes. Our puppies are provided with a health guarantee subject to the terms of our puppy agreement. Families have a 10-day period following handover to have their puppy independently examined by their own veterinarian. Our genetic health guarantee extends for two years and relates to genetic diseases detectable through DNA testing that was available at the time the puppy's parents were tested, subject to the terms and conditions of our agreement. Conditions that are not straightforward single-gene DNA-testable diseases, including environmentally and developmentally influenced conditions, aren't automatically covered by that genetic guarantee. Families should read the complete puppy agreement rather than relying on a short website summary when making a purchase decision.",
      },
    ],
  },
  {
    name: 'Vaccinations, Microchipping and Veterinary Care',
    items: [
      {
        q: 'Are Doghouse puppies vaccinated?',
        a: (
          <>
            <p>Yes.</p>
            <p>Our puppies begin their puppy vaccination schedule before leaving us.</p>
            <p>Puppies require a series of puppy vaccinations rather than one vaccination providing complete protection.</p>
            <p>Doghouse families receive information about what their puppy has already received and what is still required.</p>
          </>
        ),
        text: 'Are Doghouse puppies vaccinated? Yes. Our puppies begin their puppy vaccination schedule before leaving us. Puppies require a series of puppy vaccinations rather than one vaccination providing complete protection. Doghouse families receive information about what their puppy has already received and what is still required.',
      },
      {
        q: 'How many puppy vaccinations are required?',
        a: (
          <>
            <p>Our puppies follow a three-vaccination puppy schedule.</p>
            <p>Families need to arrange the remaining vaccinations with their veterinarian according to the information supplied at handover.</p>
          </>
        ),
        text: 'How many puppy vaccinations are required? Our puppies follow a three-vaccination puppy schedule. Families need to arrange the remaining vaccinations with their veterinarian according to the information supplied at handover.',
      },
      {
        q: 'When can my puppy walk on public ground?',
        a: (
          <>
            <p>Our Doghouse recommendation is to avoid public ground until 10 days after the puppy's final puppy vaccination.</p>
            <p>This is particularly important in areas where unknown dogs may have been and where infectious disease could be present.</p>
            <p>Your veterinarian can also advise you according to disease risks in your local area.</p>
          </>
        ),
        text: "When can my puppy walk on public ground? Our Doghouse recommendation is to avoid public ground until 10 days after the puppy's final puppy vaccination. This is particularly important in areas where unknown dogs may have been and where infectious disease could be present. Your veterinarian can also advise you according to disease risks in your local area.",
      },
      {
        q: "Does that mean my puppy shouldn't be socialised until vaccinations are finished?",
        a: (
          <>
            <p>No.</p>
            <p>Socialisation begins well before puppies can safely walk everywhere in public.</p>
            <p>There are many ways to provide controlled, lower-risk experiences while vaccination protection is developing.</p>
            <p>Your puppy can experience car travel, household life, different sounds and surfaces, suitable visitors and carefully selected environments without being placed unnecessarily onto higher-risk public ground.</p>
          </>
        ),
        text: "Does that mean my puppy shouldn't be socialised until vaccinations are finished? No. Socialisation begins well before puppies can safely walk everywhere in public. There are many ways to provide controlled, lower-risk experiences while vaccination protection is developing. Your puppy can experience car travel, household life, different sounds and surfaces, suitable visitors and carefully selected environments without being placed unnecessarily onto higher-risk public ground.",
      },
      {
        q: 'Are puppies microchipped?',
        a: (
          <>
            <p>Yes.</p>
            <p>Our puppies are microchipped as part of their early veterinary care.</p>
            <p>Families receive the relevant information as part of their puppy documentation.</p>
          </>
        ),
        text: 'Are puppies microchipped? Yes. Our puppies are microchipped as part of their early veterinary care. Families receive the relevant information as part of their puppy documentation.',
      },
    ],
  },
  {
    name: 'Applying for a Puppy',
    items: [
      {
        q: 'How do I apply for a Doghouse puppy?',
        a: (
          <>
            <p>Please visit <Link to="/puppies/process-applying" className={ilink}>Puppy Process &amp; Applying</Link> for our current application process.</p>
          </>
        ),
        text: 'How do I apply for a Doghouse puppy? Please visit PUPPIES > Puppy Process & Applying for our current application process.',
      },
      {
        q: 'Do you have a waitlist?',
        a: (
          <>
            <p>We have a free Master Waitlist for families who would like to hear about upcoming puppies and litters.</p>
            <p>We don't require families to pay simply to sit on the Master Waitlist.</p>
            <p>Visit <Link to="/puppies/master-waitlist" className={ilink}>Master Waitlist</Link> for the current process.</p>
          </>
        ),
        text: "Do you have a waitlist? We have a free Master Waitlist for families who would like to hear about upcoming puppies and litters. We don't require families to pay simply to sit on the Master Waitlist. Visit PUPPIES > Master Waitlist for the current process.",
      },
      {
        q: 'Does joining the Master Waitlist guarantee me a puppy?',
        a: (
          <>
            <p>No.</p>
            <p>Joining the Master Waitlist allows you to receive information about upcoming litters and availability.</p>
            <p>It doesn't guarantee that a particular litter will contain a puppy matching your preferences or that a particular puppy will be allocated to you.</p>
          </>
        ),
        text: "Does joining the Master Waitlist guarantee me a puppy? No. Joining the Master Waitlist allows you to receive information about upcoming litters and availability. It doesn't guarantee that a particular litter will contain a puppy matching your preferences or that a particular puppy will be allocated to you.",
      },
      {
        q: 'Do I need to pay a deposit to join the Master Waitlist?',
        a: (
          <>
            <p>No.</p>
            <p>Our Master Waitlist is free to join.</p>
          </>
        ),
        text: 'Do I need to pay a deposit to join the Master Waitlist? No. Our Master Waitlist is free to join.',
      },
      {
        q: 'Where can I see available puppies?',
        a: (
          <>
            <p>Available puppies will be displayed through our current puppy availability process, including our website and RightPaw where applicable.</p>
            <p>Visit <Link to="/puppies/available-puppies" className={ilink}>Available Puppies</Link> for the most current information.</p>
          </>
        ),
        text: 'Where can I see available puppies? Available puppies will be displayed through our current puppy availability process, including our website and RightPaw where applicable. Visit PUPPIES > Available Puppies for the most current information.',
      },
      {
        q: 'Do you always make every puppy available?',
        a: (
          <>
            <p>No.</p>
            <p>As the breeder, we may retain a puppy for our own breeding program or make other breeding-program decisions before puppies are offered publicly.</p>
            <p>Not every puppy born at The Doghouse will therefore necessarily become available for purchase.</p>
          </>
        ),
        text: 'Do you always make every puppy available? No. As the breeder, we may retain a puppy for our own breeding program or make other breeding-program decisions before puppies are offered publicly. Not every puppy born at The Doghouse will therefore necessarily become available for purchase.',
      },
    ],
  },
  {
    name: 'Pricing and Holding a Puppy',
    items: [
      {
        q: 'How much are Doghouse puppies?',
        a: (
          <>
            <p>Our puppy pricing begins from $4,500 and may vary depending on the particular litter and the costs associated with producing and raising that litter.</p>
            <p>For the most current information, visit <Link to="/puppies/pricing" className={ilink}>Puppy Pricing</Link>.</p>
          </>
        ),
        text: 'How much are Doghouse puppies? Our puppy pricing begins from $4,500 and may vary depending on the particular litter and the costs associated with producing and raising that litter. For the most current information, visit PUPPIES > Puppy Pricing.',
      },
      {
        q: "Why don't all puppies necessarily cost exactly the same?",
        a: (
          <>
            <p>Breeding costs can vary between litters.</p>
            <p>Our pricing can therefore reflect the particular breeding and associated costs rather than assuming every litter costs exactly the same to produce.</p>
            <p>Current pricing will always be shown through the appropriate puppy information.</p>
          </>
        ),
        text: "Why don't all puppies necessarily cost exactly the same? Breeding costs can vary between litters. Our pricing can therefore reflect the particular breeding and associated costs rather than assuming every litter costs exactly the same to produce. Current pricing will always be shown through the appropriate puppy information.",
      },
      {
        q: 'Is there a holding fee?',
        a: (
          <>
            <p>Once a puppy is being formally held for a family, our current holding-fee arrangements and conditions will be clearly explained before payment is made.</p>
            <p>Because financial policies can change over time, please refer to <Link to="/puppies/process-applying" className={ilink}>Puppy Process &amp; Applying</Link> and the puppy agreement for the current terms rather than relying on older information.</p>
          </>
        ),
        text: 'Is there a holding fee? Once a puppy is being formally held for a family, our current holding-fee arrangements and conditions will be clearly explained before payment is made. Because financial policies can change over time, please refer to PUPPIES > Puppy Process & Applying and the puppy agreement for the current terms rather than relying on older information.',
      },
    ],
  },
  {
    name: 'Visiting The Doghouse',
    items: [
      {
        q: 'Can I visit before applying?',
        a: (
          <>
            <p>For the privacy, safety and wellbeing of our dogs, puppies and family, The Doghouse isn't open for general drop-in visits.</p>
            <p>Once an application has been received and we have an available puppy or suitable litter to discuss with you, we can arrange the appropriate next step, which may include a phone conversation and/or visit.</p>
          </>
        ),
        text: "Can I visit before applying? For the privacy, safety and wellbeing of our dogs, puppies and family, The Doghouse isn't open for general drop-in visits. Once an application has been received and we have an available puppy or suitable litter to discuss with you, we can arrange the appropriate next step, which may include a phone conversation and/or visit.",
      },
      {
        q: 'Can I meet a puppy before making a final decision?',
        a: (
          <>
            <p>Where practical and appropriate, we can arrange visits as part of the puppy process.</p>
            <p>We want families to have an opportunity to ask questions and for us to get to know them too.</p>
            <p>Visits need to be managed around young puppies, mothers, disease risk and the day-to-day demands of raising litters.</p>
          </>
        ),
        text: 'Can I meet a puppy before making a final decision? Where practical and appropriate, we can arrange visits as part of the puppy process. We want families to have an opportunity to ask questions and for us to get to know them too. Visits need to be managed around young puppies, mothers, disease risk and the day-to-day demands of raising litters.',
      },
      {
        q: 'What if I live interstate?',
        a: (
          <>
            <p>Interstate families are very welcome.</p>
            <p>Where an in-person visit isn't practical, we can use video calls such as FaceTime so families can meet puppies and speak with us.</p>
          </>
        ),
        text: "What if I live interstate? Interstate families are very welcome. Where an in-person visit isn't practical, we can use video calls such as FaceTime so families can meet puppies and speak with us.",
      },
    ],
  },
  {
    name: 'Interstate Puppies and Travel',
    items: [
      {
        q: 'Can a Doghouse puppy travel interstate?',
        a: (
          <>
            <p>Yes, where appropriate arrangements can be made.</p>
            <p>We have puppies join families interstate and can discuss travel requirements with you.</p>
          </>
        ),
        text: 'Can a Doghouse puppy travel interstate? Yes, where appropriate arrangements can be made. We have puppies join families interstate and can discuss travel requirements with you.',
      },
      {
        q: 'Can puppies fly to their new families?',
        a: (
          <>
            <p>Where appropriate, puppies can travel by air.</p>
            <p>Flight arrangements and costs depend on the destination, airline requirements and arrangements applicable at the time.</p>
          </>
        ),
        text: 'Can puppies fly to their new families? Where appropriate, puppies can travel by air. Flight arrangements and costs depend on the destination, airline requirements and arrangements applicable at the time.',
      },
      {
        q: 'Will my puppy have the veterinary documentation required to fly?',
        a: (
          <>
            <p>Where air travel requires additional veterinary documentation, this can be arranged as appropriate.</p>
            <p>Requirements can change, so travel arrangements should always be confirmed for the individual puppy and destination.</p>
          </>
        ),
        text: 'Will my puppy have the veterinary documentation required to fly? Where air travel requires additional veterinary documentation, this can be arranged as appropriate. Requirements can change, so travel arrangements should always be confirmed for the individual puppy and destination.',
      },
    ],
  },
  {
    name: 'Bringing Your Puppy Home',
    items: [
      {
        q: 'What food will my puppy be eating?',
        a: (
          <>
            <p>Doghouse puppies are accustomed to the feeding program we use while raising them, and families receive information about their puppy's current food before handover.</p>
            <p>We recommend continuing the familiar diet initially rather than changing everything immediately after your puppy arrives home.</p>
            <p>If you later decide to change foods, transition thoughtfully unless your veterinarian advises otherwise.</p>
          </>
        ),
        text: "What food will my puppy be eating? Doghouse puppies are accustomed to the feeding program we use while raising them, and families receive information about their puppy's current food before handover. We recommend continuing the familiar diet initially rather than changing everything immediately after your puppy arrives home. If you later decide to change foods, transition thoughtfully unless your veterinarian advises otherwise.",
      },
      {
        q: 'Do you give families information before their puppy comes home?',
        a: (
          <>
            <p>Yes.</p>
            <p>Doghouse families receive detailed information to help them prepare for their puppy and navigate bringing them home.</p>
            <p>Our comprehensive Preparing for Your Puppy and Bringing Your Puppy Home information is supplied privately to our puppy families rather than published publicly in full.</p>
          </>
        ),
        text: 'Do you give families information before their puppy comes home? Yes. Doghouse families receive detailed information to help them prepare for their puppy and navigate bringing them home. Our comprehensive Preparing for Your Puppy and Bringing Your Puppy Home information is supplied privately to our puppy families rather than published publicly in full.',
      },
      {
        q: 'Do you provide support after the puppy goes home?',
        a: (
          <>
            <p>Absolutely.</p>
            <p>Our relationship with our puppy families doesn't end at handover.</p>
            <p>Questions come up once a puppy actually starts living in your home, and we're always happy for our families to reach out.</p>
            <p>Where something requires veterinary diagnosis or treatment, we'll appropriately direct you to your veterinarian.</p>
          </>
        ),
        text: "Do you provide support after the puppy goes home? Absolutely. Our relationship with our puppy families doesn't end at handover. Questions come up once a puppy actually starts living in your home, and we're always happy for our families to reach out. Where something requires veterinary diagnosis or treatment, we'll appropriately direct you to your veterinarian.",
      },
      {
        q: 'What should I do during the first few days?',
        a: (
          <>
            <p>Keep life relatively calm and predictable.</p>
            <p>Your puppy is adjusting to a completely new environment, new people, new smells, new routines and life without their littermates.</p>
            <p>Give them time to learn where they sleep, eat and toilet before filling every waking moment with visitors and outings.</p>
            <p>You will find more detailed guidance in our <Link to="/resources/puppy-resources" className={ilink}>Puppy Resources</Link>.</p>
          </>
        ),
        text: 'What should I do during the first few days? Keep life relatively calm and predictable. Your puppy is adjusting to a completely new environment, new people, new smells, new routines and life without their littermates. Give them time to learn where they sleep, eat and toilet before filling every waking moment with visitors and outings. Link to RESOURCES > Puppy Resources.',
      },
    ],
  },
  {
    name: 'Toilet Training, Sleep and Independence',
    items: [
      {
        q: 'Will my puppy already be toilet trained?',
        a: (
          <>
            <p>No eight-week-old puppy should be expected to arrive fully toilet trained.</p>
            <p>We begin foundations while puppies are with us, including opportunities to learn about appropriate toileting areas.</p>
            <p>But a young puppy still has limited bladder control and must learn the routine, doors and toilet location in their new home.</p>
            <p>Consistency and plenty of opportunities to succeed are important.</p>
          </>
        ),
        text: 'Will my puppy already be toilet trained? No eight-week-old puppy should be expected to arrive fully toilet trained. We begin foundations while puppies are with us, including opportunities to learn about appropriate toileting areas. But a young puppy still has limited bladder control and must learn the routine, doors and toilet location in their new home. Consistency and plenty of opportunities to succeed are important.',
      },
      {
        q: 'Should I use a puppy pen?',
        a: (
          <>
            <p>We strongly recommend creating a safe puppy pen area.</p>
            <p>Even if you choose to crate train, the crate can sit inside the larger safe pen area.</p>
            <p>This gives your puppy somewhere secure to sleep, rest, play quietly and spend short periods safely when direct supervision isn't possible.</p>
          </>
        ),
        text: "Should I use a puppy pen? We strongly recommend creating a safe puppy pen area. Even if you choose to crate train, the crate can sit inside the larger safe pen area. This gives your puppy somewhere secure to sleep, rest, play quietly and spend short periods safely when direct supervision isn't possible.",
      },
      {
        q: 'Should my puppy sleep in a crate?',
        a: (
          <>
            <p>Crate training can be useful when introduced appropriately, but a crate isn't the only element of your puppy's safe space.</p>
            <p>If you use one, we recommend incorporating it within the puppy's larger secure pen area rather than expecting a young puppy to spend inappropriate periods confined to a crate.</p>
          </>
        ),
        text: "Should my puppy sleep in a crate? Crate training can be useful when introduced appropriately, but a crate isn't the only element of your puppy's safe space. If you use one, we recommend incorporating it within the puppy's larger secure pen area rather than expecting a young puppy to spend inappropriate periods confined to a crate.",
      },
      {
        q: 'Should somebody stay with my Cavoodle all day?',
        a: (
          <>
            <p>Cavoodles often adore company, but we don't recommend creating a puppy who has never learnt to cope without somebody beside them.</p>
            <p>Build independence gradually from puppyhood.</p>
            <p>Short, successful periods apart help puppies learn that being alone for appropriate periods is safe and normal.</p>
            <p>Loving your Cavoodle and teaching your Cavoodle independence are not opposites.</p>
          </>
        ),
        text: "Should somebody stay with my Cavoodle all day? Cavoodles often adore company, but we don't recommend creating a puppy who has never learnt to cope without somebody beside them. Build independence gradually from puppyhood. Short, successful periods apart help puppies learn that being alone for appropriate periods is safe and normal. Loving your Cavoodle and teaching your Cavoodle independence are not opposites.",
      },
    ],
  },
  {
    name: 'Grooming',
    items: [
      {
        q: 'How often will my Cavoodle need professional grooming?',
        a: (
          <>
            <p>As a general guide, families should plan for professional grooming approximately every six to eight weeks.</p>
            <p>The exact schedule depends on coat type, coat length, lifestyle and the style you choose.</p>
          </>
        ),
        text: 'How often will my Cavoodle need professional grooming? As a general guide, families should plan for professional grooming approximately every six to eight weeks. The exact schedule depends on coat type, coat length, lifestyle and the style you choose.',
      },
      {
        q: 'Do I still need to brush my Cavoodle if I use a professional groomer?',
        a: (
          <>
            <p>Yes.</p>
            <p>Professional grooming doesn't replace coat maintenance at home.</p>
            <p>Longer Cavoodle coats can develop tangles and matting between appointments, particularly behind the ears, underneath harnesses, under the legs and in other high-friction areas.</p>
          </>
        ),
        text: "Do I still need to brush my Cavoodle if I use a professional groomer? Yes. Professional grooming doesn't replace coat maintenance at home. Longer Cavoodle coats can develop tangles and matting between appointments, particularly behind the ears, underneath harnesses, under the legs and in other high-friction areas.",
      },
      {
        q: 'When should grooming start?',
        a: (
          <>
            <p>Immediately.</p>
            <p>Grooming education begins before a puppy actually needs a haircut.</p>
            <p>Doghouse puppies are introduced to grooming-related handling and experiences while they're still with us.</p>
            <p>Families should continue brushing, combing, paw handling, nail care, mouth handling and other grooming foundations at home.</p>
          </>
        ),
        text: "When should grooming start? Immediately. Grooming education begins before a puppy actually needs a haircut. Doghouse puppies are introduced to grooming-related handling and experiences while they're still with us. Families should continue brushing, combing, paw handling, nail care, mouth handling and other grooming foundations at home.",
      },
      {
        q: 'What grooming does The Doghouse introduce?',
        a: (
          <>
            <p>Our puppy grooming preparation includes experiences such as regular nail care from an early age, brushing and body handling, bathing, blow-drying, grooming sounds, paw-pad trimming and gentle preparation for having the mouth and teeth handled.</p>
            <p>You can read our detailed guidance in <Link to="/resources/grooming" className={ilink}>Grooming</Link>.</p>
          </>
        ),
        text: 'What grooming does The Doghouse introduce? Our puppy grooming preparation includes experiences such as regular nail care from an early age, brushing and body handling, bathing, blow-drying, grooming sounds, paw-pad trimming and gentle preparation for having the mouth and teeth handled. Link to RESOURCES > Grooming.',
      },
    ],
  },
  {
    name: 'Teeth and Dental Care',
    items: [
      {
        q: "How often should I brush my Cavoodle's teeth?",
        a: (
          <>
            <p>We recommend brushing your Cavoodle's teeth every day.</p>
          </>
        ),
        text: "How often should I brush my Cavoodle's teeth? We recommend brushing your Cavoodle's teeth every day.",
      },
      {
        q: "Why brush a puppy's teeth when their baby teeth will fall out?",
        a: (
          <>
            <p>Because we're not only thinking about those particular teeth.</p>
            <p>Starting during puppyhood teaches your puppy that having their lips lifted, mouth handled and teeth brushed is an ordinary part of life.</p>
            <p>By the time their adult teeth arrive, tooth brushing is already familiar.</p>
          </>
        ),
        text: "Why brush a puppy's teeth when their baby teeth will fall out? Because we're not only thinking about those particular teeth. Starting during puppyhood teaches your puppy that having their lips lifted, mouth handled and teeth brushed is an ordinary part of life. By the time their adult teeth arrive, tooth brushing is already familiar.",
      },
      {
        q: 'Are dental treats enough instead of brushing?',
        a: (
          <>
            <p>We don't consider dental treats or chews a substitute for regular tooth brushing.</p>
            <p>Appropriate products and chews may have a place in a broader dental-care routine, but daily brushing should form the foundation of home dental care.</p>
            <p>Veterinary dental examinations remain important too.</p>
          </>
        ),
        text: "Are dental treats enough instead of brushing? We don't consider dental treats or chews a substitute for regular tooth brushing. Appropriate products and chews may have a place in a broader dental-care routine, but daily brushing should form the foundation of home dental care. Veterinary dental examinations remain important too.",
      },
    ],
  },
  {
    name: 'Exercise and Everyday Life',
    items: [
      {
        q: 'How much exercise does a Cavoodle need?',
        a: (
          <>
            <p>There isn't one number that suits every Cavoodle.</p>
            <p>Exercise needs vary with age, size, temperament, health and lifestyle.</p>
            <p>Cavoodles benefit from physical activity, opportunities to sniff and explore, mental stimulation and training.</p>
            <p>They also need to learn how to rest.</p>
          </>
        ),
        text: "How much exercise does a Cavoodle need? There isn't one number that suits every Cavoodle. Exercise needs vary with age, size, temperament, health and lifestyle. Cavoodles benefit from physical activity, opportunities to sniff and explore, mental stimulation and training. They also need to learn how to rest.",
      },
      {
        q: 'Does a Cavoodle need a big backyard?',
        a: (
          <>
            <p>Not necessarily.</p>
            <p>Access to a large yard doesn't automatically meet a dog's needs, and lack of a huge yard doesn't automatically mean a Cavoodle can't have a wonderful life.</p>
            <p>What matters is appropriate exercise, enrichment, training, companionship, safe toileting opportunities and meeting the individual dog's needs.</p>
          </>
        ),
        text: "Does a Cavoodle need a big backyard? Not necessarily. Access to a large yard doesn't automatically meet a dog's needs, and lack of a huge yard doesn't automatically mean a Cavoodle can't have a wonderful life. What matters is appropriate exercise, enrichment, training, companionship, safe toileting opportunities and meeting the individual dog's needs.",
      },
      {
        q: 'Are Cavoodles high energy?',
        a: (
          <>
            <p>Some are extremely lively. Others are much more laid-back.</p>
            <p>There can be considerable variation between individuals and even between puppies in the same litter.</p>
            <p>This is one reason temperament and lifestyle matching matter.</p>
          </>
        ),
        text: 'Are Cavoodles high energy? Some are extremely lively. Others are much more laid-back. There can be considerable variation between individuals and even between puppies in the same litter. This is one reason temperament and lifestyle matching matter.',
      },
      {
        q: 'How much should a puppy exercise?',
        a: (
          <>
            <p>Puppies need natural movement, play and opportunities to explore, but they don't need repetitive forced exercise designed to exhaust them.</p>
            <p>Be sensible about excessive high-impact activity, repeated jumping and slippery surfaces while the body is still developing.</p>
            <p>Mental stimulation and sniffing can be just as valuable as physical exercise.</p>
          </>
        ),
        text: "How much should a puppy exercise? Puppies need natural movement, play and opportunities to explore, but they don't need repetitive forced exercise designed to exhaust them. Be sensible about excessive high-impact activity, repeated jumping and slippery surfaces while the body is still developing. Mental stimulation and sniffing can be just as valuable as physical exercise.",
      },
    ],
  },
  {
    name: 'Doghouse Deli',
    items: [
      {
        q: 'What is Doghouse Deli?',
        a: (
          <>
            <p>Doghouse Deli is our natural dog-treat collection, developed after more than two years of genuinely feeding and testing the selected treats with our own Cavoodles.</p>
            <p>Our dogs tried them first.</p>
            <p>The collection focuses on natural, single-ingredient, air-dried treats across different proteins, textures and purposes.</p>
          </>
        ),
        text: 'What is Doghouse Deli? Doghouse Deli is our natural dog-treat collection, developed after more than two years of genuinely feeding and testing the selected treats with our own Cavoodles. Our dogs tried them first. The collection focuses on natural, single-ingredient, air-dried treats across different proteins, textures and purposes.',
      },
      {
        q: 'Do I need to own a Doghouse puppy to order Doghouse Deli?',
        a: (
          <>
            <p>No.</p>
            <p>You don't even need to own a Cavoodle.</p>
            <p>Doghouse Deli has been developed particularly with Cavoodles, oodles, discerning palates and sensitive tummies in mind, but the treats can be enjoyed by dogs of many breeds where appropriate for the individual dog.</p>
          </>
        ),
        text: "Do I need to own a Doghouse puppy to order Doghouse Deli? No. You don't even need to own a Cavoodle. Doghouse Deli has been developed particularly with Cavoodles, oodles, discerning palates and sensitive tummies in mind, but the treats can be enjoyed by dogs of many breeds where appropriate for the individual dog.",
      },
      {
        q: 'Can I customise my assorted Doghouse Deli box?',
        a: (
          <>
            <p>Not at initial launch.</p>
            <p>We're beginning with one assorted subscription box containing a changing selection from our approved treat collection.</p>
            <p>Customisable protein selections and single-protein options are part of where we hope to take Doghouse Deli in the future.</p>
          </>
        ),
        text: "Can I customise my assorted Doghouse Deli box? Not at initial launch. We're beginning with one assorted subscription box containing a changing selection from our approved treat collection. Customisable protein selections and single-protein options are part of where we hope to take Doghouse Deli in the future.",
      },
      {
        q: 'What if my dog has a food allergy?',
        a: (
          <>
            <p>If your dog has a known allergy or intolerance and must completely avoid a particular animal protein, our initial assorted box may not be suitable because we can't guarantee exclusion of that protein.</p>
            <p>We would much rather tell you the assorted box isn't right for your dog yet than send you something we know they shouldn't eat.</p>
          </>
        ),
        text: "What if my dog has a food allergy? If your dog has a known allergy or intolerance and must completely avoid a particular animal protein, our initial assorted box may not be suitable because we can't guarantee exclusion of that protein. We would much rather tell you the assorted box isn't right for your dog yet than send you something we know they shouldn't eat.",
      },
    ],
  },
  {
    name: 'Guardian Homes',
    items: [
      {
        q: 'What is a Guardian Home?',
        a: (
          <>
            <p>Our Guardian Program allows selected breeding dogs to live as much-loved family pets in carefully chosen homes while remaining part of The Doghouse QLD breeding program.</p>
            <p>This allows our breeding dogs to enjoy normal family life rather than requiring every dog in our program to live permanently with us.</p>
          </>
        ),
        text: 'What is a Guardian Home? Our Guardian Program allows selected breeding dogs to live as much-loved family pets in carefully chosen homes while remaining part of The Doghouse QLD breeding program. This allows our breeding dogs to enjoy normal family life rather than requiring every dog in our program to live permanently with us.',
      },
      {
        q: 'Do Guardian dogs live with The Doghouse?',
        a: (
          <>
            <p>No.</p>
            <p>Their everyday home is with their Guardian family.</p>
            <p>Breeding girls return to The Doghouse when required for the appropriate part of their breeding and whelping journey.</p>
            <p>Stud boys also remain living with their Guardian families while participating in our breeding program when required.</p>
          </>
        ),
        text: 'Do Guardian dogs live with The Doghouse? No. Their everyday home is with their Guardian family. Breeding girls return to The Doghouse when required for the appropriate part of their breeding and whelping journey. Stud boys also remain living with their Guardian families while participating in our breeding program when required.',
      },
      {
        q: 'Is there a fee for a Guardian puppy?',
        a: (
          <>
            <p>Our current Guardian fee is $1,500 for both girls and boys.</p>
            <p>For breeding girls, the $1,500 Guardian fee is refunded after her first litter in accordance with the Guardian arrangement.</p>
            <p>The complete terms are contained within the Guardian agreement.</p>
          </>
        ),
        text: 'Is there a fee for a Guardian puppy? Our current Guardian fee is $1,500 for both girls and boys. For breeding girls, the $1,500 Guardian fee is refunded after her first litter in accordance with the Guardian arrangement. The complete terms are contained within the Guardian agreement.',
      },
      {
        q: "Who pays the dog's normal expenses?",
        a: (
          <>
            <p>The Guardian family is responsible for normal everyday costs associated with owning and caring for their dog, including appropriate food, grooming and ordinary veterinary care.</p>
            <p>The Doghouse QLD covers breeding-related expenses.</p>
          </>
        ),
        text: "Who pays the dog's normal expenses? The Guardian family is responsible for normal everyday costs associated with owning and caring for their dog, including appropriate food, grooming and ordinary veterinary care. The Doghouse QLD covers breeding-related expenses.",
      },
      {
        q: 'Who legally owns a Guardian dog?',
        a: (
          <>
            <p>The Doghouse QLD retains legal ownership and the microchip remains in our name while the dog is participating in the breeding program.</p>
            <p>At completion of the program, the required arrangements are made in accordance with the Guardian agreement, including transfer of the microchip.</p>
          </>
        ),
        text: 'Who legally owns a Guardian dog? The Doghouse QLD retains legal ownership and the microchip remains in our name while the dog is participating in the breeding program. At completion of the program, the required arrangements are made in accordance with the Guardian agreement, including transfer of the microchip.',
      },
      {
        q: 'Where do Guardian families need to live?',
        a: (
          <>
            <p>Guardian families need to live close enough to The Doghouse QLD for the practical requirements of the breeding program.</p>
            <p>The acceptable distance can depend on whether the dog is a breeding girl or stud boy because the travel requirements differ.</p>
            <p>Please visit <Link to="/about-us/guardian-homes" className={ilink}>Guardian Homes</Link> or <Link to="/resources/contact-us" className={ilink}>contact us</Link> about a current Guardian opportunity rather than assuming a particular location will be suitable.</p>
          </>
        ),
        text: 'Where do Guardian families need to live? Guardian families need to live close enough to The Doghouse QLD for the practical requirements of the breeding program. The acceptable distance can depend on whether the dog is a breeding girl or stud boy because the travel requirements differ. Please visit ABOUT US > Guardian Homes or contact us about a current Guardian opportunity rather than assuming a particular location will be suitable.',
      },
    ],
  },
  {
    name: 'Breeding and Desexing',
    items: [
      {
        q: 'Can I breed from a Doghouse puppy?',
        a: (
          <>
            <p>No.</p>
            <p>Our puppies sold as family pets are not sold with breeding rights.</p>
          </>
        ),
        text: 'Can I breed from a Doghouse puppy? No. Our puppies sold as family pets are not sold with breeding rights.',
      },
      {
        q: 'When should I desex my Doghouse puppy?',
        a: (
          <>
            <p>We don't require our pet puppies to be desexed during their first year.</p>
            <p>We prefer families to allow appropriate growth and development rather than automatically desexing very young puppies.</p>
            <p>Your puppy agreement contains the requirements that apply to your dog, and timing should also be discussed with your veterinarian.</p>
            <p>Not being desexed during that period does not provide permission to breed from the dog.</p>
          </>
        ),
        text: "When should I desex my Doghouse puppy? We don't require our pet puppies to be desexed during their first year. We prefer families to allow appropriate growth and development rather than automatically desexing very young puppies. Your puppy agreement contains the requirements that apply to your dog, and timing should also be discussed with your veterinarian. Not being desexed during that period does not provide permission to breed from the dog.",
      },
    ],
  },
  {
    name: 'The Theodore',
    items: [
      {
        q: 'What is a Theodore?',
        a: (
          <>
            <p>The Theodore represents the development of established multi-generational companion-dog lines from the Cavoodle foundation, with work being undertaken towards breed development and recognition through the MDBA.</p>
            <p>This is a developing area and deserves more explanation than a short FAQ answer.</p>
            <p>You can read the full explanation in <Link to="/cavoodles/the-theodore" className={ilink}>The Theodore</Link>.</p>
          </>
        ),
        text: 'What is a Theodore? The Theodore represents the development of established multi-generational companion-dog lines from the Cavoodle foundation, with work being undertaken towards breed development and recognition through the MDBA. This is a developing area and deserves more explanation than a short FAQ answer. Link to CAVOODLES > The Theodore.',
      },
      {
        q: 'Is every multi-generational Cavoodle automatically a Theodore?',
        a: (
          <>
            <p>No.</p>
            <p>"Multi-generational Cavoodle" and "Theodore" shouldn't simply be treated as interchangeable terms.</p>
            <p>There are specific breeding-development and registration considerations involved.</p>
          </>
        ),
        text: 'Is every multi-generational Cavoodle automatically a Theodore? No. "Multi-generational Cavoodle" and "Theodore" shouldn\'t simply be treated as interchangeable terms. There are specific breeding-development and registration considerations involved.',
      },
      {
        q: 'Are all Doghouse puppies registered as Theodores?',
        a: (
          <>
            <p>No.</p>
            <p>The Doghouse QLD supports the development and recognition of the Theodore and our future breeding direction includes Theodore lines, but that doesn't mean every Doghouse puppy or every multi-generational Cavoodle litter should automatically be described as a registered Theodore.</p>
          </>
        ),
        text: "Are all Doghouse puppies registered as Theodores? No. The Doghouse QLD supports the development and recognition of the Theodore and our future breeding direction includes Theodore lines, but that doesn't mean every Doghouse puppy or every multi-generational Cavoodle litter should automatically be described as a registered Theodore.",
      },
    ],
  },
  {
    name: 'Support and Resources',
    items: [
      {
        q: 'Where can I learn more about caring for my puppy?',
        a: (
          <>
            <p>Visit <Link to="/resources/puppy-resources" className={ilink}>Puppy Resources</Link> for practical information covering preparation, settling in, toilet training, sleep, feeding, puppy biting, socialisation, independence, early training and other puppy-life essentials.</p>
          </>
        ),
        text: 'Where can I learn more about caring for my puppy? Visit RESOURCES > Puppy Resources for practical information covering preparation, settling in, toilet training, sleep, feeding, puppy biting, socialisation, independence, early training and other puppy-life essentials.',
      },
      {
        q: 'Where can I learn more about caring for an adult Cavoodle?',
        a: (
          <>
            <p>Visit <Link to="/resources/cavoodle-care" className={ilink}>Cavoodle Care</Link> for information about nutrition, exercise, dental care, preventative health, everyday safety, veterinary care and caring for your Cavoodle throughout life.</p>
          </>
        ),
        text: 'Where can I learn more about caring for an adult Cavoodle? Visit RESOURCES > Cavoodle Care for information about nutrition, exercise, dental care, preventative health, everyday safety, veterinary care and caring for your Cavoodle throughout life.',
      },
      {
        q: 'Where can I learn more about grooming?',
        a: (
          <>
            <p>Visit <Link to="/resources/grooming" className={ilink}>Grooming</Link> for our detailed Cavoodle grooming information.</p>
          </>
        ),
        text: 'Where can I learn more about grooming? Visit RESOURCES > Grooming for our detailed Cavoodle grooming information.',
      },
      {
        q: 'Do you have a training program?',
        a: (
          <>
            <p>The Doghouse QLD is developing a comprehensive Cavoodle-specific training program.</p>
            <p>It will build on many of the principles we already use when raising our puppies but will be designed to support Cavoodle families much further into life with their dogs.</p>
            <p>Visit <Link to="/training" className={ilink}>Training</Link> for current information.</p>
          </>
        ),
        text: 'Do you have a training program? The Doghouse QLD is developing a comprehensive Cavoodle-specific training program. It will build on many of the principles we already use when raising our puppies but will be designed to support Cavoodle families much further into life with their dogs. Visit TRAINING for current information.',
      },
      {
        q: 'Do you have a blog?',
        a: (
          <>
            <p>Yes.</p>
            <p>Our Blog is our growing library of articles, videos, practical advice, puppy information, grooming and training content, Cavoodle education and life at The Doghouse.</p>
          </>
        ),
        text: 'Do you have a blog? Yes. Our Blog is our growing library of articles, videos, practical advice, puppy information, grooming and training content, Cavoodle education and life at The Doghouse.',
      },
      {
        q: "What if I still can't find the answer?",
        a: (
          <>
            <p>Please contact us.</p>
            <p>A website can answer a lot of questions, but it can't anticipate every family, puppy or situation.</p>
            <p>If you're considering a Doghouse puppy or you're already part of our Doghouse family and can't find the information you need, we'd be happy to point you in the right direction.</p>
          </>
        ),
        text: "What if I still can't find the answer? Please contact us. A website can answer a lot of questions, but it can't anticipate every family, puppy or situation. If you're considering a Doghouse puppy or you're already part of our Doghouse family and can't find the information you need, we'd be happy to point you in the right direction.",
      },
    ],
  },
];

function FaqEntry({ idPrefix, q, a }: { idPrefix: string; q: string; a: ReactNode }) {
  const [open, setOpen] = useState(false);
  const panelId = `${idPrefix}-panel`;
  return (
    <div className="border-b border-brand/10">
      <h3 className="!mb-0 !mt-0 text-lg">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between gap-4 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <span className="font-semibold text-deep">{q}</span>
          <span
            aria-hidden="true"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand/10 text-xl font-bold text-branddark"
          >
            {open ? '\u2212' : '+'}
          </span>
        </button>
      </h3>
      <div id={panelId} hidden={!open} className="prose-dog pb-5">
        {a}
      </div>
    </div>
  );
}

export default function Faq() {
  usePageMeta(
    'Frequently Asked Questions | The Doghouse QLD',
    'Straightforward answers to the questions The Doghouse QLD is asked most often about Cavoodles, puppies, health testing, grooming, pricing and more.'
  );
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return faqData;
    return faqData
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((it) => `${it.q} ${it.text}`.toLowerCase().includes(q)),
      }))
      .filter((cat) => cat.items.length > 0);
  }, [query]);
  const searching = query.trim().length > 0;
  return (
    <main>
      <PageHero
        title="Frequently Asked Questions"
        eyebrow="Resources"
        image={asset("/images/photos/pup-sitting.jpg")}
        imageAlt="Cavoodle puppy sitting"
        intro={
          <>
            <h2>The questions we&apos;re asked most often</h2>
            <p>Choosing a puppy is a big decision, and we believe families should be able to ask plenty of questions before making it.</p>
            <p>We've brought together answers to many of the questions we're regularly asked about our Cavoodles, puppies, breeding program, health testing, puppy raising, applications, grooming, ongoing care and life with a Cavoodle.</p>
            <p>We've also included some of the practical questions that tend to appear after a puppy comes home.</p>
            <p>If you can't find what you're looking for, please <Link to="/resources/contact-us" className={ilink}>get in touch</Link>. We'd much rather answer a question than have you left wondering.</p>
          </>
        }
      />
      <section className="mx-auto max-w-4xl px-5 pb-16">
        <div className="mb-8">
          <label htmlFor="faq-search" className="mb-2 block text-sm font-semibold text-ink">
            Search FAQs
          </label>
          <input
            id="faq-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a keyword, for example grooming or vaccinations"
            className="w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-ink placeholder:text-ink/35 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/30"
          />
          {searching && (
            <p className="mt-2 text-sm text-ink/60" role="status">
              {filtered.reduce((n, c) => n + c.items.length, 0)} matching question
              {filtered.reduce((n, c) => n + c.items.length, 0) === 1 ? "" : "s"}
            </p>
          )}
        </div>
        {filtered.length === 0 ? (
          <p className="rounded-2xl border border-brand/15 bg-white p-8 text-center text-bark">
            No questions match your search. Try a different keyword or{' '}
            <Link to="/resources/contact-us" className={ilink}>
              contact us
            </Link>
            .
          </p>
        ) : (
          filtered.map((cat, ci) => (
            <section key={cat.name} aria-label={cat.name} className="mb-10">
              <h2 className="font-bold text-3xl  text-bark">{cat.name}</h2>
              <div className="mt-2 border-t border-brand/10">
                {cat.items.map((it, ii) => (
                  <FaqEntry key={ii} idPrefix={`faq-${ci}-${ii}`} q={it.q} a={it.a} />
                ))}
              </div>
            </section>
          ))
        )}
        <section aria-label="Still have a question?" className="mt-12 rounded-2xl bg-mist p-8">
          <div className="prose-dog">
            <h2>Still have a question?</h2>
            <p>We've tried to make our website as open and informative as possible because we believe families should understand the breeder, the puppy and the commitment they're considering.</p>
            <p>But sometimes you just need to ask a real person.</p>
            <p>If you've explored our website and still can't find what you're looking for, please visit <Link to="/resources/contact-us" className={ilink}>Contact Us</Link>.</p>
            <p>And if you're already one of our Doghouse families, remember that our support doesn't disappear when your puppy walks out our door.</p>
            <p>We're still here.</p>
            <p>
              <Link
                to="/resources/contact-us"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-3.5 text-base font-bold uppercase tracking-wide text-white shadow-md transition hover:bg-brand focus:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
              >
                Contact Us <span aria-hidden="true">›</span>
              </Link>
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}
