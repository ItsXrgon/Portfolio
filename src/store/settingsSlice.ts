import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { set } from "lodash";
import { TTheme } from "../types";
import { RootState } from "./store";
import palette from "../palette";

export interface settingsState {
	activeTheme: string;
	themes: TTheme[];
}

const defaultTheme: TTheme = {
	name: "Default",
	theme: palette,
	wallpaper: "",
};

const loadActiveThemeFromStorage = (): string => {
	const activeTheme = localStorage.getItem("activeTheme");
	if (activeTheme) {
		return activeTheme;
	}
	return "Default";
};

const saveThemesToStorage = (themes: TTheme[]) => {
	localStorage.setItem("themes", JSON.stringify(themes));
};

const saveActiveThemeToStorage = (activeTheme: string) => {
	localStorage.setItem("activeTheme", activeTheme);
};

const applyCSSVariables = (colors: {
	[key: string]: string | { [key: string]: string };
}) => {
	Object.entries(colors).forEach(([key, value]) => {
		if (typeof value === "string") {
			document.documentElement.style.setProperty(`--${key}`, value);
		} else {
			applyCSSVariables(value);
		}
	});
};

const initialState: settingsState = {
	activeTheme: loadActiveThemeFromStorage(),
	themes: [{ ...defaultTheme }],
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		loadThemes(state) {
			const themes = localStorage.getItem("themes");
			if (themes) {
				state.themes = JSON.parse(themes);
				const activeTheme = state.themes.find(
					(theme) => theme.name === state.activeTheme,
				);
				if (activeTheme) {
					applyCSSVariables(activeTheme.theme as any);
				}
			}
		},
		setActiveTheme(state, action: PayloadAction<string>) {
			state.activeTheme = action.payload;
			saveActiveThemeToStorage(action.payload);
			const activeTheme = state.themes.find(
				(theme) => theme.name === action.payload,
			);
			if (activeTheme) {
				applyCSSVariables(activeTheme.theme as any);
			}
		},
		addTheme(state, action: PayloadAction<TTheme>) {
			state.themes.push(action.payload);
			saveThemesToStorage(state.themes);
		},
		updateTheme(
			state,
			action: PayloadAction<{ path: string[]; color: string }>,
		) {
			const index = state.themes.findIndex(
				(theme) => theme.name === state.activeTheme,
			);
			if (index !== -1) {
				const theme = state.themes[index];
				set(
					theme.theme,
					action.payload.path.join("."),
					action.payload.color,
				);
				saveThemesToStorage(state.themes);
			}
		},
		deleteTheme(state, action: PayloadAction<string>) {
			state.themes = state.themes.filter(
				(theme) => theme.name !== action.payload,
			);
			if (state.activeTheme === action.payload) {
				state.activeTheme = "Default";
				saveActiveThemeToStorage("Default");
				const defaultTheme = state.themes.find(
					(theme) => theme.name === "Default",
				);
				if (defaultTheme) {
					applyCSSVariables(defaultTheme as any);
				}
			}
			saveThemesToStorage(state.themes);
		},
	},
});

export const { setActiveTheme, addTheme, updateTheme, deleteTheme } =
	settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectActiveTheme = (state: RootState) =>
	state.settings.themes.find(
		(theme) => theme.name === state.settings.activeTheme,
	) || defaultTheme;
export const selectThemes = (state: RootState) => state.settings.themes;
export default settingsSlice.reducer;
