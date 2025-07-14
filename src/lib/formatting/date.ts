import dayjs from "dayjs";

/**
 * The format function type
 * @param date - The date to format
 * @param fallback - The fallback value
 * @param options - The options for the date format
 * @returns The formatted date
 */
type formatFunction = (
	date: string | Date | null | undefined,
	fallback?: string,
	options?: Intl.DateTimeFormatOptions & { locale?: Intl.LocalesArgument },
) => string;

/**
 * The default fallback value
 */
const defaultFallback = "---";

/**
 * Base function to format the date
 * @param date - The date to format
 * @param fallback - The fallback value
 * @param options - The options for the date format
 * @returns The formatted date
 */
const formatDate: formatFunction = (date, fallback, options) => {
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
};

/**
 * Format the date to the locale date format
 * @param date - The date to format
 * @param fallback - The fallback value
 * @param options - The options for the date format
 * @returns The formatted date
 */
export const formatLocaleDate: formatFunction = (date, fallback, options) =>
	formatDate(date, fallback, {
		dateStyle: "medium",
		...options,
	});

/**
 * Format the date to the locale time format
 * @param date - The date to format
 * @param fallback - The fallback value
 * @param options - The options for the date format
 * @returns The formatted date
 */
export const formatLocaleTime: formatFunction = (date, fallback, options) =>
	formatDate(date, fallback, {
		timeStyle: "short",
		...options,
	});

/**
 * Format the date to the locale date and time format
 * @param date - The date to format
 * @param fallback - The fallback value
 * @param options - The options for the date format
 * @returns The formatted date
 */
export const formatLocaleDateTime: formatFunction = (date, fallback, options) =>
	formatDate(date, fallback, {
		dateStyle: "medium",
		timeStyle: "short",
		...options,
	});
