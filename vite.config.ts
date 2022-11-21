import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      src: resolve(__dirname, "./src/"),
      "@components": resolve(__dirname, "./src/components/"),
    },
  },
  server: {
    host: true,
    port: 3000,
  },
});
