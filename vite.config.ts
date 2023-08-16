import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';
// import eslint from 'vite-plugin-eslint';
import { checker } from 'vite-plugin-checker';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/battletech-tools',
  server: {
    port: 3000,
  },
  build: {
    outDir: 'build',
  },
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    // eslint(),
    checker({
      typescript: true
    }),
  ],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
