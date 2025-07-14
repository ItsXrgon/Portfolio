import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import ar from "public/locales/ar.json";
import de from "public/locales/de.json";
import en from "public/locales/en.json";
import fr from "public/locales/fr.json";
import { initReactI18next } from "react-i18next";

export const languageOptions = [
	{ value: "en", label: "English" },
	{ value: "ar", label: "عربي" },
	{ value: "fr", label: "Français" },
	{ value: "de", label: "Deutsch" },
] as const;

i18n.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		detection: {
			convertDetectedLanguage: (lng: string) => {
				if (
					!lng ||
					languageOptions.some((option) => option.value === lng)
				) {
					return "en";
				}
				return lng;
			},
			order: ["localStorage", "navigator"],
			caches: ["localStorage"],
		},
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

export default i18n;
