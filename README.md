# The Doghouse QLD — website

Website for **The Doghouse QLD** (Theodore Cavoodles), a home-based Cavoodle breeder in
Moreton Bay, Queensland, run by Charmaine B.

Built with **Vite + React + TypeScript + Tailwind CSS** — the same stack Lovable uses, so
this project can be connected to a Lovable project and edited from either side.

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Brand

- **Logo:** `public/images/logo.png` (cropped from `Doghouse_Logo_NEW_with_Paw_print.pdf`).
- **Teal:** `#17A296` — sampled from the logo file (print spec is CMYK 90/0/45/10;
  this hex is its on-screen match). Used as the primary brand color.
- **Headings:** Corinthia Bold (the script from the logo's "Doghouse" wordmark),
  loaded from Google Fonts. Body: Inter.

## Adding photos

Drop the breeder's photos into `public/images/` (e.g. `public/images/hero.jpg`), then
reference them as `/images/hero.jpg` in the components. Current sections use a paw-print
motif as placeholders until real photos are added.

Suggested shots: hero image of Charmaine with dogs, puppy gallery, home environment.

## Content notes

- Copy was drafted from the [RightPaw listing](https://rightpaw.com.au/l/the-doghouse-qld-theodore-cavoodles/296a0927-5317-4f69-a9ef-de2a28b688d4)
  (Sep 2026). Verify details with Charmaine before publishing.
- The **Puppies** section (`src/components/Puppies.tsx`) lists current litters and
  availability — update it whenever litter status changes.
- Reviews: one verified RightPaw review is quoted; more live on the
  [Facebook reviews page](https://www.facebook.com/profile.php?id=100067893231417&sk=reviews).

## Breeder handover package (authoritative)

`docs/handover/` holds the complete website specification supplied by The Doghouse QLD
(45 documents, Sep 2026). It is the **source of truth** for the full site and takes
priority over the starter scaffold in `src/`:

- `A AAA Lovable START HERE Master Handover Instructions.docx` — read first.
- `ZZZL Final Master Site Map and Build Instructions.docx` — site map, nav order,
  all ~35 pages, forms, build stages. Read second.
- Page-by-page build instructions (About Us, Puppies, Our Dogs, Cavoodles, Training,
  Doghouse Deli, Resources), forms (Contact, Puppy Application, Master Waitlist,
  Guardian Home Application, Deli signup), mailing audiences, legal pages, SEO,
  404 page, audits, and launch testing.
- Layout reference images and the logo master files (`.ai` + `.pdf`).
- `ZZZN Remaining Real World Connection details.docx` — items the breeder must still
  supply (domain, form receiving email, mailing provider, photographs, etc.).

Key rules from the handover: preserve approved copy verbatim, Australian English, no
em dashes, no stock/AI dog photos (flag missing images instead), three mailing
audiences kept separate, do not launch without owner approval.

The starter scaffold in `src/` covers the brand foundation (logo, teal `#17A296`,
Corinthia Bold headings) and a subset of pages. The full multi-page build with forms,
blog, FAQ and mailing lists follows the handover documents.

## Connecting to Lovable

1. In Lovable, create a new project (any starter prompt is fine).
2. Go to Project Settings → Integrations → GitHub → **Connect**, and choose this
   existing repository (`the-doghouse-qld`, `main` branch).
3. Push this repo's code to `main` — Lovable will pull it into the project automatically.
4. From then on, edits in Lovable push here and pushes here sync back into Lovable.
   Only the default (`main`) branch syncs, so avoid editing in both places at the same
   time.
