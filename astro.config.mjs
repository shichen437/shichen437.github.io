// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://shichen437.github.io",
  base: "/",
  output: "static",
  integrations: [
    starlight({
      title: "Gowlive",
      favicon: "/favicon.ico",
      logo: {
        src: "./src/assets/logo.png",
        alt: "Gowlive logo",
      },
      pagination: false,
      pagefind: false,
      markdown: {
        headingLinks: false,
      },
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
      components: {
        Footer: "./src/components/CustomFooter.astro",
      },
      lastUpdated: true,
      sidebar: [
        {
          label: "版本日志",
          translations: {
            en: "Changelog",
          },
          autogenerate: { directory: "Changelog" },
        },
        {
          label: "部署",
          translations: {
            en: "Deploy",
          },
          autogenerate: { directory: "Deploy" },
          collapsed: true,
        },
        {
          label: "常见问题",
          translations: {
            en: "Faq",
          },
          autogenerate: { directory: "Faq" },
          collapsed: true,
        },
      ],
    }),
  ],
});
