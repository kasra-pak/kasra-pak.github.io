import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import { ThemeToggleProvider, useThemeToggle } from '@/contexts/ThemeToggle';

const container = document.getElementById('root');

if (container !== null) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <ThemeToggleProvider>
        <App />
      </ThemeToggleProvider>
    </React.StrictMode>,
  );
}
