import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/",  // Fixes incorrect script paths
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000,
  },
});
