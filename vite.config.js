import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config: the React plugin lets Vite understand JSX.
// The build puts the JavaScript in a scripts/ folder to match the course rules.
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        entryFileNames: "scripts/[name]-[hash].js",
        chunkFileNames: "scripts/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
