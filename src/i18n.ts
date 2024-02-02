import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import ar from './locales/ar.json';
import fr from './locales/fr.json';
import de from './locales/de.json';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
i18n.use(initReactI18next).init({
	fallbackLng: 'en',
	lng: 'en', // TODO: Change to browser language
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

// Check if language preference is stored in local storage
const storedLanguage = localStorage.getItem('language');

if (storedLanguage) {
	i18n.changeLanguage(storedLanguage);
	document.documentElement.lang = storedLanguage;
}

i18n.on('languageChanged', (lng: string) => {
	localStorage.setItem('language', lng);
});

export function localiseNumber(number: number) {
	return new Intl.NumberFormat(i18n.language).format(number);
}

export const languageOptions = [
	{ value: 'en', label: 'English' },
	{ value: 'ar', label: 'عربي' },
	{ value: 'fr', label: 'Français' },
	{ value: 'de', label: 'Deutsch' },
];

export default i18n;
