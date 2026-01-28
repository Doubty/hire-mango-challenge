# Workspace Account Creation Wizard

A modern, multi-step wizard application built with Next.js 16, Material UI, and TypeScript for creating and configuring workspace accounts. This project demonstrates best practices in React development, state management, form validation, and user experience design.

## 🚀 Features

- **Multi-step Wizard Interface**: Intuitive 5-step process for account creation
- **Form Validation**: Real-time validation using React Hook Form and Zod
- **State Management**: Zustand store with localStorage persistence
- **Smooth Animations**: Framer Motion transitions between steps
- **Responsive Design**: Mobile-first approach with Material UI breakpoints
- **Type Safety**: Full TypeScript implementation
- **Modern UI**: Material UI components with custom theming

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd hire-mango-challenge
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## 🎯 Wizard Steps

### Step 1: Personal Information
- Full name
- Email address
- Password with strength indicator
- Password confirmation

### Step 2: Workspace Details
- Workspace name
- Auto-generated workspace URL (slug)
- Optional description
- Workspace type (Personal, Team, Enterprise)

### Step 3: Preferences
- Theme preference (Light, Dark, System)
- Language selection
- Notification settings (Email, Push, SMS)
- Timezone selection

### Step 4: Review
- Summary of all entered information
- Edit buttons for each section
- Final submission

### Step 5: Success
- Success animation
- Workspace details display
- Countdown timer for auto-redirect
- Manual redirect button

## 🛠️ Technologies Used

- **Next.js 16**: React framework with App Router
- **Material UI (MUI)**: Component library
- **TypeScript**: Type safety
- **Zustand**: State management
- **React Hook Form**: Form handling
- **Zod**: Schema validation
- **Framer Motion**: Animations
- **Emotion**: CSS-in-JS for MUI

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 🎯 Key Features Implementation

### State Persistence
The wizard state is automatically saved to localStorage, so users can refresh the page without losing progress.

### Form Validation
Each step validates its data before allowing progression. Validation errors are displayed in real-time.

### Auto-slug Generation
The workspace URL slug is automatically generated from the workspace name, with manual editing capability.

### Success Flow
After submission, users see a success screen with a countdown timer that automatically redirects to the success page.


