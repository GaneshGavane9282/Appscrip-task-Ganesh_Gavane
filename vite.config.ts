import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    svgr()
  ],

  resolve: {
    alias: {
      // "@" maps to the absolute path of your "src" directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
