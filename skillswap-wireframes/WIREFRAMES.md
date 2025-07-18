# SkillSwap Wireframes

Interactive wireframes for the SkillSwap peer-to-peer learning platform.

## Overview

SkillSwap is a platform where users can exchange skills through 1-on-1 learning sessions. Instead of paying money, users trade time - teaching what they know in exchange for learning something new.

## Core User Flow

The wireframes demonstrate the three essential screens that make up the core user journey:

### 1. Profile Setup (`/profile-setup`)
**Purpose**: Onboard new users and help them set up their teaching and learning profiles.

**Key Features**:
- Profile photo upload area
- Basic information form (name, bio)
- Interactive skill selection for teaching
- Learning interests selection
- Skill suggestions with add/remove functionality
- Save draft and complete profile options

**User Experience**:
- Clean, step-by-step interface
- Visual skill tags with easy add/remove
- Color-coded skills (blue for teaching, green for learning)
- Clear progress indication

### 2. Skill Browse (`/browse`)
**Purpose**: Help users discover and connect with potential teachers.

**Key Features**:
- Search functionality with filters
- Category-based filtering
- Teacher cards with comprehensive information:
  - Profile photo placeholder
  - Teacher name and skill
  - Rating and review count
  - Availability status
  - Time zone information
  - Bio and skill tags
  - Pricing information (time exchange)
- Call-to-action buttons (View Profile, Book Session)
- Load more functionality

**User Experience**:
- Grid-based layout for easy scanning
- Rich teacher information for informed decisions
- Clear availability indicators
- Intuitive navigation to booking flow

### 3. Booking Flow (`/booking`)
**Purpose**: Facilitate session scheduling and booking between users.

**Key Features**:
- Teacher information sidebar (sticky)
- Session type selection (Video/Chat)
- Interactive calendar for date selection
- Time slot selection grid
- Message to teacher functionality
- Comprehensive booking summary
- Form validation (disabled submit until required fields filled)

**User Experience**:
- Two-column layout with persistent teacher info
- Progressive disclosure of booking options
- Clear visual feedback for selections
- Summary section for confirmation before booking

## Navigation & Flow

The wireframes include a sticky navigation header that allows users to jump between any screen. The intended user flow is:

1. **Home** → **Profile Setup** (Get started)
2. **Profile Setup** → **Browse Skills** (Complete profile)
3. **Browse Skills** → **Booking Flow** (Book session)
4. **Booking Flow** → **Browse Skills** (Back to browse)

## Technical Implementation

- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS for consistent design system
- **Routing**: React Router for seamless navigation
- **Icons**: Lucide React for modern, consistent iconography
- **State Management**: React hooks for component state
- **Responsive Design**: Mobile-first approach with responsive layouts

## Key Design Decisions

1. **Time-based Economy**: Clear emphasis on "1 hour teaching = 1 hour learning" throughout
2. **Trust Building**: Ratings, reviews, and response times prominently displayed
3. **Visual Hierarchy**: Consistent card-based layouts and clear typography
4. **Interactive Elements**: Hover states, selections, and feedback for all interactions
5. **Accessibility**: Semantic HTML structure and keyboard navigation support

## Running the Wireframes

```bash
cd skillswap-wireframes
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the wireframes in your browser.

## Wireframe Features Demonstrated

- **Interactive State Management**: Skills can be added/removed, dates/times selected
- **Responsive Design**: Works on mobile and desktop
- **Navigation Flow**: Seamless routing between screens
- **Visual Feedback**: Hover states, active selections, form validation
- **Realistic Data**: Mock teachers, skills, and availability for authentic feel
- **Complete User Journey**: From signup to booking a session

These wireframes provide a comprehensive foundation for developing the full SkillSwap platform, demonstrating both the user experience flow and technical implementation approach.