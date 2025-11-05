# Universidad Elite - University Website

## Project Overview
A modern, responsive university website built with React, TypeScript, and Vite. The site showcases Universidad Elite's academic programs, campuses, admissions information, and scholarship opportunities.

## Technology Stack
- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Routing**: React Router DOM
- **State Management**: TanStack React Query
- **Icons**: Lucide React
- **Development**: ESLint, TypeScript

## Project Structure
```
src/
├── components/           # Reusable UI components
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Carreras.tsx     # Academic programs
│   ├── Postgrados.tsx   # Graduate programs
│   ├── Sedes.tsx        # Campus locations
│   ├── Admision.tsx     # Admissions info
│   ├── Fechas.tsx       # Important dates
│   ├── Becas.tsx        # Scholarships
│   └── Footer.tsx       # Site footer
├── pages/               # Page components
│   ├── Index.tsx        # Homepage
│   └── NotFound.tsx     # 404 page
├── hooks/               # Custom React hooks
├── lib/                 # Utilities
└── assets/              # Static assets
```

## Development Setup
The project is configured to run on port 5000 in the Replit environment with:
- Host: 0.0.0.0 (required for Replit proxy)
- Vite dev server with hot reload
- Automatic dependency installation

## Deployment Configuration
- **Target**: Autoscale (suitable for static university website)
- **Build**: `npm run build` (creates optimized production build)
- **Run**: `npm run preview` (serves built static files)

## Features
- Responsive design for all devices
- Modern UI with shadcn/ui components
- SEO optimized with meta tags and Open Graph
- Smooth scrolling navigation
- Professional university branding
- Multi-section layout showcasing:
  - Academic programs (50+ careers)
  - Graduate programs
  - Campus locations (12 sedes)
  - Admissions process
  - Important dates
  - Scholarship opportunities

## Recent Changes
- 2025-09-28: Configured for Replit environment
- Updated Vite config for proper host/port settings
- Set up deployment configuration
- Verified application functionality

## User Preferences
- Modern, professional design
- Spanish language content
- University/education sector focus
- Clean, accessible interface