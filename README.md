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

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
app/
├── components/
│   ├── Header/
│   │   ├── Header.tsx          # Main header component
│   │   └── HeaderLogo.tsx      # Logo component
│   ├── Footer/
│   │   └── Footer.tsx          # Footer component
│   └── Layout/
│       └── MainLayout.tsx      # Layout wrapper with Header/Footer
├── wizard/
│   ├── page.tsx                # Main wizard page
│   └── components/
│       ├── WizardStepper/      # Progress indicator
│       ├── WizardNavigation/   # Next/Back buttons
│       ├── WizardContainer/    # Animation wrapper
│       └── steps/              # Individual step components
│           ├── StepPersonalInfo/
│           ├── StepWorkspaceDetails/
│           ├── StepPreferences/
│           ├── StepReview/
│           └── StepSuccess/
├── success/
│   └── page.tsx                # Success page
├── store/
│   └── wizardStore.ts          # Zustand store
├── types/
│   └── wizard.ts               # TypeScript types and Zod schemas
├── layout.tsx                  # Root layout with ThemeProvider
└── page.tsx                    # Home page
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

## 🎨 Design Decisions

### Component Architecture
- **Single Responsibility**: Each component has one clear purpose
- **Composition over Configuration**: Small, reusable components
- **Separation of Concerns**: UI, logic, and validation are separated
- **Type Safety**: All props and data structures are typed

### State Management
- **Zustand Store**: Centralized state with localStorage persistence
- **Optimized Selectors**: Prevent unnecessary re-renders
- **Type-safe Actions**: All store actions are typed

### Form Validation
- **Zod Schemas**: Type-safe validation schemas
- **React Hook Form**: Efficient form handling
- **Real-time Validation**: Immediate feedback to users
- **Password Strength**: Visual indicator for password quality

### Responsive Design
- **Mobile-first**: Designed for mobile, enhanced for desktop
- **Breakpoints**: Material UI breakpoints (xs, sm, md, lg, xl)
- **Adaptive Components**: Stepper, forms, and navigation adapt to screen size
- **Touch-friendly**: Appropriate sizing for mobile interactions

### Animations
- **Framer Motion**: Smooth transitions between steps
- **Subtle Effects**: Enhance UX without being distracting
- **Performance**: Optimized animations for 60fps

## 📝 Code Quality

- **TypeScript Strict Mode**: Full type safety
- **Functional Components**: Modern React patterns
- **Clean Code**: Descriptive names, small functions
- **Accessibility**: ARIA labels, keyboard navigation
- **Error Handling**: Proper error states and boundaries

## 🚀 Performance Optimizations

- **Code Splitting**: Lazy loading of step components
- **Memoization**: React.memo for expensive components
- **Optimized Re-renders**: Zustand selectors prevent unnecessary updates
- **Efficient Animations**: Hardware-accelerated CSS transforms

## 🔧 Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run start`: Start production server
- `npm run lint`: Run ESLint

## 📱 Responsive Breakpoints

- **xs**: 0px (Mobile)
- **sm**: 600px (Tablet)
- **md**: 900px (Small Desktop)
- **lg**: 1200px (Desktop)
- **xl**: 1536px (Large Desktop)

## 🎯 Key Features Implementation

### State Persistence
The wizard state is automatically saved to localStorage, so users can refresh the page without losing progress.

### Form Validation
Each step validates its data before allowing progression. Validation errors are displayed in real-time.

### Auto-slug Generation
The workspace URL slug is automatically generated from the workspace name, with manual editing capability.

### Success Flow
After submission, users see a success screen with a countdown timer that automatically redirects to the success page.

## 🔮 Future Improvements

- [ ] Add dark mode toggle
- [ ] Implement actual API integration
- [ ] Add more workspace customization options
- [ ] Implement workspace templates
- [ ] Add user authentication
- [ ] Add workspace preview before creation
- [ ] Implement workspace settings page
- [ ] Add internationalization (i18n)
- [ ] Add unit and integration tests
- [ ] Add E2E tests with Playwright/Cypress

## 📄 License

This project is part of a technical challenge.

## 👤 Author

Built as a technical challenge demonstration.

---

**Note**: This is a demonstration project. In a production environment, you would:
- Connect to a real backend API
- Implement proper authentication
- Add error handling and retry logic
- Implement proper loading states
- Add comprehensive testing
- Set up CI/CD pipelines
- Add monitoring and analytics
