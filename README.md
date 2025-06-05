1. Warehouses

This project is a React Single Page Application (SPA) built using Vite. It uses Atomic Design Architecture and integrates Redux Toolkit for state management, React Router v7 for routing, Axios for API requests, and SCSS for modular styles. The app fetches and displays user data in both Card and List views, with sorting and view persistence features.

2. Table of Contents

Project Overview
Project Structure
Getting Started
Customizing Configuration
Project Specifics
Contributing
License

3. Project Overview

The project utilizes the following technologies and libraries
React 19 – Library for building interactive user interfaces
Vite – Lightning-fast build tool for modern web projects
Redux Toolkit – Efficient and standardized state management
React Router DOM v7 – For SPA routing/navigation
Axios – For making HTTP API requests
SCSS – Preprocessor used for modular, scalable styles
TypeScript (optional) – Type safety and developer tooling

4. Project Structure
   The project was developed with atomic architecture

/src
│
├── assets/ Static files (images, icons, fonts)
│
├── components/ Based on Atomic Design
│ ├── atoms/ Smallest reusable components (Button, Input)
│ ├── molecules/ Groups of atoms (SearchBar, CardHeader)
│ ├── organisms/ Sections made from molecules (Sidebar, Navbar)
│ ├── templates/ Page layouts (DashboardLayout)
│ └── pages/ Complete pages (DashboardPage, UserListPage)
│
├── hooks/ Custom React hooks
│
├── contexts/ React Contexts for global logic
│
├── services/ Axios configuration and API clients
│ └── api.js
│
├── store/ Redux store and feature slices
│ └── slices/
│
├── utils/ Helper functions and utilities
│
├── routes/ App routes and navigation setup
│ └── AppRoutes.jsx
│
├── styles/ Global SCSS files
│ ├── base.scss
│ └── theme.scss
│
├── config/ App configuration (env variables/constants)
│
├── tests/ Unit and integration tests (if any)
│
├── App.jsx Root App component
├── main.jsx App entry point
└── index.html HTML template

5. Getting Started

Install dependencies:
npm install

Create a .env file and set the API base URL:
VITE_BASE_API_URL=https://jsonplaceholder.typicode.com

Start the development server:
npm run dev
App runs at http://localhost:5173

6. Customizing Configuration
   The main configuration file is vite.config.js.
   You can modify build options, plugins, path aliases, and environment variables from this file.
   Environment-specific configs can be added in .env, .env.local, etc.

7. Project Specifics
   7.1 API Requests
   API requests are made using Axios and defined base url in the services/api.js file.
   It can be extended with interceptors, authentication headers, and error handlers.

   7.2 State Management
   Global state is handled using Redux Toolkit.
   Each feature has its own slice in store/slices/.
   State is accessed using custom hooks useAppSelector and updated using useAppDispatch.

   7.3 View Modes
   Card View and List View options are available

   The selected view is stored in localStorage

   7.4 Sorting
   Users can sort the list by name

   Sort direction can be toggled (A–Z or Z–A)

   7.5 Styles
   SCSS modules and global styles are used for styling.
   Global styles live in the styles/ folder and are imported into main components.
