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

### Version 1.1.6 (Current)
**Date**: Current Release  
**Changes**:
- **Analysis Type Cards Redesign**: Updated "Choose Your Analysis Type" section to match provided design mockup
  - Enhanced title styling with "Analysis Type" highlighted in brand blue color
  - Redesigned card gradients to match target design (emerald-teal, orange, slate)
  - Implemented larger circular elements (128px) with backdrop blur and borders
  - Improved typography and spacing throughout cards
  - Enhanced hover effects with subtle gradient overlays
  - Moved icons to top-right in styled containers
  - Centered descriptions at bottom of cards for better visual hierarchy
- **Components Modified**:
  - `components/card-design.tsx` - Complete redesign of card layout and styling

### Version 1.1.5
**Date**: Previous Release  
**Changes**:
- **Chat Notification Popup**: Added engaging notification popup for chat icon
  - Notification appears 3 seconds after page load to encourage user interaction
  - Popup shows "Need help? Chat with us to know more about credit analysis!"
  - Auto-hides when chat is opened or can be manually dismissed
  - Includes speech bubble design with smooth animations
  - Positioned above chat button with proper z-index handling
- **Components Modified**:
  - `components/floating-chat.tsx` - Added notification state, timers, and popup component

### Version 1.1.4
**Date**: Previous Release  
**Changes**:
- **FAQ Section Removal**: Removed FAQ section from webpage
  - Completely removed FAQ section since functionality moved to chatbot
  - Removed FAQ import and component from main page layout
  - Updated footer navigation to remove FAQ link
  - Streamlined page layout focusing on core sections
- **Components Modified**:
  - `app/page.tsx` - Removed FAQ import and component
  - `components/footer.tsx` - Removed FAQ navigation item

### Version 1.1.3
**Date**: Previous Release  
**Changes**:
- **Footer Navigation Fix**: Implemented proper section navigation
  - Fixed footer quick links to redirect to correct sections instead of just home
  - Added smooth scrolling functionality similar to header navigation
  - Added ID to FAQ section for proper navigation target
  - Replaced "Sign Up" link with "FAQ" link since no signup section exists
- **Components Modified**:
  - `components/footer.tsx` - Added handleNavClick function and updated navigation structure
  - `components/faq.tsx` - Added id="faq" to section for navigation targeting

### Version 1.1.2
**Date**: Previous Release  
**Changes**:
- **Chat UX Improvement**: Changed FAQ panel default state
  - FAQ panel now starts collapsed when chat window opens
  - Users can expand FAQ panel manually if needed
  - Improved user experience with less cluttered initial chat view
- **Components Modified**:
  - `components/floating-chat.tsx` - Changed isFAQExpanded default state from true to false

### Version 1.1.1
**Date**: Previous Release  
**Changes**:
- **FAQ Content Update**: Corrected NBFC connection claims
  - Updated FAQ answer for "Can I compare loans from multiple NBFCs?"
  - Removed inaccurate "500+ NBFCs" claim and replaced with "a network of NBFCs"
  - Maintained functionality while ensuring content accuracy
- **Components Modified**:
  - `lib/faq-data.ts` - Updated FAQ answer to be more accurate about NBFC connections

### Version 1.1.0
**Date**: Previous Release  
**Changes**:
- **FAQ Chat Integration**: Enhanced floating chat with FAQ functionality
  - Created shared FAQ data structure in `lib/faq-data.ts` with TypeScript interfaces
  - Updated FAQ component to use centralized data source
  - Added FAQ quick access section to chat window with clickable questions
  - Implemented FAQ click handler that adds both question and answer to chat history
  - Enhanced chat welcome message to guide users to FAQ functionality
  - Increased chat window height to accommodate new FAQ section
- **Components Modified**:
  - `lib/faq-data.ts` - New shared FAQ data structure with categories and tags
  - `components/faq.tsx` - Updated to use shared data from lib/faq-data.ts
  - `components/floating-chat.tsx` - Major enhancement with FAQ integration
- **UI/UX Improvements**:
  - Added HelpCircle icon and visual indicators for FAQ section
  - Implemented hover animations for FAQ question buttons
  - Responsive FAQ section with scrollable area for better mobile experience
  - Consistent styling with blue theme for FAQ elements

### Version 1.0.5
**Date**: Previous Release  
**Changes**:
- **Navigation Enhancement**: Added smooth scrolling navigation functionality
  - "Home" button scrolls to hero section (#home)
  - "Features" button scrolls to features section (#features)  
  - "About" button scrolls to analysis section (#about)
- **Components Modified**:
  - `components/header.tsx` - Added scroll navigation with handleNavClick function
  - `components/hero.tsx` - Added id="home"
  - `components/features.tsx` - Added id="features"
  - `components/analysis.tsx` - Added id="about"
- **Navigation Update**: Removed "Sign Up" button from navigation bar in both desktop and mobile views
- **Component**: `components/header.tsx` - Removed "Sign Up" from navItems array
- **Content Removal**: Removed "TRUSTED BY" section from hero component including company names (Bloomberg, ET, Business Standard, Economic Times)
- **Component**: `components/hero.tsx` - Removed trustBadges array and entire Trust Badges section
- **Content Removal**: Completely removed the "Have More Questions?" support section from the website
- **Files Modified**: 
  - `app/page.tsx` - Removed Support component import and usage
  - `components/support.tsx` - Deleted entire support component file
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