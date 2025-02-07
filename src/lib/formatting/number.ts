"use server";

import i18n from "@/app/i18n";

const locale = i18n.language || i18n.resolvedLanguage;

export async function formatPercentage(
	value: number,
	fractionDigits: number = 2,
	options?: Intl.NumberFormatOptions,
) {
	return new Intl.NumberFormat(locale, {
		style: "percent",
		maximumFractionDigits: fractionDigits ?? 2,
		...options,
	}).format(value / 100 || 0);
}

export async function formatNumber(
	value: number,
	fractionDigits: number = 2,
	options?: Intl.NumberFormatOptions,
) {
	return new Intl.NumberFormat(locale, {
		maximumFractionDigits: fractionDigits ?? 2,
		...options,
	}).format(value || 0);
}

export async function formatCurrency(
	value: number,
	currencyCode: string,
	fractionDigits: number = 2,
	options?: Intl.NumberFormatOptions,
) {
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
}
