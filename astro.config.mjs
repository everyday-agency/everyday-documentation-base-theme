import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
	site: "https://docs.everyday.agency/",

	integrations: [
		starlight({
			title: "Elementor Widgets Documentation",
			social: {
				github: "https://github.com/withastro/starlight",
			},
			sidebar: [
				{
					label: "Getting Started",
					autogenerate: { directory: "getting-started" },
				},
				{
					label: "Utilities",
					autogenerate: { directory: "utilities" },
				},
				{
					label: "Widgets",
					autogenerate: { directory: "widgets" },
				},
				{
					label: "Header",
					autogenerate: { directory: "header" },
				},
				{
					label: "Pages",
					autogenerate: { directory: "pages" },
				},
			],
		}),
	],
});
