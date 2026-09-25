# Tactile Collage Portfolio

A complete, responsive portfolio website built with React, TypeScript, Vite, and Tailwind CSS. The design translates a portrait-format photographic collage into a structured, highly legible editorial portfolio.

---

## Visual & Design System

- **Continuous Foundation:** Medium blue (`#2C61AA`) continuous canvas with a subtle, static, locally generated grain texture.
- **Color Tokens:**
  - `--blue`: `#2C61AA` (Continuous foundation)
  - `--yellow`: `#FCF003` (Primary recurring foreground & action)
  - `--red`: `#E00304` (Secondary recurring accent)
  - `--green`: `#01D408` (Concentrated visual counterweight)
  - `--ink`: `#030203` (Text surfaces, borders, hard offset shadows)
  - `--paper`: `#FCFBFC` (High-contrast reading surfaces, borders)
  - `--cyan`: `#9EFBF1` (Localized micro-lettering accent)
  - `--ochre`: `#BC8505` (Secondary warmth & circular depth)
  - `--brown`: `#320A0B` (Grounding pot mass)
- **Collage Devices:** Overlapping diagonal planes (-10° to +10°), electric-green bottle anchor, dark pot grounding mass, red fire extinguisher profile, yellow bowl circular beadwork motif, restrained starburst, and dice facets.
- **Typography:** Dual font stacks:
  - Display: `"Arial Black", "Arial Bold", Arial, sans-serif`
  - Body & Interface: `Arial, Helvetica, sans-serif`
  - Line measure disciplined to 60–65 characters per line on solid paper.

---

## Getting Started

### Development
```bash
npm run dev
```
Starts the local development server on port 3000.

### Production Build
```bash
npm run build
```
Creates an optimized, tree-shaken static production bundle in `dist/`.

---

## Replacing Demo Content

All content is managed through a single typed configuration file:
`src/data/portfolioData.ts`

### 1. Owner & Studio Profile
Open `src/data/portfolioData.ts` and modify the `site`, `hero`, and `about` objects:
```typescript
export const initialPortfolioConfig: PortfolioConfig = {
  site: {
    portfolioName: 'YOUR STUDIO NAME',
    tagline: 'Your discipline tagline here',
  },
  hero: {
    heading: 'Selected work.',
    placeholderIntro: 'Your authentic introduction here.',
    exploreCtaLabel: 'Explore work',
    aboutLinkLabel: 'About this portfolio',
  },
  // ...
};
```

### 2. Projects & Case Studies
Each entry in the `projects` array represents an archive entry with case-study panels:
```typescript
{
  id: 'demo-01',
  title: 'Your Project Title',
  category: 'Identity', // 'Identity' | 'Digital' | 'Experiments'
  year: '2025',
  demoLabel: 'Demo project',
  summary: 'Your project overview...',
  role: 'Your discipline role...',
  approach: 'Your methodology...',
  // Optional: add your custom image placed in the /public folder:
  // imageUrl: '/my-project.jpg',
  visualPanels: [ ... ]
}
```

### 3. Adding Custom Images (`public/`)
Place any custom images (e.g. photos, project screenshots, or `Zanzano.jpeg`) into the `/public/` directory at the project root.
- They are served directly at the root URL (e.g. `/public/my-image.jpg` is accessed as `"/my-image.jpg"`).
- Set `imageUrl: '/my-image.jpg'` on any project or visual panel in `src/data/portfolioData.ts` to seamlessly display your custom image.

### 4. Contact & Social Links
Configure the `contact` block:
- **With active email:** Set `email: "hello@yourdomain.com"`. This activates the direct "Send email" button and working clipboard copy button with live announcement.
- **Without email:** Set `email: null` or `""`. This automatically displays the clean "Contact details coming soon" state without dead links or fake form submissions.
- **Social Links:** Add real URLs to `socialLinks: [{ platform: "GitHub", url: "https://..." }]`.

---

## Accessibility & Standards

- **Semantic Landmarks:** `<header>`, `<main>`, `<section>`, `<footer>`, single `<h1>`.
- **Keyboard Navigation:** Focus rings (`focus-visible`), skip-to-content link, accessible dialog focus trapping with `Escape` key dismissal and focus restoration.
- **Motion:** Full respect for `prefers-reduced-motion`.
- **Contrast:** Strict WCAG AA contrast compliance across all text combinations.
