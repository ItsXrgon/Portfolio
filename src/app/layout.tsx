import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Cairo } from "next/font/google";
import Head from "next/head";
import React from "react";

import Taskbar from "@/app/_components/Taskbar/Taskbar";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";

import "../styles/globals.css";
import Desktop from "./_components/Desktop/Desktop";

const cairo = Cairo({
	subsets: ["latin", "arabic", "latin-ext"],
});

export const metadata: Metadata = {
	title: "itsXrgon",
	description: "Browser OS to host my portfolio and other random stuff",
	creator: "itsXrgon",
	applicationName: "itsXrgon",
};

export default function RootLayout() {
	return (
		<html lang="en" className={cairo.className}>
			<Head>
				<script
					src="https://tinylytics.app/embed/bXzCJ2LkasASM6jD1SBg.js?kudos&hits&webring&countries&uptime"
					defer
				/>
				{/* favicon */}
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="icon" href="/favicon.ico" />
				{/* Android Chrome */}
				<link
					rel="icon"
					type="image/png"
					sizes="192x192"
					href="/android-chrome-192x192.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="512x512"
					href="/android-chrome-512x512.png"
				/>
			</Head>
			<body>
				<div id="root">
					<Analytics />
					<SpeedInsights />
					<React.StrictMode>
						<ReactQueryProvider>
							<ReduxProvider>
								<main
									style={{
										height: "calc(100vh - 4rem)",
									}}
								>
									<Desktop />
								</main>
								<Taskbar />
							</ReduxProvider>
						</ReactQueryProvider>
					</React.StrictMode>
				</div>
			</body>
		</html>
	);
}
