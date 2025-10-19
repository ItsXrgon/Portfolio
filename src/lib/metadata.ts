import { Metadata } from "next";

export const metadata: Metadata = {
	// Basic metadata
	title: "itsXrgon",
	description: "Browser OS to host my portfolio and other random stuff",
	keywords: ["portfolio", "desktop environment", "itsXrgon"],
	creator: "itsXrgon",
	authors: [{ name: "itsXrgon", url: "https://github.com/itsXrgon" }],
	publisher: "itsXrgon",
	applicationName: "itsXrgon",
	generator: "Next.js",
	category: "Portfolio",
	classification: "Personal Website",

	// SEO and crawling
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	referrer: "origin-when-cross-origin",

	// Open Graph (Facebook, LinkedIn, etc.)
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://xrgon.com",
		title: "itsXrgon - Portfolio",
		description:
			"A unique desktop environment portfolio showcasing my projects and skills",
		siteName: "itsXrgon Portfolio",
		images: [
			{
				url: "/og-image.png",
				width: 1200,
				height: 630,
				alt: "itsXrgon Portfolio Preview",
				type: "image/png",
			},
		],
	},

	// Twitter Card
	twitter: {
		card: "summary_large_image",
		title: "itsXrgon - Portfolio",
		description:
			"A unique desktop environment portfolio showcasing my projects and skills",
		images: ["/twitter-image.png"],
		creator: "@itsXrgon",
		site: "@itsXrgon",
	},

	// Icons
	icons: {
		icon: [
			{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
			{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
			{ url: "/favicon.ico", sizes: "any" },
		],
		apple: [
			{
				url: "/apple-touch-icon.png",
				sizes: "180x180",
				type: "image/png",
			},
		],
		other: [
			{
				url: "/android-chrome-192x192.png",
				sizes: "192x192",
				type: "image/png",
			},
			{
				url: "/android-chrome-512x512.png",
				sizes: "512x512",
				type: "image/png",
			},
		],
	},

	// Web App Manifest
	manifest: "/site.webmanifest",
};
