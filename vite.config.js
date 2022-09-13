import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// Sets firefox as default browser.
process.env.BROWSER = 'firefox';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Starting server will open the browser automatically.
  server: {
    open: '/',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
