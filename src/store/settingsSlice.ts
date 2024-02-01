import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';
import { TTheme } from '../types';

export interface settingsState {
	theme: TTheme;
	wallpaper: string;
}

const initialState: settingsState = {
	theme: {
		name: 'Xrgon',
		colors: {
			primary: '#231c59',
			primary_accent: '#560BAD',
			secondary: '#c466ff',
			secondary_accent: '#3A0CA3',
			ternary: '#010b29',
			ternary_accent: '#637CEE',
			TaskBar: '#c685ff',
		},
		text: {
			primary: '#010b29',
			secondary: '#FFFFFF',
			ternary: '#FFFFFF',
			accent: '#F72585',
		},
	},
	wallpaper: '',
};

export const settingsSlice = createSlice({
	name: 'settings',
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
