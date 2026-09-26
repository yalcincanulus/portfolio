// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	compressHTML: true,
	build: {
		inlineStylesheets: "auto",
	},
	fonts: [
		{
			provider: fontProviders.google(),
			name: "Geist",
			cssVariable: "--font-sans",
			weights: ["400 700"],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["system-ui", "sans-serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Newsreader",
			cssVariable: "--font-serif",
			weights: ["400 500"],
			styles: ["normal", "italic"],
			subsets: ["latin", "latin-ext"],
			fallbacks: ["Georgia", "serif"],
		},
		{
			provider: fontProviders.google(),
			name: "Geist Mono",
			cssVariable: "--font-mono",
			weights: [400, 500],
			subsets: ["latin"],
			fallbacks: ["ui-monospace", "monospace"],
		},
	],
});
