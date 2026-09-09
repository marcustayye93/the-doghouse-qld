# Hallucination Audit: built site vs Charmaine's handover docs

**Date:** 2026-09-09
**Method:** 8 parallel section auditors. Each extracted the controlling `.docx` files
(`~/workspace/doghouse-files/extracted/LOVABLE INSTRUCTIONS FOR WEBSIRE/`) via
python (zipfile -> word/document.xml, tags stripped, whitespace collapsed) and compared
every heading, paragraph, button label, form label, caption, and section of the built
source (`~/workspace/doghouse-qld/src/`) against the doc text. Builder-only instructions
(MOBILE REQUIREMENTS, IMAGE INSTRUCTIONS, BUILD ORDER, SEO notes) were excluded from
missing-content findings.

**Scope note:** FAQ (`Faq.tsx`) and Cavoodle Care (`CavoodleCare.tsx`) were regenerated
verbatim from source earlier and were not re-audited. Already-known facts (no em/en
dashes, honest form pending states, no invented dogs/prices/dates) are not re-reported.

**Format of each finding:** `[file:line] "quoted text or choice"` — controlling doc
says / does-not-say: "quote or ABSENT".

---

## 1. INVENTED CONTENT (42 findings)

Text, labels, or sections in the built site that do not appear in (or directly
paraphrase) the controlling docs.

### Home page

- [Home.tsx:93] An entire four-card "Explore the website" link grid section — controlling doc "A THE DOGHOUSE QLD WEBSITE Home Page and General instructions.docx" defines the home page top as only: logo+nav, rotating gallery, Apply Now button, caption ("Maintain this order"); general instructions: "Do not rewrite, shorten or add to supplied website copy unless specifically instructed." Section is ABSENT.
- [Home.tsx:96] "Our story, philosophy and health testing." — doc says: ABSENT
- [Home.tsx:97] "Litters, our method, process and waitlist." — doc says: ABSENT
- [Home.tsx:98] "Meet the dogs behind our puppies." — doc says: ABSENT
- [Home.tsx:99] "Learn about the breed we love." — doc says: ABSENT
- [Home.tsx:117] "Explore ›" link label on each card — doc says: ABSENT
- [Home.tsx:79-80] Meta title "The Doghouse QLD - Thoughtfully Bred, Beautifully Raised Cavoodles" and meta description "The Doghouse QLD is a specialist multi-generational Cavoodle breeder in Queensland, Australia. Thoughtfully bred. Beautifully raised." — "Thoughtfully bred. Beautifully raised." wording is ABSENT from this doc (possible SEO-doc coverage, not verified here).

### Site chrome / nav / 404 / section hubs

- [config.ts:17] Instagram URL `https://www.instagram.com/the_doghouse_queensland?igsh=MTNiZjE1aXMxZ3kxeA%3D%3D&utm_source=qr` — controlling doc "ZZZF Social Media Link and Icons.docx" says the confirmed account is: "https://www.instagram.com/the_doghouse_queensland?stkn=MTNiZjE1aXMxZ3kxeA%3D%3D&utm_source=qr". The built URL swaps `?stkn=` for `?igsh=`; the documented URL appears nowhere.
- [SectionHub.tsx:5-9] Section blurbs "Get to know The Doghouse QLD, our philosophy and our approach to health testing." / "Our puppies and litters, how we raise them, and how to apply." / "Meet the dogs at the heart of The Doghouse QLD." / "Learn about the Cavoodle breed we specialise in." / "Guides, answers and support for Doghouse families." — controlling docs do-not-say: ABSENT.
- [SectionHub.tsx:42] "Read more ›" as a card link label — doc "ZZZL Final Master Site Map and Build Instructions.docx" does-not-say this label, and §18 says: "Do not display the words Read more without implementing the functionality" (the approved Read more expands content on the same page; here it is a plain navigation link).
- [chrome.tsx:~131] `{item.label} overview` (renders e.g. "About Us overview") in the mobile menu — controlling docs do-not-say: ABSENT.
- [NotFound.tsx:~14] "The page you are looking for does not exist or has moved. Let us help you find your way back." — controlling doc "ZZZH 404 Page.docx" mandates "Use this exact introductory copy": "It looks like the page you're looking for isn't here. Don't worry, we'll help you find your way back. You can return to our homepage or use one of the links below to continue exploring The Doghouse QLD."
- [NotFound.tsx:~19] "Back to Home" primary button — "ZZZH 404 Page.docx" says: "Create a prominent button: Return to Home".
- [NotFound.tsx:~20-27] Secondary "Contact Us" button on the 404 page — "ZZZH 404 Page.docx" prescribes the exact page contents (heading, intro, Return to Home, "Looking for something?" links); this extra button is not in the spec.

### About Us pages

- [GuardianHomes.tsx:255-266] "Guardian Opportunities" standalone subscribe section ("Join our Guardian Opportunities list to receive an email when a new Guardian Home opportunity becomes available.", name/email fields, "Subscribe" button, success copy "You have been added to our Guardian Opportunities list...") — controlling doc "G ABOUT US Guardian Homes.docx" does-not-say: ABSENT; doc "ZZZC GUARDIAN HOME APPLICATION FORM.docx" only provides for opt-in consent *inside* the application ("With the applicant's clear consent, automatically save their name and email address to a dedicated Guardian Opportunities mailing list"), never a standalone signup section.
- [OurStory.tsx:4-8] Meta description "The story behind The Doghouse QLD, from a childhood sidekick named Poochie to a Queensland Cavoodle breeding program built on love and science." — controlling doc "C ABOUT US Our Story.docx" says: ABSENT (served in page head).
- [MeetTheTeam.tsx:78-81] Meta description "Meet the small, hands-on team behind The Doghouse QLD who raise our Cavoodle puppies through their precious first eight weeks." — controlling doc "D ABOUT US Meet the team.docx" says: ABSENT.
- [BreedingPhilosophy.tsx:5-8] Meta description "Thoughtful breeding starts long before puppies are born. The health, temperament and structure considerations behind every Doghouse pairing." — controlling doc "E ABOUT US Our Breeding Philosophy.docx" says: ABSENT.
- [HealthTesting.tsx:5-8] Meta description "Health testing at The Doghouse QLD goes far beyond DNA. Learn about our comprehensive screening program for our breeding dogs." — controlling doc "F ABOUT US Health and Health Testing.docx" says: ABSENT.
- [GuardianHomes.tsx:6-9] Meta description "Selected Doghouse breeding dogs live as loved family pets through our Guardian Program. Learn what is involved and how to apply." — controlling doc "G ABOUT US Guardian Homes.docx" says: ABSENT.
- [GuardianApplication.tsx:78-81] Meta description "Apply to become a Guardian Home with The Doghouse QLD, or join our Guardian Opportunities list for future placements." — controlling doc "ZZZC GUARDIAN HOME APPLICATION FORM.docx" says: ABSENT.

### Puppies pages

- [CurrentLitters.tsx:28-29] "Our Current Litters" / "Details to be supplied by The Doghouse QLD." — controlling doc "H PUPPIES General Information for Puppies Section.docx" says: "Do not generate or invent content for these individual pages at this stage."
- [DoghouseMethod.tsx:29-30] "The Doghouse Method™" / "Details to be supplied by The Doghouse QLD." — controlling doc "H PUPPIES General Information for Puppies Section.docx" says: "Do not generate or invent content for these individual pages at this stage."
- [FirstEightWeeks.tsx:28-29] "The First Eight Weeks" / "Details to be supplied by The Doghouse QLD." — controlling doc "H PUPPIES General Information for Puppies Section.docx" says: "Do not generate or invent content for these individual pages at this stage."
- [ProcessApplying.tsx:505-509] Time-alone dropdown options "Less than 2 hours", "2 to 4 hours", "4 to 6 hours", "More than 6 hours", "It varies" — controlling doc "O PUPPIES Puppy process and Applying.docx" says only: "Use either an appropriate dropdown or concise response field." The specific option labels are ABSENT.
- [ProcessApplying.tsx:396,428,464,610] Form microcopy: placeholder "e.g. 4510" (postcode), placeholder "e.g. 4 and 7" (children ages), reveal label "Please tell us about your home type." (home-type Other), placeholder "Type 'No preference' if you have none, or tell us what you love." (colours/markings) — controlling doc "O PUPPIES Puppy process and Applying.docx" does-not-say: no placeholder text or "Other" reveal label is supplied (the doc only requires "No preference" be included for colours).

### Our Dogs pages

- None. Zero invented dog facts, headings, paragraphs, or labels found.

### Cavoodles pages (all minor hero-intro paraphrases; verbatim text appears in the body below each)

- [LivingWith.tsx:26] "But they are not ornaments and they are not maintenance-free teddy bears. Here is what living with one genuinely involves." — controlling doc "V ABOUT CAVOODLES Cavoodle Information.docx" does-not-say: the sentence "Here is what living with one genuinely involves" is ABSENT; the doc's sentence opens "Cavoodles can be extraordinary companions, but they are not ornaments..." (clause dropped in this intro).
- [Sizes.tsx:22-24] "At The Doghouse QLD, the broad size descriptions we use are Teacup, Toy and Mini. Predicting adult size is an estimate, and no breeder can responsibly guarantee an exact adult weight." — doc says: "At The Doghouse QLD, the broad size descriptions we use are:" followed by "Teacup: under approximately 4 kg Toy: approximately 4 to 8 kg Mini: approximately 7 to 12 kg" and "Predicting adult size is an estimate. Parent size, genetics, birth weight and the puppy's growth pattern can all help us form an expectation, but no breeder can responsibly guarantee an exact adult weight." (hero intro shortens/merges).
- [CoatTypes.tsx:18-22] "we generally describe our coats as Wool, Fleece and Shaggy. All Doghouse puppies have at least one copy of the furnishings gene, which contributes to the familiar teddy bear expression." — doc says: "Furnishings are another important part of the classic Cavoodle appearance. These are the facial coat characteristics that contribute to the familiar beard, moustache and teddy bear expression." / "All Doghouse puppies have at least one copy of the furnishings gene." (hero intro merges two separate paragraphs).
- [ColoursMarkings.tsx:21-24] Intro repeats the colour-change paragraph but drops the final sentence — doc says the paragraph ends: "That does not make one dog better than another. Colour is simply one part of the extraordinary variety found within Cavoodles."
- [AboutCavoodles.tsx:48] Meta description "Cavoodle temperament, sizes, coats, colours, shedding, grooming and family life, plus multi-generational Cavoodles from The Doghouse QLD." — doc gives a "Suggested meta description": "Learn about Cavoodles, including temperament, sizes, coats, colours, shedding, grooming, family life and multi-generational Cavoodles from The Doghouse QLD in Queensland." (paraphrase of a suggestion only).

### Training / Doghouse Deli

- [Training.tsx:130-172] "Register your interest" — the entire visitor-facing interest form block: heading "Register your interest", subcopy "Leave your details and we'll let you know when there's news about the Doghouse QLD training program.", fields "Your name" / "Email address" / "Tell us a little about your dog (optional)", consent checkbox "Yes, I'd like to receive updates about the Doghouse QLD training program by email.", submit "Register Interest", success "Thank you!" / "Thanks for your interest. We'll share updates about the training program as it develops." — controlling doc "W TRAINING Coming soon training section.docx" says: "Do not display: Enrol now Buy now Pricing Course modules Start dates **Waiting list language Registration forms** unless these are supplied and approved later." The wording, labels and success message are ABSENT. "AA MAIN HEADING ADDITION For Training.docx" independently bars it: "Do not create visitor-facing Training copy beyond placeholder page structure until The Doghouse QLD provides or approves the Training content." (The file's own OWNER comment concedes this microcopy "should be reviewed".)
- [Training.tsx:12-15] Meta description "A Cavoodle-specific training program is being developed by The Doghouse QLD for Cavoodle families everywhere, focused on confident, well-mannered companions." — doc suggests: "A Cavoodle-specific training program is **currently being** developed by The Doghouse QLD for Cavoodle families everywhere, **with a focus on** confident, well-mannered **family companions**." (minor SEO paraphrase).
- [DoghouseDeli.tsx:81-84] Meta description "Natural, single-ingredient dog treats from Doghouse Deli, tried and tested by our Cavoodles with sensitive tummies and discerning palates in mind." — doc "X DOGHOUSE DELI with Doghouse Deli Information.docx" suggests: "Doghouse Deli **offers thoughtfully selected** natural, single-ingredient dog treats, tried and tested by **our own** Cavoodles and **chosen** with sensitive tummies and discerning palates in mind." (minor SEO paraphrase).

### Resources / Legal / Contact

- [ContactUs.tsx:32-39] Hero intro "Whether you have a question about our puppies, want to learn more about The Doghouse QLD, need some guidance with your Cavoodle, or are interested in Doghouse Deli, we'd love to hear from you." + "We aim to respond to all genuine enquiries as promptly as we can." — controlling doc "Z RESOURCES Section.docx" PAGE 6 website copy says: "Whether you're considering welcoming a Doghouse puppy into your family, have a question about our breeding program, would like to know more about a Guardian opportunity or simply can't find the information you're looking for, you're welcome to get in touch."; "ZZZA CONTACT US FORM.docx" says the intro is: "Have a question or would like to get in touch? Send us a message below and we'll get back to you as soon as we can."
- [ContactUs.tsx:74] Dropdown label "What is your enquiry about?" — "ZZZA CONTACT US FORM.docx" says Label: "What can we help you with?" (the doc's section is titled that).
- [ContactUs.tsx:8-17] Dropdown options 'Puppy Enquiry', 'Waitlist Enquiry', 'Guardian Home Enquiry', 'Doghouse Deli Enquiry', 'Training Enquiry', 'Puppy Support (For Existing Doghouse Families)', 'General Enquiry', 'Other' — "ZZZA CONTACT US FORM.docx" says options: "Puppy enquiry / Current or upcoming litter / Guardian Home / Existing Doghouse family / Doghouse Deli / Training / General Cavoodle question / Something else". The built set matches neither doc (the Z RESOURCES variant differs slightly too).
- [ContactUs.tsx:56-57] Success heading "Thank You for Getting in Touch!" + "We've received your message and will respond as soon as we can." — "ZZZA CONTACT US FORM.docx" says: "Thank you!" / "Your message has been sent successfully. We'll be in touch as soon as we can."
- [ContactUs.tsx:71] Phone placeholder "Phone number (optional)" — "ZZZA CONTACT US FORM.docx" says Placeholder: "Optional".
- [ContactUs.tsx:84] Message placeholder "How can we help?" — "ZZZA CONTACT US FORM.docx" says Placeholder: "Tell us a little about how we can help."
- [ContactUs.tsx:87-91] Privacy line "We respect your privacy. Your information will be handled in accordance with our Privacy Policy." — "ZZZA CONTACT US FORM.docx" (and "ZZ Privacy Policy.docx" functional req 5) says: "We respect your privacy. Information submitted through this form will be handled in accordance with our Privacy Policy."
- [TermsConditions.tsx:9-11] Meta description "...for The Doghouse QLD, covering website use, puppies, educational content, intellectual property and services." — "ZZZ Website Terms and Conditions.docx" specifies: "Read the Website Terms & Conditions for The Doghouse QLD, including information about website use, puppies, educational content, intellectual property and services." ("covering" for "including information about").

---
## 2. MISSING CONTENT (15 findings)

Visitor-facing headings, paragraphs, buttons, or sections present in the controlling
docs but absent from the built pages.

### Site chrome / nav / 404 / footer

- [nav.ts:35] Label "The Doghouse Method" — controlling doc "ZZZL Final Master Site Map and Build Instructions.docx" §5 says: "The Doghouse Method™" and "Maintain the trademark symbol where approved." The ™ symbol is absent.
- [NotFound.tsx] The entire "Looking for something?" helpful-links section — "ZZZH 404 Page.docx" says: 'Under the heading: Looking for something? Provide these links: Available Puppies ... Planned & Upcoming Litters ... Puppy Process & Applying ... Master Waitlist ... About Cavoodles ... Frequently Asked Questions ... Contact Us ...' None of this appears in the built page.
- [NotFound.tsx] The exact mandated intro copy — "ZZZH 404 Page.docx" says "Use this exact introductory copy: It looks like the page you're looking for isn't here. Don't worry, we'll help you find your way back. You can return to our homepage or use one of the links below to continue exploring The Doghouse QLD." ABSENT (replaced by the paraphrase flagged in §1).
- [chrome.tsx:~277-288] The word "Legal" above the bottom-bar legal links — "ZZ THE DOGHOUSE QLD Footer Information.docx" §6 "FOOTER WEBSITE COPY ... Use the following exact public-facing copy" lists: "Follow The Doghouse ... Legal Privacy Policy Terms & Conditions © [CURRENT YEAR] The Doghouse QLD. All rights reserved." The word "Legal" is absent from the built footer (minor).

### About Us pages

- [GuardianApplication.tsx:152-155] Supporting text truncated to "Please include whether any dogs are male or female and whether they are desexed." — controlling doc "ZZZC GUARDIAN HOME APPLICATION FORM.docx" says: "Supporting text: Please include whether any dogs are male or female and whether they are desexed. This is important because Guardian Homes cannot have incompatible entire dogs. Do not require a lengthy pet history." The sentence "This is important because Guardian Homes cannot have incompatible entire dogs." is absent.
- [GuardianApplication.tsx:204-216] "Are you interested in:" checkboxes ("A guardian girl" / "A guardian boy" / "Either, depending on the dog and opportunity") carry no required enforcement, so the form can be submitted with zero selections — "ZZZC GUARDIAN HOME APPLICATION FORM.docx" says: "Are you interested in: Required. Allow multiple selections."
- [GuardianApplication.tsx:103-107] Form validation uses native browser messages via FormShell — "ZZZC GUARDIAN HOME APPLICATION FORM.docx" says: "Use clear error messages such as: Please enter your name. Please enter a valid email address. Please enter your phone number. Please enter your postcode." None of the specified messages appear.

### Puppies pages

- [CurrentLitters.tsx, DoghouseMethod.tsx, FirstEightWeeks.tsx] Approved page body content — "ZZZL Final Master Site Map and Build Instructions.docx" says: "Use the approved Current Litters build." / "Use the approved Doghouse Method™ build." / "Use the approved First Eight Weeks build." ABSENT: no handover doc in this set contains that approved content, so the built pages carry only the placeholder lines flagged in §1. (This is the gap, not a recommendation to write the content.)

### Our Dogs pages

- [OurStuds.tsx:421-424] Bare "Teddy's Personality" heading rendered with no body copy — controlling doc "U OUR DOGS with OUR STUDS PAGE.docx" says: "Teddy's Personality ... Personality copy to be added when supplied. Do not invent personality information." Showing nothing is consistent with "do not invent," but "S OUR DOGS General Information.docx" says: "If information has not been supplied, hide that field rather than displaying blank labels or placeholder text," which would arguably hide the heading entirely. Minor judgment call.

### Cavoodles pages

- [Generations.tsx, Sizes.tsx, CoatTypes.tsx, ColoursMarkings.tsx, Shedding.tsx, LivingWith.tsx] Deeper information on the dedicated pages — controlling doc "V ABOUT CAVOODLES Cavoodle Information.docx" says: "Do not duplicate large amounts of information from these destination pages. About Cavoodles provides the broad educational overview. The dedicated pages will provide the deeper information." Every sub-page body is a verbatim copy of the corresponding About overview section with zero additional deeper content, and no deeper copy exists anywhere in the spec (spec gap; ZZZL also says "Do not create repetitive SEO versions of these pages").

### Training / Doghouse Deli

- [DoghouseDeli.tsx:17-58] (treatCollection) Omits approved treats from "Y DOGHOUSE DELI with Deli Information.docx", which states "This version contains all information currently approved for Doghouse Deli" and lists per-protein graphics for: **Beef Neck Tendon** (built follows X.docx's older "Beef liver"/"Beef tendons" instead), **Emu Neck, Emu Lumbar Pieces** (built has only "Emu jerky pieces"), **Crocodile Tails** (built has only "Crocodile feet"), **Goat Tripe, Goat Lung Crisps, Goat Liver, Goat Kidney** (built has only "Goat horns"). Naming: Y.docx says use the public website name "Kangaroo Jerky" (built uses "Kangaroo jerky", consistent); but Y.docx's seafood name is "Shark Crispies" while the built page uses X.docx's "Shark jerky crispies".
- [DoghouseDeli.tsx] "Y DOGHOUSE DELI with Deli Information.docx" requires: "Postage & Delivery — BUILD THIS SECTION NOW BUT KEEP IT HIDDEN FROM PUBLIC DISPLAY... Create an editable section for: Delivery areas / Postage price / Any free-postage threshold... / Dispatch timing / Expected delivery information / Relevant order cut-off information." and "Pricing — BUILD THIS SECTION NOW BUT DO NOT INVENT OR PUBLICLY DISPLAY A PRICE... Create the structure required for the final monthly subscription price." The built file contains only OWNER code comments describing future activation; **no hidden section structure exists** for pricing or postage.

### Resources / Contact

- [ContactUs.tsx] The entire "Z RESOURCES Section.docx" PAGE 6 website copy body is absent: location/no-drop-in-visits paragraphs ("The Doghouse QLD is located in Caboolture, Queensland, north of Brisbane. As a working breeding home rather than a retail premises, we aren't open for drop-in visits..."), the FAQ-before-sending link, and the post-form sections: "Puppy enquiries" (four links: View Available Puppies, Planned & Upcoming Litters, Puppy Process & Applying, Master Waitlist), "Existing Doghouse families", "Guardian Home enquiries" (Learn About Guardian Homes), "Doghouse Deli enquiries" (Visit Doghouse Deli), "Training enquiries" (Explore Training), "Looking for advice?" (five resource links), "Follow The Doghouse QLD" (social icons), "A little note before visiting", and "We look forward to hearing from you" with its final scroll-back-to-form button.
- [ContactUs.tsx] The "ZZZA CONTACT US FORM.docx" short introduction is absent above the form: "Have a question or would like to get in touch? Send us a message below and we'll get back to you as soon as we can." (heading "Send Us a Message" is present; its intro is not).
- [PuppyResources.tsx:627-650] "Continue exploring our Resources" cards link to Cavoodle Care, Grooming, Blog, FAQ, Contact Us but NOT Training — "Z RESOURCES Section.docx" says: "Puppy Resources should link to Cavoodle Care, Grooming, Blog, FAQ, Contact Us and Training."

---
## 3. DESIGN DECISIONS NOT IN THE SPEC (36 findings)

Visual choices not specified by the docs. A choice implementing a doc-stated principle
("warm and welcoming", "premium without being pretentious", "slightly rounded corners",
"square photographs", "existing brand colours", "consistent typography") is marked
GROUNDED with the doc cited; the rest are ungrounded design inventions.

### Global / shared components

- [ui.tsx:PawDivider] Decorative paw-print divider flanked by gold lines — no controlling doc specifies a paw divider or decorative divider treatment. (Renders at the foot of most pages.)
- [ui.tsx:CTAButton, used site-wide] Trailing "›" chevron glyph appended after the button label plus CSS-forced uppercase button text — not specified in any controlling doc. (Docs specify labels like "Apply Now", "Return to Home"; the chevron and forced uppercase are added.)
- [chrome.tsx:~143] Sticky header (`sticky top-0`) — header behavior is not specified; "ZZZL Final Master Site Map and Build Instructions.docx" §13 covers header contents, not stickiness.
- [chrome.tsx:~262-269] "Contact Us" rendered as a prominent filled brand button under the social icons in the footer — "ZZ THE DOGHOUSE QLD Footer Information.docx" §2 requires only that "Contact Us" be "the primary contact pathway" linking to the Contact Us page (already satisfied by the Helpful Links entry); the second, button-styled duplicate is an unspec'd design choice.
- Typography/colors: Corinthia script display font for headings, teal `#17A296` brand palette, gold accents — controlling docs say "existing brand colours" and "consistent typography" but never name any font or colour value. GROUNDED only as an interpretation of the logo's script wordmark and teal; the specific choices are unverifiable from the docs. (Already flagged to Marcus separately.)
- Form sections wrapped in rounded bordered shadow cards (ProcessApplying.tsx:23-32 FormSection; MasterWaitlist.tsx:160-162; GuardianApplication.tsx:116+) — docs say only "clear visual sections" / "Use enough spacing between form sections" / "clean, spacious format"; no card-container treatment is specified.

### Home

- [Home.tsx:45,64] Gold dot pagination indicators under the gallery (desktop and mobile) — doc only specifies "smoothly transition" between groups; no dots or position UI.
- [Home.tsx:88] Caption styled `text-gold`, and `bg-brand` button color — doc invokes "existing brand colours" but never defines any brand palette in that document, so the specific gold/brand hue choices cannot be verified as grounded.

### Section hubs

- [SectionHub.tsx:42] Card link labels and card-grid layout — section hub pages and their card treatment are not specified in the site-map docs.

### About Us pages

- [OurStory.tsx:13, MeetTheTeam.tsx:117, BreedingPhilosophy.tsx:15, HealthTesting.tsx:15, GuardianHomes.tsx:17, GuardianApplication.tsx:88] Eyebrow label "About Us" above every page h1 — docs specify only the page heading ("C ABOUT US Our Story.docx" says: "Use 'Our Story' as the only visible heading in this section"); the eyebrow is an extra visible label.
- [OurStory.tsx:17, BreedingPhilosophy.tsx:22, HealthTesting.tsx:22, GuardianHomes.tsx:27] ReadMore renders the toggle button *after* the expandable region, so expanded content appears *above* the "Read less" button — "C ABOUT US Our Story.docx" says: "smoothly expand the section directly beneath the button" (E, F, G docs say the same).
- [MeetTheTeam.tsx:129, GuardianHomes.tsx:202] Decorative PawDivider between sections — docs do-not-say: ABSENT (GROUNDED in intent by "D ABOUT US Meet the team.docx": "The page should feel warm, personal and relaxed"; the motif itself is a design choice).
- [PhotoPlaceholder.tsx:11-13] Dashed square showing visitor-visible text "Details to be supplied by The Doghouse QLD." — docs say photographs "will be supplied separately" (build instruction); the placeholder treatment and its visible copy are interim design choices (complies with the no-stock/AI-photos rule).
- [GuardianApplication.tsx:116, etc.] Section headings in title case ("Your Details") vs "ZZZC GUARDIAN HOME APPLICATION FORM.docx" labels ("SECTION 1 - YOUR DETAILS") — style choice, no content change.
- Role titles in bold uppercase tracked labels (MeetTheTeam.tsx:102-105) — docs do-not-say specifics on treatment.

### Puppies pages

- [All 10 pages, e.g. AvailablePuppies.tsx:143] Decorative `<PawDivider />` at the foot of every page — "H PUPPIES General Information for Puppies Section.docx" specifies only "Square photograph" / "Slightly rounded corners" treatments and says "Do not overcrowd the page with decorative elements." No divider element is specified.
- [All 10 pages, e.g. AvailablePuppies.tsx:26] Section kicker `eyebrow="Puppies"` in the page hero — the docs specify only the main heading for each page (e.g. H.docx "MAIN HEADING: Puppies", I.docx "MAIN HEADING: Available Puppies"); no kicker/eyebrow label is specified.

### Our Dogs pages

- [OurGirls.tsx:610] [OurStuds.tsx:582] "Apply Now" CTAButton linking `/puppies/process-applying` — "T OUR DOGS with OUR GIRLS section.docx" and "U OUR DOGS with OUR STUDS PAGE.docx" do-not-say: no CTA is specified for either page. (U's MOBILE REQUIREMENTS grounds the cross-links, not the Apply button.)
- [OurGirls.tsx:52-54] [OurStuds.tsx:~487] [RetiredLegacy.tsx:~19] Eyebrow kicker "Our Dogs" above the h1 — T doc's PAGE INTRODUCTION heading is "Our Girls" only; S's "Main Heading Our Dogs" is specified for the landing page, not subpages.
- [OurGirls.tsx:557] [OurStuds.tsx:511] [RetiredLegacy.tsx:48] Decorative PawDivider between profiles — T doc says: "Give each dog generous visual separation," which grounds the intent, but the paw divider motif itself is not specified.
- [OurGirls.tsx:436] Numbered placeholder labels "Luna's puppy photo ${n} to be supplied" — T doc says: "Do not create puppy names, captions, litter dates or other information unless supplied later," but also: "create clearly identifiable image placeholders that can easily be replaced without rebuilding the page." Minor.
- [PhotoPlaceholder.tsx:20] Paw-icon SVG inside the placeholder frame — "S OUR DOGS General Information.docx" says: "Do not use generic icons in place of the dogs' photographs." The icon is decorative inside a clearly-marked dashed "photograph to be supplied" frame, not presented as a dog's photograph; noted for awareness.
- [OurStuds.tsx:448] Rocco's profile uses the identical card treatment as every other boy — "U OUR DOGS with OUR STUDS PAGE.docx" says: "His profile should be visually respectful and warm. Do not style his section in a sombre or funeral-like way... allowing his profile to feel slightly more reflective through spacing and presentation." The build gives no such differentiation. Subjective; minor.

### Cavoodles pages

- [AboutCavoodles.tsx:66 / shared.tsx:32] Small-caps eyebrow label "Cavoodles" above the H1 — "V ABOUT CAVOODLES Cavoodle Information.docx" does-not-say: ABSENT.
- [shared.tsx:50 / AboutCavoodles.tsx:619] Decorative PawDivider (teal paw print SVG between rules) — doc does-not-say: ABSENT.
- [shared.tsx:52 / AboutCavoodles.tsx:621] "Apply Now" footer CTA block on every Cavoodles page — doc does-not-say: ABSENT (the home-page doc specifies APPLY NOW only "Directly underneath the rotating image gallery" on the home page; V doc's internal-link list does not include it).
- [shared.tsx:55-56] "More about Cavoodles" sibling-page nav footer — doc does-not-say: ABSENT from its internal-link list (partially GROUNDED by ZZZL: "Maintain natural internal links between related Cavoodle pages"; link order matches the approved section order).
- [AboutCavoodles.tsx:32] Gallery colour-name captions set in bold (figcaption font-semibold) — doc says: "Bold should only be used for: Main page heading, Section headings, Relevant subheadings" — captions are none of these.
- [AboutCavoodles.tsx e.g. line 200+] CTA buttons rendered uppercase with a "›" glyph and rounded-xl teal styling — doc does-not-say: button text labels are verbatim ("Learn About Cavoodle Generations" etc.) but visual treatment is ABSENT.
- [AboutCavoodles.tsx:32] Page titles render "About Cavoodles | The Doghouse QLD" via usePageMeta — doc gives "Suggested SEO title": "About Cavoodles | The Doghouse QLD Cavoodles Queensland" — "Suggested" only, so a site-wide convention choice, but noted.

### Training / Doghouse Deli

- [DoghouseDeli.tsx:62-69, 317-326] Per-treat cards render as dashed-border `rounded-2xl` `aspect-[3/4]` placeholder tiles with the treat name as text in 2-column (mobile) / 3-column grids under protein `<h3>`s — "Y DOGHOUSE DELI with Deli Information.docx" specifies per-protein square image areas ("Each protein category must have its own square, slightly rounded image placeholder" — X.docx) **and** per-treat portrait containers for the final graphics, each "clickable or tappable to enlarge into a clean lightbox... The lightbox must include an obvious close control." The built page has no lightbox behaviour and no per-protein image areas. Flagged for review when artwork arrives.
- [DoghouseDeli.tsx] Signup form placement inside the expanded ReadMore content between "Managing your subscription" and "Problems with an order" — "ZZZD DOGHOUSE DELI SIGNUP FORM.docx" says only "Place the sign-up form in an appropriate prominent location... It should feel like a natural invitation"; placement is builder judgment, GROUNDED in spirit.

### Resources / Legal / Contact

- [Blog.tsx / ContactUs.tsx / Grooming.tsx / PuppyResources.tsx PageHero] Eyebrow label "Resources" above each page title — ABSENT from "Z RESOURCES Section.docx".
- [PuppyResources.tsx:631-649] "Continue exploring" rendered as rounded bordered cards in a two-column grid — doc only says "Make each of these headings or accompanying calls to action internally link to its corresponding Resources page"; card treatment/grid layout not specified.
- [Blog.tsx] Eight category filters rendered as clickable cards in a 4-column grid, plus a "Clear search and filters" reset button — doc says "Create filters for:" the eight categories and "Include: Search Blog field / Category filtering"; card rendering and the reset button are not specified.
- [ContactUs.tsx:FormShell] Field validation uses browser-native validation bubbles — "ZZZA CONTACT US FORM.docx" says: "display simple, friendly messages beside the relevant field. Examples: Please enter your name. Please enter a valid email address. Please choose what we can help you with. Please enter your message." (Native bubbles neither sit beside the field nor use the specified wording.)

---
## 4. STRUCTURAL DEVIATIONS (4 findings)

Nav labels/order, page hierarchy, or URLs differing from the master site map docs
("A A AAA HANDOVER CONTENTS.docx", "A AAA Lovable START HERE Master Handover
Instructions.docx", "ZZZL Final Master Site Map and Build Instructions.docx").

- [NotFound.tsx:~6-12] 404 layout is a single centered column with a small `w-48 md:w-64` thumbnail — "ZZZH 404 Page.docx" says: "Desktop Use a balanced two-column layout where appropriate: Text and navigation | Square Doghouse image" and "The image should be visually substantial rather than a small thumbnail." (The image is square with rounded corners, which does match.)
- [GuardianHomes.tsx:247] "Apply Now" navigates to a separate page/route `/about-us/guardian-homes/apply` rather than revealing the application on the same page — "G ABOUT US Guardian Homes.docx" says: "Do not create a separate navigation page for the application. When Apply Now is clicked, smoothly reveal or scroll the visitor to the Guardian Family Application on the same Guardian Homes page." and "The Guardian Homes information and Guardian Family Application should form one complete visitor journey on this page." CONFLICT NOTE: "ZZZC GUARDIAN HOME APPLICATION FORM.docx" says: "Place this application within or create a clear application pathway from: ABOUT US > Guardian Homes" — which permits the separate-page option the build took. Also, G's page-structure items "Guardian Family Application" and "Application submission confirmation" are absent from the Guardian Homes page itself (they live on the apply page).
- [PlannedLitters.tsx:71-72] Bare "Upcoming Litters" and "Planned Litters" h2 headings rendered with no listings beneath them, followed by the empty-state card — "K PUPPIES Planned and Upcoming Litters.docx" defines those headings for when litters exist ("Upcoming Litters — Create the visitor-facing heading: Upcoming Litters — This area is for confirmed pregnancies only.") and for the no-litters case supplies only the alternative state: "More Litters Coming in the Future" + copy + 2 buttons. The empty section headings are not part of that alternative state.
- [MasterWaitlist.tsx:104-222] The expanded ReadMore content ("How the Master Waitlist Works", "No Deposits. No Numbered Positions.", "When We Have Puppies Available") is placed before the always-accessible "Join the Master Waitlist" form (line 162) — "Q PUPPIES Master Waitlist.docx" PAGE STRUCTURE orders: "Read more... control" then "Master Waitlist joining form, always accessible" then "Expanded detailed Master Waitlist information". (Functional requirement "Do not require visitors to open Read more... before they can join" is still satisfied; the order is swapped.)

**Reviewed, no finding:** Nav labels/order match ZZZL §1 exactly ("Home | About Us | Puppies | Our Dogs | Cavoodles | Training | Doghouse Deli | Resources"); all section children match ZZZL §2 (8 Cavoodle pages, 10 Puppy pages, 6 Resource pages, no Training subpages). Nav child URLs are nested (e.g. `/puppies/planned-litters`) while "ZZZG SEO and TECHNICAL Setup.docx" §6 shows examples like `/planned-upcoming-litters` — but the doc explicitly labels these "Examples" and says "Use the final approved site structure as the authority"; the built URLs are clean, human-readable, and mirror the approved hierarchy. Nav labels use Title Case (per the Footer doc's exact footer copy) with CSS uppercase rendering; no violation.

---

## 5. Internal doc conflicts (not site findings — need Charmaine to resolve)

- **Q.docx vs ZZZB.docx (waitlist form):** Q says Mobile/Suburb/State are required and "Do not ask about: Preferred sex, Preferred size..."; ZZZB (the designated form spec) removes Mobile, makes Suburb & State optional, and adds size + sex preference questions. Built follows ZZZB. Success heading: Q says "You're on the List!"; ZZZB says "You're on the Master Waitlist!" (built uses ZZZB's). Consent text differs (built uses ZZZB's).
- **G.docx vs ZZZC.docx (guardian application):** G contains its own much longer "Guardian Family Application" form spec (10 sections, three acknowledgement checkboxes, submit "Submit Guardian Family Application"); the built application follows ZZZC's shorter form. Also G demands same-page reveal while ZZZC permits a separate application page.
- **B.docx vs G.docx (naming):** B names the fifth About Us subpage "Guardian Program" (nav label and card); G titles the page "Guardian Homes". Built uses "Guardian Homes".
- **X.docx vs Y.docx (Deli copy):** The built Deli page consistently uses X.docx's copy variants where X/Y diverge ("When something says beef liver, we want beef liver." vs Y's "When something says beef, we want beef."; "...approved Doghouse Deli treat range." vs Y's "...treat collection."; "Shark jerky crispies" vs Y's "Shark Crispies"; visible "Managing your subscription" copy vs Y's hidden-structure instruction). Both docs are controlling; the choice of X vs Y needs owner confirmation.
- **ZZZA.docx vs Z RESOURCES PAGE 6 (contact dropdown options):** ZZZA has "Something else"; Z RESOURCES has "Website or general enquiry / Other". The built options match neither.
- **ZZZL "approved builds":** ZZZL references "the approved Current Litters build", "the approved Doghouse Method™ build", and "the approved First Eight Weeks build" — no handover doc in this set contains that content. If these approved builds exist anywhere (e.g. an earlier Lovable build), that content needs to be supplied.

---

## 6. Counts

| Category | Findings |
|---|---|
| 1. INVENTED CONTENT | 42 |
| 2. MISSING CONTENT | 15 |
| 3. DESIGN DECISIONS NOT IN SPEC | 36 |
| 4. STRUCTURAL DEVIATIONS | 4 |
| **Total** | **97** |

---

## 7. Prioritized fix list

### Priority 1 — Content inventions (visible to visitors, contradict the docs; fix before owner review)

1. **Home "Explore the website" card section** (Home.tsx:93-117) — remove the section and its 4 invented blurbs + "Explore ›" labels, or send to Charmaine for approval. The doc forbids adding to supplied copy.
2. **Training "Register your interest" form** (Training.tsx:130-172) — remove. The doc explicitly forbids registration/waiting-list forms ("Do not display: ... Registration forms").
3. **Guardian Homes standalone "Guardian Opportunities" subscribe section** (GuardianHomes.tsx:255-266) — remove. The docs provide opt-in only *inside* the application.
4. **404 page** (NotFound.tsx) — restore the exact mandated intro copy, change "Back to Home" to "Return to Home", remove the extra "Contact Us" button, add the "Looking for something?" helpful-links section, and use the specified two-column layout with a substantial image.
5. **Contact Us form** (ContactUs.tsx) — restore ZZZA's dropdown label ("What can we help you with?") and the doc's option list, placeholders ("Optional", "Tell us a little about how we can help."), privacy line ("Information submitted through this form..."), and success copy ("Thank you!" / "Your message has been sent successfully..."). Restore the ZZZA short intro above the form.
6. **Contact Us page body** (ContactUs.tsx) — restore the Z RESOURCES PAGE 6 website copy: location/no-drop-in-visits paragraphs, FAQ link, and the post-form enquiry sections (Puppy / Existing families / Guardian / Deli / Training / advice links / social / "We look forward to hearing from you").
7. **Placeholder pages** (CurrentLitters.tsx, DoghouseMethod.tsx, FirstEightWeeks.tsx) — the "Details to be supplied by The Doghouse QLD." body copy contradicts H.docx ("Do not generate or invent content for these individual pages at this stage"). Keep the page shells with headings only, or confirm the "approved builds" referenced by ZZZL with Charmaine.
8. **Instagram URL** (config.ts:17) — change `?igsh=` to `?stkn=` to match the documented confirmed URL.
9. **"The Doghouse Method™"** (nav.ts:35) — restore the ™ symbol per ZZZL.
10. **Footer "Legal" label** (chrome.tsx) — add the word "Legal" above the legal links per the footer doc's exact copy.
11. **Puppy application form microcopy** (ProcessApplying.tsx) — the time-alone dropdown options and field placeholders ("e.g. 4510", "Type 'No preference'...") are invented; remove or get owner approval for each.
12. **Deli treat list** (DoghouseDeli.tsx) — reconcile with Y.docx's approved list (Beef Neck Tendon, Emu Neck, Emu Lumbar Pieces, Crocodile Tails, Goat Tripe, Goat Lung Crisps, Goat Liver, Goat Kidney; "Shark Crispies" naming) and confirm with Charmaine whether X or Y is the controlling copy.
13. **Guardian application** (GuardianApplication.tsx) — restore the truncated supporting sentence ("This is important because Guardian Homes cannot have incompatible entire dogs."), enforce "Are you interested in:" as required, and implement the doc-specified error messages instead of native browser bubbles.
14. **PuppyResources** — add the missing Training link to "Continue exploring our Resources".

### Priority 2 — Meta descriptions (head-only, but still invented copy; align or confirm)

15. Home, OurStory, MeetTheTeam, BreedingPhilosophy, HealthTesting, GuardianHomes, GuardianApplication, Training, DoghouseDeli, TermsConditions meta descriptions — all are paraphrases/inventions where docs give "suggested" wording or nothing. Align to the suggested wording where given; confirm the rest with Charmaine.

### Priority 3 — Design decisions (confirm with Charmaine as a batch)

16. Corinthia script headings + teal/gold palette (already raised with Marcus — docs never name a font or colour).
17. PawDivider ornament on most pages; "›" chevrons and forced-uppercase on buttons; eyebrow kickers ("About Us", "Puppies", "Our Dogs", "Cavoodles", "Resources"); sticky header; footer "Contact Us" button duplicate; form card containers; blog category cards + reset button; treat-card grid vs specified per-protein image areas + lightbox; gallery dot pagination; bold gallery captions (doc restricts bold usage); ReadMore toggle placed after content instead of beneath the button.
18. Rocco's undifferentiated profile styling (doc asks for slightly more reflective presentation); bare "Teddy's Personality" heading (S doc says hide unsupplied fields).

### Priority 4 — Needs Charmaine's input (cannot be fixed from the docs alone)

19. Resolve the six internal doc conflicts listed in §5 (X vs Y Deli copy; Q vs ZZZB waitlist fields; G vs ZZZC guardian form length and page placement; B vs G "Guardian Program" vs "Guardian Homes"; ZZZA vs Z RESOURCES dropdown options; the missing "approved builds" for Current Litters / Doghouse Method™ / First Eight Weeks).
20. Supply or approve: deeper content for the dedicated Cavoodle sub-pages (doc expects more than the About overview), Doghouse Deli hidden pricing/postage structure content, remaining photographs and dog-photo identities.

---

*End of report. No site files were edited; this is a report only.*
