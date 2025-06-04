// Import required dependencies
import * as React from 'react';
import { createRoot } from 'react-dom/client'  // React 18's new root API
import App from './App.tsx'  // Main application component
import './index.css'  // Global styles

// Get the root DOM element where the app will be mounted
const rootElement = document.getElementById("root");

// Create a root and render the App component
// The exclamation mark (!) tells TypeScript that we're certain the element exists
createRoot(rootElement!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
