import * as Sentry from "@sentry/browser";

Sentry.init({
	dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

	// Release tracking
	release: process.env.NEXT_PUBLIC_SENTRY_RELEASE || undefined,
	environment: process.env.NEXT_PUBLIC_SENTRY_ENVIRONMENT || "production",

	// Performance monitoring
	tracesSampleRate: 1.0,

	// Session replay
	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
	integrations: [
		Sentry.replayIntegration({
			maskAllText: false,
			blockAllMedia: false,
		}),
	],

	// Additional context
	initialScope: {
		tags: {
			source: "browser",
		},
	},

	debug: false,
});
