import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
	server: {
		DATABASE_URL: z.string().url(),
		POSTGRES_URL_NON_POOLING: z.string().url(),
		POSTGRES_USER: z.string(),
		POSTGRES_HOST: z.string(),
		POSTGRES_PASSWORD: z.string(),
		POSTGRES_DATABASE: z.string(),
		POSTGRES_URL_NO_SSL: z.string().url(),
		POSTGRES_PRISMA_URL: z.string().url(),
		VERCEL_URL: z.string(),
		PORT: z.string(),
		NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
	},
	client: {
		NEXT_PUBLIC_NODE_ENV: z
			.enum(["development", "test", "production"])
			.default("development"),
		NEXT_PUBLIC_VERCEL_URL: z.string().optional(),
		NEXT_PUBLIC_PORT: z.string().optional(),
	},
	runtimeEnv: {
		DATABASE_URL: process.env.DATABASE_URL,
		POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING,
		POSTGRES_USER: process.env.POSTGRES_USER,
		POSTGRES_HOST: process.env.POSTGRES_HOST,
		POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
		POSTGRES_DATABASE: process.env.POSTGRES_DATABASE,
		POSTGRES_URL_NO_SSL: process.env.POSTGRES_URL_NO_SSL,
		POSTGRES_PRISMA_URL: process.env.POSTGRES_PRISMA_URL,
		NODE_ENV: process.env.NODE_ENV,
		VERCEL_URL: process.env.VERCEL_URL,
		PORT: process.env.PORT,
		NEXT_PUBLIC_NODE_ENV: process.env.NODE_ENV,
		NEXT_PUBLIC_VERCEL_URL: process.env.NEXT_PUBLIC_VERCEL_URL,
		NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
	},
	skipValidation: false,
	emptyStringAsUndefined: true,
});
