/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "./dist", // Changes the build output directory to `./dist/`.
	distDir: "./dist", // Changes the build output directory to `./dist/`
	images: {
		remotePatterns: [
			{
				hostname: "avatars.githubusercontent.com",
			},
		],
	},
};

export default nextConfig;
