/** @type {import('next').NextConfig} */
const nextConfig = {
	distDir: "./dist", // Changes the build output directory to `./dist/`.images: {
	images: {
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
