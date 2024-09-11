import i18n from "i18next";
import ar from "public/locales/ar.json";
import de from "public/locales/de.json";
import en from "public/locales/en.json";
import fr from "public/locales/fr.json";
import { initReactI18next } from "react-i18next";

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

export function changeLanguage(language: string) {
	i18n.changeLanguage(language);
}

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
			{
				value: "America/Los_Angeles",
				label: "Pacific Standard Time (PST)",
			},
			{ value: "America/Denver", label: "Mountain Standard Time (MST)" },
			{ value: "America/Chicago", label: "Central Standard Time (CST)" },
			{ value: "America/New_York", label: "Eastern Standard Time (EST)" },
			{ value: "America/Halifax", label: "Atlantic Standard Time (AST)" },
			{ value: "Pacific/Honolulu", label: "Hawaii Standard Time (HST)" },
		],
	},
	{
		label: "Europe & Africa",
		options: [
			{ value: "Etc/GMT", label: "Greenwich Mean Time (GMT)" },
			{ value: "Europe/Berlin", label: "Central European Time (CET)" },
			{ value: "Europe/Athens", label: "Eastern European Time (EET)" },
			{
				value: "Europe/Lisbon",
				label: "Western European Summer Time (WEST)",
			},
			{ value: "Africa/Harare", label: "Central Africa Time (CAT)" },
			{ value: "Africa/Nairobi", label: "East Africa Time (EAT)" },
		],
	},
	{
		label: "Asia",
		options: [
			{ value: "Europe/Moscow", label: "Moscow Time (MSK)" },
			{ value: "Asia/Kolkata", label: "India Standard Time (IST)" },
			{ value: "Asia/Shanghai", label: "China Standard Time (CST)" },
			{ value: "Asia/Tokyo", label: "Japan Standard Time (JST)" },
			{ value: "Asia/Seoul", label: "Korea Standard Time (KST)" },
			{ value: "Asia/Singapore", label: "Singapore Time (SGT)" },
		],
	},
	{
		label: "Australia & Pacific",
		options: [
			{
				value: "Australia/Sydney",
				label: "Australian Eastern Standard Time (AEST)",
			},
			{
				value: "Australia/Adelaide",
				label: "Australian Central Standard Time (ACST)",
			},
			{
				value: "Australia/Perth",
				label: "Australian Western Standard Time (AWST)",
			},
			{
				value: "Pacific/Auckland",
				label: "New Zealand Standard Time (NZST)",
			},
			{ value: "Pacific/Fiji", label: "Fiji Time (FJT)" },
		],
	},
	{
		label: "South America",
		options: [
			{
				value: "America/Argentina/Buenos_Aires",
				label: "Argentina Time (ART)",
			},
			{ value: "America/La_Paz", label: "Bolivia Time (BOT)" },
			{ value: "America/Sao_Paulo", label: "Brasilia Time (BRT)" },
			{ value: "America/Santiago", label: "Chile Standard Time (CLT)" },
			{ value: "America/Bogota", label: "Colombia Time (COT)" },
			{ value: "America/Guayaquil", label: "Ecuador Time (ECT)" },
		],
	},
];

export default i18n;
