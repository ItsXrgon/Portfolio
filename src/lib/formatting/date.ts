"use server";

import dayjs from "dayjs";

const defaultFallback = "---";

function formatDate(
	date: string | Date | null | undefined,
	fallback?: string,
	options?: Intl.DateTimeFormatOptions & { locale?: Intl.LocalesArgument },
): string {
	if (!date) {
		return fallback ?? defaultFallback;
	}

	const dateObj = dayjs(date).toDate();

	try {
		return new Intl.DateTimeFormat(
			options?.locale?.toString() ?? undefined,
			{
				...options,
			},
		).format(dateObj);
	} catch {
		return fallback ?? defaultFallback;
	}
}

export async function formatLocaleDate(
	date: string | Date | null | undefined,
	fallback?: string,
	options?: Intl.DateTimeFormatOptions & { locale?: Intl.LocalesArgument },
) {
	return formatDate(date, fallback, {
		dateStyle: "medium",
		...options,
	});
}

export async function formatLocaleTime(
	date: string | Date | null | undefined,
	fallback?: string,
	options?: Intl.DateTimeFormatOptions & { locale?: Intl.LocalesArgument },
) {
	return formatDate(date, fallback, {
		timeStyle: "short",
		...options,
	});
}

export async function formatLocaleDateTime(
	date: string | Date | null | undefined,
	fallback?: string,
	options?: Intl.DateTimeFormatOptions & { locale?: Intl.LocalesArgument },
) {
	return formatDate(date, fallback, {
		dateStyle: "medium",
		timeStyle: "short",
		...options,
	});
}
