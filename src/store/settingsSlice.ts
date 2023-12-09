import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TTheme } from "../types";

export interface settingsState {
	theme: TTheme;
	wallpaper: string;
}

const initialState: settingsState = {
	theme: {
		name: "Xrgon",
		colors: {
			primary: "#7209B7",
			primary_accent: "#560BAD",
			secondary: "#3A0CA3",
			secondary_accent: "#3A0CA3",
			ternary: "#4361EE",
			ternary_accent: "#637CEE	",
			bottomBar: "#3A0CA3",
		},
		text: {
			primary: "#FFFFFF",
			secondary: "#FFFFFF",
			ternary: "#FFFFFF",
			accent: "#F72585",
		},
	},
	wallpaper: "",
};

export const settingsSlice = createSlice({
	name: "settings",
	initialState,
	reducers: {
		changeTheme(state, action: PayloadAction<any>) {
			state.theme = action.payload;
		},
		changeWallpaper(state, action: PayloadAction<any>) {
			state.wallpaper = action.payload;
		},
	},
});

export const { changeTheme, changeWallpaper } = settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectTheme = (state: RootState) => state.settings.theme;
export const selectWallpaper = (state: RootState) => state.settings.wallpaper;

export default settingsSlice.reducer;
