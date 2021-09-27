import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve("src"),
      "@a": path.resolve("src/a"),
      "@c": path.resolve("src/components"),
      "@l": path.resolve("src/lib"),
    },
  },
  server: {
    host: "0.0.0.0",
  },
});
