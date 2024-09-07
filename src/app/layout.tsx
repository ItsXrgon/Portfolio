import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import { Cairo } from "next/font/google";
import React from "react";

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
					<React.StrictMode>
						<ReactQueryProvider>
							<ReduxProvider>{children}</ReduxProvider>
						</ReactQueryProvider>
					</React.StrictMode>
				</div>
			</body>
		</html>
	);
}
