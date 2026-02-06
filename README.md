# Tahwul Dashboard - Tailwind (Vite + React)

This is a small demo dashboard app built with Vite, React, Tailwind CSS, and Recharts.

Quick start:
1. npm install
2. npm run dev
3. Open http://localhost:5173

# How the Project Is Built

+ Built using Vite for fast development and optimized builds
+ Uses React 18 with React Router for page navigation
+ Styled with Tailwind CSS and a custom brand theme
+ Uses Recharts for charts and analytics
+ Icons provided by HugeIcons
+ PostCSS + Autoprefixer for browser compatibility

# Assumptions About the App

+ This is a dashboard / admin panel application
+ It supports multiple pages (Dashboard, Reports, Tasks, etc.)
+ The design follows a brand identity (Tahwul colors & font)
+ Built to be scalable and modular using feature-based folders
+ Shared UI components are reused across the app
+ Designed to work well on desktop and mobile
+ Prepared for future API integration and authentication

# Improvements for the Future

## Code & Architecture

+ Add hooks/ for custom React hooks
+ Add services/ for API calls
+ Add global constants and config files
+ Use state management Redux

## Performance & UX

+ Lazy load pages with React.lazy()
+ Add loading skeletons and error boundaries
+ Optimize images and bundle size
+ Add toast notifications