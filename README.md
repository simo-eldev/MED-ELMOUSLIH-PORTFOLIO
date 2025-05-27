# Bilingual Portfolio Web App

## Overview

A modern, responsive personal portfolio built with React, Vite, Tailwind CSS, and react-i18next. All content is dynamically loaded from a single structured CV file (JSON), supporting both English and French.

## Features

- Dynamic content from `src/data/cv.json`
- Internationalization (EN/FR) with react-i18next
- Language switcher
- Pages: Home, About, Projects, Experience, Education, Contact, (optional Blog)
- Contact form with react-hook-form and yup/zod validation
- Responsive, accessible, light/dark mode
- Easy content updates by editing `cv.json`

## Getting Started

1. `npm install`
2. `npm run dev`

## Folder Structure

- `src/data/cv.json` — All CV content (bilingual)
- `src/components/` — Reusable UI components
- `src/pages/` — Page components (Home, About, etc.)
- `src/i18n/` — i18n config

## Deployment

Deploy to Vercel, Netlify, or GitHub Pages.

---

## CV Data Example (`src/data/cv.json`)

```json
{
  "about": {
    "en": {"name": "John Doe", "bio": "..."},
    "fr": {"name": "Jean Dupont", "bio": "..."}
  },
  "projects": [
    {"title": {"en": "Project X", "fr": "Projet X"}, "description": {"en": "...", "fr": "..."}, ...}
  ],
  ...
}
```
