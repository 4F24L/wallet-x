import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { port: 5173, host: "0.0.0.0" },
  define: {
    "import.meta.env.VITE_API_BASE_URL": process.env.VITE_API_BASE_URL
  },
});
