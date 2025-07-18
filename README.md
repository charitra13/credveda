# CredVeda - AI-Powered Credit Analysis Platform

## Overview
CredVeda is a modern web application that provides AI-powered credit profile analysis, personalized loan recommendations, and connects users with financial advisors.

## Technology Stack
- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom UI components with shadcn/ui
- **Animations**: Framer Motion
- **Package Manager**: pnpm

## Changelog

### Version 1.0.1 (Current)
**Date**: Current Release  
**Changes**:
- **UI Enhancement**: Updated hero section typography by replacing double dashes (--) with a single em dash (—) for improved visual appeal and better typography standards
- **Component**: `components/hero.tsx` - Line 27 modification

### Version 1.0.0
**Date**: Initial Release  
**Features**:
- Initial project setup with Next.js and TypeScript
- Hero section with animated content
- Credit analysis features
- Modern UI with Tailwind CSS
- Responsive design implementation

## Development

### Getting Started
```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build
```

### Project Structure
```
credveda.com/
├── app/                 # Next.js app directory
├── components/          # React components
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── public/             # Static assets
└── styles/             # Global styles
```

## Deployment
The application is deployed and accessible at: https://credveda.vercel.app 