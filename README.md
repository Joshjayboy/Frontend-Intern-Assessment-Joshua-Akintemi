# Tobams Group – Training and Development Page

A pixel-perfect, fully responsive implementation of the Tobams Group Training and Development page, built as part of a Frontend Intern Assessment.

## Live URL

[https://tobam-frontend-intern-assessment-jo.vercel.app/](https://tobam-frontend-intern-assessment-jo.vercel.app/)

## Figma Design

[View Figma Design](https://www.figma.com/design/wuqCLkK1feTgB6xxSRRwZu/Frontend-Intern-Assessment?node-id=0-1&p=f&t=qxnAKp4Ael8QtLYz-0)

## Stack

- [Next.js 16](https://nextjs.org/) with App Router
- [Tailwind CSS v4](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- Fonts: Nunito and Nunito Sans via `next/font/google`
- Images optimized via `next/image`

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Joshjayboy/Frontend-Intern-Assessment-Joshua-Akintemi.git
cd Frontend-Intern-Assessment-Joshua-Akintemi
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
assessment/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── LMS.tsx
│   ├── CorporateTrainings.tsx
│   ├── IndividualTraining.tsx
│   ├── CapacityDevelopment.tsx
│   ├── ManagementDevelopment.tsx
│   ├── TransformationHub.tsx
│   ├── TrainingConsultant.tsx
│   ├── ConsultationCTA.tsx
│   ├── Testimonials.tsx
│   └── Footer.tsx
└── public/
```

## Design Decisions & Technical Assumptions

- **Consistent max-width alignment**: All sections use `max-w-7xl px-4 md:px-8` as the standard container to ensure consistent horizontal alignment across the page, matching the Figma layout.
- **Tailwind responsive prefixes only**: All responsive behaviour is handled exclusively with Tailwind's `sm:`, `md:`, and `lg:` prefixes. No custom media queries were used, as required.
- **No CSS frameworks other than Tailwind**: Only Tailwind CSS v4 utility classes are used for styling. No Bootstrap, MUI, Chakra, or any other UI framework was used.
- **Fonts via next/font**: Nunito and Nunito Sans are loaded using `next/font/google` for performance optimization and zero layout shift.
- **Images via next/image**: All images use the Next.js `Image` component for automatic optimization, lazy loading, and responsive sizing.
- **Static links**: All `href` values are set to `#` as the assessment scope is a static page implementation with no routing required.
- **Testimonials carousel**: Implemented a lightweight infinite scroll carousel using `useRef` and `scrollTo` without any third-party library, keeping dependencies minimal.
- **Mobile-specific CTA text**: The `ConsultationCTA` section displays different text on mobile vs desktop to better suit smaller screen contexts, as the original desktop copy was too long for mobile viewports.

## AI Tool Disclosure

AI assistance (Amazon Q) was used during development to help with Tailwind class suggestions, typography specification implementation, and layout alignment consistency across components. All code was reviewed, understood, and intentionally applied by the developer.

## Known Issues

- Dropdown menus in the Navbar are not functional as the Figma design scope covers the static page only.
- The Testimonials carousel scroll position resets on window resize.
