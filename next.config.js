/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
	webpack: (config) => {
		// Handle SVG files as static assets
		config.module.rules.push({
			test: /\.svg$/,
			type: "asset/resource",
		});
		return config;
	},
};

export default nextConfig;
