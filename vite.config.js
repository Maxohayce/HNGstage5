import { fileURLToPath } from "url";
import { resolve, dirname } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Get the directory name of the current module
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    "process.env": {},
  },
  build: {
    emptyOutDir: true,
    outDir: resolve(__dirname, "dist"),
    lib: {
      formats: ["iife"],
      entry: resolve(__dirname, "./content-script/index.tsx"),
      name: "Vite/React/TailwindCSS Plugin",
    },
    rollupOptions: {
      output: {
        entryFileNames: "index.global.js",
        extend: true,
      },
    },
  },
});
