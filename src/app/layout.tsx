import { Metadata } from "next";
import { Cairo } from "next/font/google";
import React from "react";

import ReactQueryProvider from "@/utils/providers/ReactQueryProvider";
import ReduxProvider from "@/utils/providers/ReduxProvider";

import "../styles/global.css";

//👇 Configure our font object
const cairo = Cairo({
	subsets: ["latin"],
	display: "swap",
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
			<head>
				<title>Xrgon Portfolio</title>
			</head>
			<body>
				<div id="root">
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
