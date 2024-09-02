import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TTheme } from '../types';
import { RootState } from './store';

export interface settingsState {
	activeTheme: string;
	themes: TTheme[];
}

const defaultTheme: TTheme = {
	name: 'Default',
	wallpaper: '',
};

const loadThemesFromStorage = (): TTheme[] => {
	const storedThemes = localStorage.getItem('themes');
	return storedThemes ? JSON.parse(storedThemes) : [defaultTheme];
};

const loadActiveThemeFromStorage = (): string => {
	return localStorage.getItem('activeTheme') || 'Default';
};

const initialState: settingsState = {
	activeTheme: loadActiveThemeFromStorage(),
	themes: loadThemesFromStorage(),
};

const saveThemesToStorage = (themes: TTheme[]) => {
	localStorage.setItem('themes', JSON.stringify(themes));
};

const saveActiveThemeToStorage = (activeTheme: string) => {
	localStorage.setItem('activeTheme', activeTheme);
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		setActiveTheme(state, action: PayloadAction<string>) {
			state.activeTheme = action.payload;
			saveActiveThemeToStorage(action.payload);
		},
		addTheme(state, action: PayloadAction<TTheme>) {
			state.themes.push(action.payload);
			saveThemesToStorage(state.themes);
		},
		updateTheme(state, action: PayloadAction<TTheme>) {
			const index = state.themes.findIndex(
				(theme) => theme.name === action.payload.name
			);
			if (index !== -1) {
				state.themes[index] = action.payload;
				saveThemesToStorage(state.themes);
			}
		},
		deleteTheme(state, action: PayloadAction<string>) {
			state.themes = state.themes.filter(
				(theme) => theme.name !== action.payload
			);
			if (state.activeTheme === action.payload) {
				state.activeTheme = 'Default';
				saveActiveThemeToStorage('Default');
			}
			saveThemesToStorage(state.themes);
		},
		changeColour(
			state,
			action: PayloadAction<{ path: string[]; colour: string }>
		) {
			document.documentElement.style.setProperty(
				`--${action.payload.path.join('-')}`,
				action.payload.colour
			);
			saveThemesToStorage(state.themes);
		},
	},
});

export const {
	setActiveTheme,
	addTheme,
	updateTheme,
	deleteTheme,
	changeColour,
} = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectActiveTheme = (state: RootState) =>
	state.settings.themes.find(
		(theme) => theme.name === state.settings.activeTheme
	) || defaultTheme;
export const selectThemes = (state: RootState) => state.settings.themes;

export default settingsSlice.reducer;
