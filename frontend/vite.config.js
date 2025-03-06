import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173, host: "0.0.0.0" },
  resolve: {
    alias: {
      "lottie-web": "lottie-web/build/player/lottie_light", // Force ES module version
    },
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase chunk size warning limit
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/lottie-react")) {
            return "lottie"; // Separate Lottie to avoid bundling issues
          }
          if (id.includes("node_modules")) {
            return "vendor"; // General vendor chunking
          }
        },
      },
    },
  },
});
