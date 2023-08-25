import { defineConfig } from "vite";
// import vueJsx from "@vitejs/plugin-vue-jsx";
// import path from "path";

export default defineConfig({
  // plugins: [vueJsx()],
  resolve: {
    alias: {
      // "@xxx": path.resolve(__dirname, "../packages/xxx"),
    },
  },
});
