import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TTheme } from '../types';

export interface settingsState {
	theme: TTheme;
}

const initialState: settingsState = {
	theme: {
		name: 'Xrgon',
		surface: {
			primary: '#231c59',
			secondary: '#2c2c2c',
			tertiary: '#3c3c3c',
			subdued: '#4c4c4c',
			accent: '#5c5c5c',
		},
		taskBar: {
			primary: '#c685ff',
			subdued: '#4c4c4c',
			accent: '#5c5c5c',
			hover: '#6c6c6c',
		},
		icon: {
			primary: '#ffffff',
			interactive: '#ffffff',
			hover: '#ffffff',
			pressed: '#ffffff',
		},
		label: {
			primary: '#000000',
			secondary: '#ffffff',
			tertiary: '#ffffff',
			subdued: '#ffffff',
		},
		wallpaper: '',
	},
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState,
	reducers: {
		changeTheme(state, action: PayloadAction<any>) {
			state.theme = action.payload;
		},
		changeWallpaper(state, action: PayloadAction<any>) {
			state.theme.wallpaper = action.payload;
		},
		changeColour(
			state,
			action: PayloadAction<{
				target: string;
				variant: string;
				colour: string;
			}>
		) {
			// @ts-ignore
			state.theme[action.payload.target][action.payload.variant] =
				action.payload.colour;
		},
	},
});

export const { changeTheme, changeWallpaper, changeColour } =
	settingsSlice.actions;

export const selectSettings = (state: RootState) => state.settings;
export const selectTheme = (state: RootState) => state.settings.theme;
export const selectWallpaper = (state: RootState) =>
	state.settings.theme.wallpaper;

export default settingsSlice.reducer;
