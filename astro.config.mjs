import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/edge";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";
import million from 'million/compiler';


// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [sitemap(), prefetch(), react(), tailwind()],
  vite: {
    plugins: [million.vite({ mode: 'react', server: true, auto: true })]
  }
});