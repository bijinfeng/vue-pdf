import path from "node:path";

import vueJsx from "@vitejs/plugin-vue-jsx";
import svgLoader from "vite-svg-loader";
import { defineConfig } from "vitepress";

const isProd = process.env.NODE_ENV === "production";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vue Pdf",
  description: "A Vue Pdf Viewer",
  base: isProd ? "/vue-pdf/" : "/",
  vite: {
    resolve: {
      alias: {
        "@pingtou/vue-pdf": path.resolve("src"),
        "@": path.resolve("src"),
      },
    },
    plugins: [
      vueJsx(),
      svgLoader({
        svgo: false,
      }),
    ],
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
