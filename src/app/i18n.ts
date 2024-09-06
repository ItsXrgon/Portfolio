import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "../locales/ar.json";
import de from "../locales/de.json";
import en from "../locales/en.json";
import fr from "../locales/fr.json";

// the translations
// (tip move them in a JSON file and import   them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
i18n.use(initReactI18next).init({
	fallbackLng: "en",
	lng: "en", // TODO: Change to browser language
	interpolation: {
		escapeValue: false,
	},
	resources: {
		en: {
			translation: en,
		},
		ar: {
			translation: ar,
		},
		fr: {
			translation: fr,
		},
		de: {
			translation: de,
		},
	},
});

export function localiseNumber(number: number) {
	return new Intl.NumberFormat(i18n.language).format(number);
}

export const languageOptions = [
	{ value: "en", label: "English" },
	{ value: "ar", label: "عربي" },
	{ value: "fr", label: "Français" },
	{ value: "de", label: "Deutsch" },
];

export const timeZoneOptions = [
	{
		label: "North America",
		options: [
			{ value: "PST", label: "Pacific Standard Time (PST)" },
			{ value: "MST", label: "Mountain Standard Time (MST)" },
			{ value: "CST", label: "Central Standard Time (CST)" },
			{ value: "EST", label: "Eastern Standard Time (EST)" },
			{ value: "AST", label: "Atlantic Standard Time (AST)" },
			{ value: "HST", label: "Hawaii Standard Time (HST)" },
		],
	},
	{
		label: "Europe & Africa",
		options: [
			{ value: "GMT", label: "Greenwich Mean Time (GMT)" },
			{ value: "CET", label: "Central European Time (CET)" },
			{ value: "EET", label: "Eastern European Time (EET)" },
			{ value: "WEST", label: "Western European Summer Time (WEST)" },
			{ value: "CAT", label: "Central Africa Time (CAT)" },
			{ value: "EAT", label: "East Africa Time (EAT)" },
		],
	},
	{
		label: "Asia",
		options: [
			{ value: "MSK", label: "Moscow Time (MSK)" },
			{ value: "IST", label: "India Standard Time (IST)" },
			{ value: "CST", label: "China Standard Time (CST)" },
			{ value: "JST", label: "Japan Standard Time (JST)" },
			{ value: "KST", label: "Korea Standard Time (KST)" },
			{ value: "SGT", label: "Singapore Time (SGT)" },
		],
	},
	{
		label: "Australia & Pacific",
		options: [
			{ value: "AEST", label: "Australian Eastern Standard Time (AEST)" },
			{ value: "ACST", label: "Australian Central Standard Time (ACST)" },
			{ value: "AWST", label: "Australian Western Standard Time (AWST)" },
			{ value: "NZST", label: "New Zealand Standard Time (NZST)" },
			{ value: "FJT", label: "Fiji Time (FJT)" },
		],
	},
	{
		label: "South America",
		options: [
			{ value: "ART", label: "Argentina Time (ART)" },
			{ value: "BOT", label: "Bolivia Time (BOT)" },
			{ value: "BRT", label: "Brasilia Time (BRT)" },
			{ value: "CLT", label: "Chile Standard Time (CLT)" },
			{ value: "COT", label: "Colombia Time (COT)" },
			{ value: "ECT", label: "Ecuador Time (ECT)" },
		],
	},
];

export default i18n;
