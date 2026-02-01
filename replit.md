# GuruTattva - Himalayan Meditation Platform

## Overview

GuruTattva is a spiritual wellness web application focused on Himalayan meditation practices. The platform serves as an informational and community hub for meditation seekers (sadhaks), providing features for discovering meditation centers, learning about spiritual programs, and connecting with the GuruTattva community across 70+ countries.

The application follows a full-stack TypeScript architecture with a React frontend and Express backend, using PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state
- **Styling**: Tailwind CSS with custom spiritual theme (purple/gold color palette)
- **UI Components**: shadcn/ui component library built on Radix UI primitives
- **Animations**: Framer Motion for page transitions and micro-interactions
- **Build Tool**: Vite with React plugin

The frontend uses path aliases:
- `@/*` maps to `client/src/*`
- `@shared/*` maps to `shared/*`
- `@assets` maps to `attached_assets/`

### Backend Architecture
- **Framework**: Express 5 with TypeScript
- **Server**: Node.js HTTP server
- **API Pattern**: RESTful routes prefixed with `/api`
- **Development**: Vite middleware for HMR during development
- **Production**: Static file serving from built assets

### Data Layer
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema Location**: `shared/schema.ts` (shared between frontend and backend)
- **Validation**: Zod schemas generated via drizzle-zod
- **Migrations**: Drizzle Kit with `db:push` command

Current schema includes a basic users table with UUID primary keys.

### Storage Pattern
The application uses an interface-based storage pattern (`IStorage`) in `server/storage.ts`, currently implemented with in-memory storage (`MemStorage`). This design allows easy swapping to database-backed storage.

### Build System
- **Client**: Vite builds to `dist/public`
- **Server**: esbuild bundles to `dist/index.cjs`
- Custom build script in `script/build.ts` handles both builds and bundles select dependencies for faster cold starts

## External Dependencies

### Database
- **PostgreSQL**: Primary database (requires `DATABASE_URL` environment variable)
- **connect-pg-simple**: Session storage for Express sessions

### UI/UX Libraries
- **Radix UI**: Full suite of accessible UI primitives (accordion, dialog, dropdown, etc.)
- **Embla Carousel**: Image/content carousels
- **Lucide React**: Icon library
- **class-variance-authority**: Component variant management

### Development Tools
- **Replit Plugins**: Runtime error overlay, cartographer, dev banner (Replit-specific)
- **TypeScript**: Strict mode enabled with bundler module resolution

### Fonts
- **Google Fonts**: Playfair Display (serif headings) and Poppins (sans-serif body text)