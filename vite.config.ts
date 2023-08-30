import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./example",
  build: {
    rollupOptions: {
      external: ["vue", "naive-ui", /\.css/],
      input: ["src/index.ts"],
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
      entry: "src/index.ts",
      name: "vue-pdf",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: "src",
      outDir: "./dist/types",
    }),
  ],
});
