import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { Cairo } from "next/font/google";
import React from "react";



import ConfigProvider from "@/providers/ConfigProvider";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import ReduxProvider from "@/providers/ReduxProvider";



import "../styles/global.css";


//👇 Configure our font object
const cairo = Cairo({
	subsets: ["latin", "arabic", "latin-ext"],
});

export const metadata: Metadata = {
	title: "itsXrgon",
	description: "Browser OS to host my portfolio and other random stuff",
	creator: "itsXrgon",
	applicationName: "itsXrgon",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className={cairo.className}>
			<body>
				<div id="root">
					<Analytics />
					<SpeedInsights />
					<React.StrictMode>
						<ReactQueryProvider>
							<ReduxProvider>
								<ConfigProvider>{children}</ConfigProvider>
							</ReduxProvider>
						</ReactQueryProvider>
					</React.StrictMode>
				</div>
			</body>
		</html>
	);
}