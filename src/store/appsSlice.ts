import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { TApp } from "../types";

export interface AppsState {
	apps: TApp[];
}

const initialState: AppsState = {
	apps: [
		{
			id: "0",
			name: "Terminal",
			icon: "terminal",
			position: { x: 0, y: 0 },
			type: "app",
			appState: {
				isOpen: false,
				isMinimized: false,
				isFullscreen: false,
				isPinned: false,
			},
		},
		{
			id: "1",
			name: "Github",
			icon: "github",
			position: { x: 1, y: 0 },
			type: "app",
			appState: {
				isOpen: false,
				isMinimized: false,
				isFullscreen: false,
				isPinned: true,
			},
		},
	],
};

export const appsSlice = createSlice({
	name: "apps",
	initialState,
	reducers: {
		addApp(state, action: PayloadAction<TApp>) {
			state.apps.push(action.payload);
		},
		editApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index] = action.payload;
		},
		openApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isOpen = true;
			state.apps[index].appState.isMinimized = false;
			state.apps[index].appState.isFullscreen = false;
			state.apps[index].windowState = {
				isMaximized: false,
				position: {
					x: screen.width / 2 - 400,
					y: screen.height / 2 - 300,
				},
				size: {
					width: 800,
					height: 600,
				},
			};
		},
		closeApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isOpen = false;
		},
		minimizeApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isMinimized = true;
		},
		maximizeApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isMinimized = false;
		},
		fullscreenApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isFullscreen = true;
		},
		unfullscreenApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isFullscreen = false;
		},
		pinApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isPinned = true;
		},
		unpinApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isPinned = false;
		},
		removeApp(state, action: PayloadAction<TApp>) {
			state.apps = state.apps.filter(
				(app) => app.id !== action.payload.id,
			);
		},
		reOrderApps(
			state,
			action: PayloadAction<{
				oldIndex: number;
				newIndex: number;
			}>,
		) {
			const { oldIndex, newIndex } = action.payload;
			const [removed] = state.apps.splice(oldIndex, 1);
			state.apps.splice(newIndex, 0, removed);
		},
	},
});

export const {
	addApp,
	editApp,
	removeApp,
	closeApp,
	fullscreenApp,
	maximizeApp,
	minimizeApp,
	openApp,
	pinApp,
	unfullscreenApp,
	unpinApp,
	reOrderApps,
} = appsSlice.actions;

export const selectApps = (state: RootState) => state.apps.apps;
export const selectOpenApps = (state: RootState) =>
	state.apps.apps.filter((app) => app.appState.isOpen);
export const selectPinnedApps = (state: RootState) =>
	state.apps.apps.filter((app) => app.appState.isPinned);
export const selectedPinnedorOpenApps = (state: RootState) =>
	state.apps.apps.filter(
		(app) => app.appState.isPinned || app.appState.isOpen,
	);

export default appsSlice.reducer;
