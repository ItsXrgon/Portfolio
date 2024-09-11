/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	distDir: "./dist",
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
