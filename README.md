# BioNexus 2K26

Next.js site for BioNexus 2K26, the National Level Technical Symposium by the
Department of Biomedical Engineering, PSR Engineering College, Sivakasi.
22 September 2026.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- three.js for the rotating DNA/caduceus intro scene and the two lab-coat figures
- Registration is handled externally via Google Forms (see `lib/data.ts`)

## Project structure

```
app/
  layout.tsx        Root layout, fonts, page metadata
  page.tsx           Home page — manages the intro → site transition
  globals.css         Design tokens + base styles
components/
  Intro.tsx           Preloader, title, "Enter BioNexus" CTA
  IntroScene.tsx       three.js canvas: DNA/caduceus core + two coat figures
  Nav.tsx              Sticky nav
  Hero.tsx             Recap + live countdown to the event
  EventsSection.tsx    Technical / non-technical / special event tracks
  ScheduleSection.tsx  Run-of-show timeline
  VenueFoodSection.tsx Fee panel + embedded map
  CoordinatorsSection.tsx
  RegisterSection.tsx  Links out to the Google Form
  Footer.tsx
lib/
  data.ts              Single source of truth for events, coordinators, schedule, dates
  useCountdown.ts       Countdown hook
```

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Editing content

Everything content-related — event names/descriptions, coordinators, the
schedule, the event date, and the Google Form URL — lives in `lib/data.ts`.
Change it there and every section updates automatically.

To point registration at a different form, update `GOOGLE_FORM_URL` in
`lib/data.ts`. The nav button and the Register section both read from it.

## Swapping in real 3D models

The intro currently builds the DNA/caduceus object and the two coat figures
out of plain three.js primitives (spheres, cones, cylinders) so the project
has zero external asset dependencies. If you want sculpted, more realistic
figures:

1. Get `.glb`/`.gltf` models (e.g. from Sketchfab, or export from Blender).
2. Drop them in `public/models/`.
3. In `components/IntroScene.tsx`, replace the `makeFigure()` primitive
   group with a `GLTFLoader` load, e.g.:

```ts
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const loader = new GLTFLoader();
loader.load("/models/doctor-woman.glb", (gltf) => {
  gltf.scene.position.x = -3.4;
  scene.add(gltf.scene);
});
```

4. Wire the preloader in `components/Intro.tsx` to `THREE.LoadingManager`
   progress events instead of the simulated timer, so "Loading %" reflects
   real asset load time.

## Wiring a real registration backend (optional)

Registration currently opens your Google Form
(`https://forms.gle/dXK6HxxzKqLkJHmJ8`) in a new tab — no backend needed.
If you later want an in-site form instead:

- **Simplest**: keep using Google Forms, but embed it with an `<iframe>`
  (`.../viewform?embedded=true`) inside `RegisterSection.tsx` instead of
  linking out.
- **Custom backend**: add a Next.js Route Handler at
  `app/api/register/route.ts` that validates and writes submissions to
  Firebase, a Google Sheet (via the Sheets API), or a database, then swap
  `RegisterSection.tsx` for a real `<form>` that POSTs to it.

## Deployment (Vercel)

1. Push this project to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: Next.js (auto-detected). No environment variables are
   required for the current build.
4. Deploy. Vercel builds `npm run build` and serves the output automatically.

For a custom domain, add it under Project Settings → Domains once deployed.

## Performance notes

- The three.js scene only mounts client-side (`dynamic(..., { ssr: false })`)
  and unmounts once the intro finishes, so it doesn't cost anything on the
  rest of the site.
- `prefers-reduced-motion` is respected globally in `globals.css`.
- If you add real `.glb` models, compress them (e.g. with `gltf-transform`)
  and consider a lower-poly fallback for mobile.
