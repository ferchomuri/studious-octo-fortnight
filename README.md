# Music Artist Dashboard

A premium, responsive dashboard for music artists to track streams, revenue, and fan engagement.

## How to Run the Project Locally

1.  **Prerequisites**: Ensure you have [Node.js](https://nodejs.org/) (version 18 or higher) installed.
2.  **Clone the repository**:
    ```bash
    git clone https://github.com/ferchomuri/studious-octo-fortnight
    cd even-app
    ```
3.  **Install dependencies**:
    ```bash
    npm install
    ```
4.  **Run the development server**:
    ```bash
    npm run dev
    ```
5.  **Access the app**:
    Open [http://localhost:3000](http://localhost:3000) in your browser.

## Technology Choices

- **Next.js 16 (App Router)**: Chosen for its robust routing, server-side rendering capabilities, and React Server Components for optimal performance.
- **TypeScript**: Ensures type safety and improves developer experience, reducing runtime errors.
- **Tailwind CSS**: Enables rapid UI development with utility classes. I utilized CSS variables in `globals.css` to define a consistent, theme-able color palette (Neon/Dark mode).
- **Shadcn UI**: Provides accessible, unstyled components built on Radix UI, which I customized to fit the "premium/glassmorphism" aesthetic.
- **Recharts**: A composable charting library for React, used for its flexibility in creating custom, responsive visualizations (Sales, Streams).
- **Lucide React**: For a consistent and modern icon set.

## Notes

- **Data Source**: Currently, all data is mocked (`src/lib/mock-data.ts`). I assumed a data structure that mirrors what a real music analytics API might return (e.g., daily streams, revenue breakdown).
- **Target Audience**: "Pro-sumer" music artists who value high-fidelity design and quick access to key metrics.
- **Device Usage**: Users will access this on both desktop (studio setting) and mobile (on the go). Therefore, a responsive sidebar and layout were prioritized.
- **Browser Support**: Modern browsers supporting ES6+ and CSS variables.
- **AI**: I used AI to speed up repetitive work while still keeping full ownership of the structure, style, and final decisions.
- **Commit Messages**: I kept commits focused on features or pages so each one represents meaningful progress. I deliberately avoided AI-specific commits, since organizing history around AI usage can create friction for cherry-picking or future maintenance. The commit history reflects outcomes, not how the code was generated.

## Features Implemented

- **Premium UI Design**: "Glassmorphism" aesthetic with dark mode, neon accents, and blur effects.
- **Responsive Sidebar**: A collapsible navigation menu that works seamlessly on desktop and mobile. On mobile, it auto-closes on item selection for better UX.
- **Interactive Charts**:
  - Total Sales (Area Chart)
  - Sales Trends (Bar Chart)
  - Top Releases (List/Chart view)
- **Fans/Audience Page**: Dedicated view for demographic data and follower growth.
- **Animations & Micro-interactions**:
  - Page entrance animations.
  - Tactile button feedback (`active:scale`).
  - Hover effects on cards.
- **Loading & Error States**: Custom `loading.tsx` spinner and `error.tsx` / `not-found.tsx` pages that match the application theme.
- **Accessibility**: Implemented ARIA labels, semantic HTML, and screen-reader optimizations (e.g., hiding decorative icons).

## What I'd Do With More Time

- **Authentication**: Implement NextAuth.js or Clerk to allow multiple artists to log in securely.
- **Backend Integration**: Connect to a real database (PostgreSQL + Prisma) to persist user data instead of using mocks.
- **Unit & Integration Tests**: Expand the test suite (Jest/React Testing Library) to cover user flows like navigation and interaction with charts.
- **Date Range Filtering**: Add controls to charts to filter data by week/month/year.
- **Profile Settings**: Implement the settings page for managing account details and notifications.
- **Performance Optimization**: Implement more aggressive code splitting and image optimization if asset load increases.
- **Navbar**: Implement the navbar to show the current page and the current user.
- **Footer**: Implement the footer to show the current page and the current user.
- **Theme**: Implement the theme to show the current page and the current user.

# Detailed AI usage documentation can be found in README_USING_AI.md.
