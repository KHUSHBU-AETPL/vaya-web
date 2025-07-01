# Vaya Web Component Architecture

This document outlines the component architecture and organization for the Vaya web application.

## Directory Structure

```
src/
├── components/
│   ├── common/         # Reusable UI elements
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Container/
│   │   ├── Dropdown/
│   │   ├── Icon/
│   │   ├── Input/
│   │   ├── LoadingSpinner/
│   │   └── ScrollToTopButton/
│   ├── layout/         # Layout components
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   └── Layout.jsx
│   └── sections/       # Reusable page sections
│       ├── Hero/
│       └── FAQ/
├── pages/              # Page components (renamed from screens)
│   └── Home/
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── context/            # React context if needed
└── assets/             # Static assets
```

## Component Categories

### Common Components

These are the smallest, most reusable pieces of UI:

- **Button**: Reusable button with variants (primary, secondary, outline) and sizes (sm, md, lg)
- **Card**: Content container with consistent styling
- **Container**: Layout component for consistent spacing and width constraints
- **Dropdown**: Reusable dropdown menu component
- **Icon**: Wrapper for consistent icon usage (using react-icons/fi)
- **Input**: Form input with consistent styling and validation states
- **LoadingSpinner**: Loading indicator
- **ScrollToTopButton**: Button that appears when scrolling to return to top

### Layout Components

These define the overall structure of the application:

- **Layout**: Main layout wrapper with Navbar, Footer, and content area
- **Navbar**: Top navigation bar
- **Footer**: Page footer

### Section Components

These are larger, reusable sections that might appear on multiple pages:

- **Hero**: Customizable hero section for page headers
- **FAQ**: Reusable FAQ section with accordion functionality

## Usage Guidelines

### Importing Components

Use the index.js files for cleaner imports:

```jsx
// Good
import { Button, Card } from '../components/common';

// Avoid
import Button from '../components/common/Button/Button';
```

### Component Props

All components accept standard props like `className` for easy customization:

```jsx
<Button 
  variant="primary" 
  size="md" 
  className="my-custom-class"
>
  Click Me
</Button>
```

### Design Tokens

Use the design tokens defined in `tailwind.config.js` for consistent styling:

```jsx
// Good
<div className="text-primary-orange bg-primary-beige">

// Avoid
<div className="text-[#FF5A00] bg-[#FFF8F2]">
```

## Future Development

When adding new components:

1. Place them in the appropriate directory based on their purpose
2. Create an index.js file for cleaner imports
3. Update the relevant barrel exports (index.js files in parent directories)
4. Use existing design tokens and components when possible
5. Document props with PropTypes
6. Follow the established naming conventions

## Tailwind Configuration

The `tailwind.config.js` file defines our design tokens including:

- Color palette
- Typography
- Spacing
- Shadows
- Border radius

Always reference these tokens in your components rather than using arbitrary values.
