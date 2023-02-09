import { defineConfig } from "astro/config";
// Load env in astro config: https://docs.astro.build/en/guides/configuring-astro/#environment-variables
import { loadEnv } from "vite";
const { PUBLIC_URLBASE } = loadEnv(import.meta.env.MODE, process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  site: "https://riceball-tw.github.io",
  base: PUBLIC_URLBASE,
});
