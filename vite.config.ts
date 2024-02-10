import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [react(), svgLoader({ defaultImport: "url" })],
  base: "/portfolio/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
