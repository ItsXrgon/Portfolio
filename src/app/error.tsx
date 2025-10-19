"use client";

import * as Sentry from "@sentry/browser";
import { useEffect } from "react";

export default function Error({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		// Log the error to Sentry
		Sentry.captureException(error);
	}, [error]);

	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				padding: "2rem",
				fontFamily: "system-ui, sans-serif",
			}}
		>
			<h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
				Something went wrong!
			</h1>
			<p style={{ marginBottom: "2rem", color: "#666" }}>
				{error.message || "An unexpected error occurred"}
			</p>
			<button
				onClick={reset}
				style={{
					padding: "0.75rem 1.5rem",
					fontSize: "1rem",
					backgroundColor: "#0070f3",
					color: "white",
					border: "none",
					borderRadius: "0.5rem",
					cursor: "pointer",
				}}
			>
				Try again
			</button>
		</div>
	);
}
