import path from "node:path";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import svgLoader from "vite-svg-loader";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve("src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      external: ["vue", /\.css/],
      input: path.resolve(__dirname, "src/index.ts"),
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          dir: "./dist/es",
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          preserveModulesRoot: "src",
          exports: "named",
          dir: "./dist/lib",
        },
      ],
    },
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "vue-pdf",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    svgLoader({
      svgo: false,
    }),
    dts({
      entryRoot: "src",
      outDir: "dist/types",
    }),
  ],
});
