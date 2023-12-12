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
				isPinned: false,
				isSelected: false,
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
				isPinned: true,
				isSelected: false,
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
			state.apps[index].windowState = {
				isMinimized: false,
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
			state.apps[index].windowState = {
				...state.apps[index].windowState!,
				isMinimized: true,
			};
		},
		unMinimizeApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].windowState = {
				...state.apps[index].windowState!,
				isMinimized: false,
			};
		},
		maximizeApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].windowState = {
				...state.apps[index].windowState!,
				isMaximized: true,
				isMinimized: false,
			};
		},
		unMaximizeApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].windowState = {
				...state.apps[index].windowState!,
				isMaximized: false,
				isMinimized: false,
			};
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
		selectApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isSelected = true;
		},
		unSelectApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.apps[index].appState.isSelected = false;
		},
		unSelectAllApps(state) {
			state.apps = state.apps.map((app) => {
				app.appState.isSelected = false;
				return app;
			});
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
		reLocateApp(
			state,
			action: PayloadAction<{
				app: TApp;
				position: { x: number; y: number };
			}>,
		) {
			const { app, position } = action.payload;
			if (
				state.apps.filter(
					(app) =>
						app.position.x === position.x &&
						app.position.y === position.y,
				).length > 0
			) {
				return;
			}
			const index = state.apps.findIndex((a) => a.id === app.id);
			state.apps[index].position = position;
		},
		reLocateWindow(
			state,
			action: PayloadAction<{
				app: TApp;
				position: { x: number; y: number };
			}>,
		) {
			state.apps[
				state.apps.findIndex((a) => a.id === action.payload.app.id)
			].position = {
				x: action.payload.position.x,
				y: action.payload.position.y,
			};
		},
	},
});

export const {
	addApp,
	editApp,
	removeApp,
	closeApp,
	unMinimizeApp,
	minimizeApp,
	unMaximizeApp,
	maximizeApp,
	openApp,
	pinApp,
	unpinApp,
	reOrderApps,
	reLocateApp,
	reLocateWindow,
	selectApp,
	unSelectApp,
	unSelectAllApps,
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
export const selectOpenWindows = (state: RootState) =>
	state.apps.apps.filter(
		(app) =>
			app.windowState &&
			app.appState.isOpen &&
			!app.windowState.isMinimized,
	);

export default appsSlice.reducer;
