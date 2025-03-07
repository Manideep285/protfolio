
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById("root");

if (rootElement) {
  // Check if the app is being hydrated (SSR) or created fresh (CSR)
  if (rootElement.hasChildNodes()) {
    // Server-side rendered content exists, hydrate it
    hydrateRoot(
      rootElement, 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  } else {
    // No server-rendered content, create a new root
    createRoot(rootElement).render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}
