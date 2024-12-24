import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { resolve } from "path";

export default defineConfig({
  base: "/countries/",
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@app": resolve(__dirname, "src/app"),
      "@shared": resolve(__dirname, "src/shared"),
      "@CountryFind": resolve(__dirname, "src/features/CountryFind"),
      "@Search": resolve(__dirname, "src/features/Search"),
    },
  },
});
