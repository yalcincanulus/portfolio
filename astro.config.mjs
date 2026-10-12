// @ts-check
import sitemap from "@astrojs/sitemap";
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	site: "https://ulus.uk",
	integrations: [sitemap()],
	compressHTML: true,
	build: {
		// The site's CSS is small; inlining it removes render-blocking requests
		inlineStylesheets: "always",
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Geist Mono",
			cssVariable: "--font-mono",
			weights: [400, 500],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["ui-monospace", "monospace"],
		},
	],
});
