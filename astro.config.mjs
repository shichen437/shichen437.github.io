// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://gowlive.github.io",
  base: "/",
  output: "static",
  integrations: [
    starlight({
      title: "Gowlive",
      favicon: "./src/assets/favicon.ico",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Gowlive logo",
      },
      pagination: false,
      pagefind: false,
      defaultLocale: "root",
      locales: {
        en: {
          label: "English",
          lang: "en",
        },
        root: {
          label: "简体中文",
          lang: "zh-CN",
        },
      },
      customCss: ["./src/styles/custom.css"],
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/shichen437/Gowlive",
        },
        {
          icon: "telegram",
          label: "Telegram",
          href: "https://t.me/+ApCMUBMvNa1lNGM1",
        },
      ],
    }),
  ],
});
