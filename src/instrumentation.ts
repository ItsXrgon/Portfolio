export async function register() {
	if (process.env.NEXT_RUNTIME === "nodejs") {
		await import("./sentry.server.config");
	}

	if (process.env.NEXT_RUNTIME === "edge") {
		await import("./sentry.edge.config");
	}
}

export async function onRequestError(error: Error) {
	// Capture request errors to Sentry
	const { captureException } = await import("@sentry/browser");
	captureException(error);
}
