import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cairo } from "next/font/google";
import Head from "next/head";
import React, { ReactNode } from "react";

import Taskbar from "@/app/_components/Taskbar/Taskbar";
import { metadata } from "@/lib/metadata";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";

import "../sentry.client.config";
import "../styles/globals.css";

const cairo = Cairo({
	subsets: ["latin", "arabic", "latin-ext"],
});

export { metadata };

export default function RootLayout({ children }: { children: ReactNode }) {
	return (
		<html lang="en" className={cairo.className}>
			<Head>
				<script
					src="https://tinylytics.app/embed/bXzCJ2LkasASM6jD1SBg.js?kudos&hits&webring&countries&uptime"
					defer
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
									{children}
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
