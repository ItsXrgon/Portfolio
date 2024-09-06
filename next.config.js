/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export", // Outputs a Single-Page Application (SPA).
	distDir: "./dist", // Changes the build output directory to `./dist/`.images: {
	images: {
		unoptimized: true,
		// loader: "akamai",
		// path: "/",
		// remotePatterns: [
		// 	{
		// 		protocol: "https",
		// 		hostname: "avatars.githubusercontent.com",
		// 		port: "",
		// 		pathname: "/u/",
		// 	},
		// ],
	},
};

export default nextConfig;
