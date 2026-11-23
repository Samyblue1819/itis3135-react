import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite adds its own <script> tag to <head> when it builds the site.
// The course rules want the Accumulus (lint.page) script to be last in <head>,
// so this small plugin moves it to the end of <head> after Vite is done.
function accumulusLastInHead() {
  const accumulusTag = '<script src="https://lint.page/kit/4d0fe3.js" crossorigin="anonymous"></script>';
  return {
    name: "accumulus-last-in-head",
    transformIndexHtml: {
      order: "post",
      handler(html) {
        return html.replace(accumulusTag, "").replace("</head>", "  " + accumulusTag + "\n</head>");
      },
    },
  };
}

// Vite config: the React plugin lets Vite understand JSX.
// target es2019 turns newer syntax (like ?.) into older JavaScript the course linter can read.
// The build puts the JavaScript in a scripts/ folder to match the course rules.
export default defineConfig({
  plugins: [react(), accumulusLastInHead()],
  build: {
    target: "es2019",
    rollupOptions: {
      output: {
        entryFileNames: "scripts/[name]-[hash].js",
        chunkFileNames: "scripts/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
      },
    },
  },
});
