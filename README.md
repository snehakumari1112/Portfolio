# Sneha Kumari Portfolio

Modern single-page developer portfolio built with React + Vite, styled with Tailwind CSS, and animated with Framer Motion.

## Live Features

- Premium dark-theme landing page with animated aura background
- Smooth reveal animations and scroll progress indicator
- About section with combined Experience & Education timeline
- Skills, Projects, and Contact sections
- Contact form integrated with Formspree
- Resume CTA from hero section

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- Framer Motion
- lucide-react icons
- Formspree (contact form submission)

## Project Structure

```text
Portfolio Main/
  public/
    favicon.svg
  resume/
    SnehaKumari_Resume.pdf
  src/
    components/
      ui/
        badge.jsx
        button.jsx
        card.jsx
    lib/
      utils.js
    App.jsx
    index.css
    main.jsx
  index.html
  package.json
  tailwind.config.js
  vite.config.js
```

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Important Notes

- Vite scripts in package.json use direct Node invocation for compatibility with Windows paths that include special characters.
- Main page entry is src/App.jsx.

## Contact Form (Formspree)

The contact form is configured in src/App.jsx and posts to:

- https://formspree.io/f/mjgpjeov

To use a different endpoint, replace the URL in the submit handler.

## Deployment

This is a static frontend app and can be deployed to:

- Vercel
- Netlify
- GitHub Pages

Build output directory:

- dist/

## Scripts

- npm run dev: starts local development server
- npm run build: generates production files in dist/
- npm run preview: serves built dist/ locally

## License

Personal portfolio project. Update license terms as needed.
