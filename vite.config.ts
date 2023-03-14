import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';
import mdx from '@mdx-js/rollup';
import * as path from 'path';

// Sets firefox as default browser.
process.env.BROWSER = 'firefox';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx(/* jsxImportSource: …, otherOptions… */) },
    svgr(),
    react(),
    checker({
      typescript: true,
    }),
  ],
  // Starting server will open the browser automatically.
  server: {
    open: '/',
  },
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
