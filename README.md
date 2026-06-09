# Chhavi Kumari — Dual-Mode Portfolio

A GitHub Pages-ready portfolio built with Next.js, React, TypeScript, and Tailwind CSS.

The site has two realities powered by the same data:

- **Professional Mode**: clean, recruiter-friendly TPM / AI platforms / enterprise systems portfolio.
- **Creative Mode**: Minecraft-inspired creative universe with only creative, community, storytelling, and experimental work.

## Project Structure

```txt
app/                         Next.js App Router pages
  experience/[slug]/          Static experience detail routes
  projects/[slug]/            Static project detail routes
components/                   Reusable UI, mode provider, header, avatar
data/portfolio.ts             Single source of truth for profile content
docs/ARCHITECTURE.md          Rendering and categorization notes
public/assets/                Headshot, avatar, and visual assets
```

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Static Build

```bash
npm run build
```

Next exports the static site into `out/`.

## GitHub Pages Deployment

### Option 1: GitHub Actions

The active workflow is `.github/workflows/deploy.yml`:

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: GITHUB_PAGES=true npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

Then set **Settings → Pages → Source → GitHub Actions**.

### Option 2: Manual

```bash
npm install
$env:GITHUB_PAGES="true"
$env:GITHUB_REPOSITORY="Chhavi-Kumari/Portfolio"
npm run build
```

Upload the generated `out/` folder to your Pages branch or static host.

## Updating Content

Edit `data/portfolio.ts`:

- `profile` controls identity, links, headshot, and avatar.
- `professionalExperiences` powers Professional Mode experience cards and detail pages.
- `creativeExperiences` powers Creative Mode experience cards and detail pages.
- `projects` powers `/projects` and `/projects/[slug]`.
- Any item marked `status: "placeholder"` is intentionally easy to replace later.

## Asset Notes

- Professional headshot: `public/assets/headshot.png`
- Minecraft avatar: `public/assets/minecraft-avatar.png`
- Source PDF copy: `public/Chhavi-Kumari-LinkedIn-Profile.pdf`

