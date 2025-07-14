import { useTranslation } from "react-i18next";

/**
 * The function to format the number
 * @returns The formatted number
 */
export function useFormatNumber() {
	const { i18n } = useTranslation();

	const locale = i18n.language || i18n.resolvedLanguage;

	/**
	 * Format the number as a percentage
	 * @param value - The value to format
	 * @param fractionDigits - The number of fraction digits
	 * @param options - The options for the number format
	 * @returns The formatted number
	 */
	const formatPercentage = (
		value: number,
		fractionDigits: number = 2,
		options?: Intl.NumberFormatOptions,
	) => {
		return new Intl.NumberFormat(locale, {
			style: "percent",
			maximumFractionDigits: fractionDigits ?? 2,
			...options,
		}).format(value / 100 || 0);
	};

	/**
	 * Format the number
	 * @param value - The value to format
	 * @param fractionDigits - The number of fraction digits
	 * @param options - The options for the number format
	 * @returns The formatted number
	 */
	const formatNumber = (
		value: number,
		fractionDigits: number = 2,
		options?: Intl.NumberFormatOptions,
	) => {
		return new Intl.NumberFormat(locale, {
			maximumFractionDigits: fractionDigits ?? 2,
			...options,
		}).format(value || 0);
	};

	/**
	 * Format the number as a currency
	 * @param value - The value to format
	 * @param currencyCode - The currency code
	 * @param fractionDigits - The number of fraction digits
	 * @param options - The options for the number format
	 * @returns The formatted number
	 */
	const formatCurrency = (
		value: number,
		currencyCode: string,
		fractionDigits: number = 2,
		options?: Intl.NumberFormatOptions,
	) => {
		try {
			return new Intl.NumberFormat(locale, {
				style: "currency",
				currency: currencyCode,
				maximumFractionDigits: fractionDigits ?? 2,
				...options,
			}).format(value || 0);
		} catch {
			return new Intl.NumberFormat(locale, {
				style: "currency",
				currency: "EGP",
				maximumFractionDigits: fractionDigits ?? 2,
				...options,
			}).format(value || 0);
		}
	};

	return { formatPercentage, formatNumber, formatCurrency };
}
