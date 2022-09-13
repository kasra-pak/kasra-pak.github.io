import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Sets firefox as default browser.
process.env.BROWSER = 'firefox';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Starting server will open the browser automatically.
  server: {
    open: '/',
  },
});
