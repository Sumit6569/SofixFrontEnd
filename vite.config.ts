import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  server: {
    host: true,        // works on local + cloud
    port: 5173,        // standard Vite port
  },

  preview: {
    host: true,
    port: 4173,
  },

  build: {
    outDir: "dist",
    sourcemap: false,
  },
}));
