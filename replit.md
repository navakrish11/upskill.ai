# Upskill.AI - EXL's AI-Powered Training Platform

## Overview

This is a modern full-stack web application showcasing EXL's flagship AI initiative, Upskill.AI. The platform serves as a landing page for three core AI-powered training solutions: AI Trainer, MiAI Call Simulator, and Gamification Experience. The application demonstrates cutting-edge AI technologies for revolutionizing corporate training and development.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom EXL brand theming
- **UI Components**: Radix UI primitives with shadcn/ui design system
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js 20 with Express.js
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production**: esbuild for server-side bundling

### Database & ORM
- **Database**: PostgreSQL 16 (configured for NeonDB serverless)
- **ORM**: Drizzle ORM with TypeScript-first approach
- **Schema**: Centralized in `shared/schema.ts` for type safety
- **Migrations**: Drizzle Kit for schema management

## Key Components

### Frontend Components
- **Landing Page**: Main entry point with hero section and solution showcases
- **Solution Cards**: Interactive cards for AI Trainer, MiAI Simulator, and Gamification
- **Header/Navigation**: Branded navigation with EXL logo and smooth scrolling
- **Technology Showcase**: Features grid highlighting AI capabilities
- **Call-to-Action**: Contact forms and demo scheduling
- **Footer**: Contact information and team links

### Backend Components
- **Express Server**: RESTful API server with middleware for logging and error handling
- **Storage Interface**: Abstracted storage layer supporting both memory and database implementations
- **User Management**: Basic user schema with authentication preparation
- **Route Registration**: Modular route handling system

### Shared Components
- **Schema Definitions**: Type-safe database models using Drizzle and Zod
- **Type Safety**: Shared TypeScript types between frontend and backend

## Data Flow

1. **Client Request**: Browser requests are handled by Vite dev server in development
2. **API Routing**: API calls are proxied to Express server at `/api/*` routes
3. **Data Processing**: Server processes requests using storage interface
4. **Database Operations**: Drizzle ORM handles PostgreSQL interactions
5. **Response**: JSON responses are returned with proper error handling
6. **Client State**: TanStack Query manages caching and synchronization

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL connection for serverless environments
- **drizzle-orm**: Type-safe ORM with PostgreSQL dialect
- **@tanstack/react-query**: Powerful data synchronization for React
- **@radix-ui/react-***: Accessible UI primitives
- **tailwindcss**: Utility-first CSS framework

### Development Tools
- **tsx**: TypeScript execution for development
- **esbuild**: Fast JavaScript bundler for production
- **vite**: Frontend build tool with HMR
- **@replit/vite-plugin-***: Replit-specific development enhancements

### UI Enhancement
- **lucide-react**: Modern icon library
- **class-variance-authority**: Type-safe CSS class variants
- **date-fns**: Date manipulation utilities
- **embla-carousel-react**: Touch-friendly carousel component

## Deployment Strategy

### Development Environment
- **Runtime**: Node.js 20 with PostgreSQL 16 module
- **Server**: Vite dev server with Express API backend
- **Port**: Application runs on port 5000
- **Database**: Environment-based PostgreSQL connection

### Production Deployment
- **Build Process**: 
  1. Vite builds frontend assets to `dist/public`
  2. esbuild bundles server code to `dist/index.js`
- **Deployment Target**: Autoscale deployment on Replit
- **External Port**: 80 (mapped from internal port 5000)
- **Environment**: Production mode with optimized assets

### Database Management
- **Schema**: Managed through Drizzle migrations in `/migrations`
- **Push Command**: `npm run db:push` for schema updates
- **Connection**: Configured via `DATABASE_URL` environment variable

## Changelog

Changelog:
- June 27, 2025. Initial setup
- June 27, 2025. Added video modal functionality for demo playback
- June 27, 2025. Integrated Tech Details, Product Team, and Functional Team information directly on landing page with expandable sections
- July 09, 2025. Updated footer to match brand design with social media icons and 3-column layout
- July 09, 2025. Added contact form component with demo booking functionality above footer
- July 09, 2025. Updated solution card descriptions with more compelling and specific messaging
- July 12, 2025. Fixed scroll bar issue in FlippableSolutionCard details view by optimizing content layout
- July 12, 2025. Updated AI Trainer technology stack: replaced TensorFlow with Langchain, Unity 3D with Next.js, Azure Speech Services with Blob, and OpenAI GPT-4 with GPT-4o
- July 12, 2025. Updated AI Trainer description to focus on "narrated video modules" instead of "voice-narrated training experiences"
- July 12, 2025. Added contact email "#EAI-All@exlservice.com" to footer below social media icons
- July 12, 2025. Updated AI Trainer navigation link to redirect to "https://agenticairi-app6.exlservice.com/" instead of scrolling to card
- July 12, 2025. Updated MiAI Simulator navigation link to redirect to "https://miaisimulator.exlservice.com/" instead of scrolling to card
- July 12, 2025. Added "Up to 35% Reduction in Training Costs" metric to Technology Showcase business value section
- July 12, 2025. Updated AI Trainer technology from "Blob" to "Blog Blob Storage"
- July 12, 2025. Reordered AI Trainer technologies to: React Native, Next.js, GPT-4o, Langchain, Blob Storage, Node.js
- July 12, 2025. Created Coming Soon page for Gamification feature and updated navigation to redirect there
- July 12, 2025. Modified VideoModal to show "Coming Soon" message for MiAI Call Simulator and Gamification Experience demos
- July 12, 2025. Updated MiAI Simulator navigation link from "https://miaisimulator.exlservice.com/" to "https://miaisimulatorapp.exlservice.com/"
- July 12, 2025. Removed all navigation buttons from header (AI Trainer, MiAI Simulator, Gamification, Contact) for cleaner branding-focused design
- July 12, 2025. Optimized page layout to fit hero section and all three solution cards above the fold without scrolling
- July 12, 2025. Restored card sizes to prevent content truncation while optimizing section spacing for single-page layout
- July 12, 2025. Added "Launch Application" buttons to cards with external links for AI Trainer and MiAI Simulator, "Coming Soon" for Gamification
- July 12, 2025. Replaced flip side content with custom highlights for all three solutions, removing generic tech details in favor of compelling benefit-focused messaging
- July 12, 2025. Enhanced flip side visual design with gradient backgrounds, decorative elements, simple dot bullets, and colored bottom sections matching header themes

## User Preferences

Preferred communication style: Simple, everyday language.

### Project Requirements
- Landing page showcasing three AI-powered training solutions
- Video integration for demo playback in modal windows
- Brand-compliant design using EXL colors and logo
- NO login/sign-up functionality (removed per user request)