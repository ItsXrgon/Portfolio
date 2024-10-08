import { arrayMove } from "@dnd-kit/sortable";
import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

import { TApp, TTaskbar, TWindow } from "@/app/types";

export const rowCount = 7;
export const columnCount = 16;

export interface AppsState {
	apps: TApp[];
	windows: TWindow[];
	taskBar: TTaskbar[];
	config: {
		timeZone: string;
		time: string | undefined;
	};
}

const initialState: AppsState = {
	apps: [
		{
			id: "0",
			name: "Terminal",
			icon: "terminal",
			position: columnCount * 0,
			type: "app",
		},
		{
			id: "1",
			name: "Github",
			icon: "github",
			position: columnCount * 1,
			type: "app",
		},
		{
			id: "2",
			name: "Settings",
			icon: "settings",
			position: columnCount * 2,
			type: "app",
		},
		{
			id: "3",
			name: "Curaflow",
			icon: "curaflow",
			position: columnCount * 3,
			type: "app",
		},
		{
			id: "4",
			name: "Multi Unit Converter",
			icon: "multi_unit_converter",
			position: columnCount * 4,
			type: "app",
		},
		{
			id: "5",
			name: "Xrbot - Discord Bot",
			icon: "xrbot",
			position: columnCount * 5,
			type: "app",
		},
		{
			id: "6",
			name: "User purge - Discord Bot",
			icon: "user_purge",
			position: columnCount * 6,
			type: "app",
		},
		{
			id: "7",
			name: "Haskell Chess Game",
			icon: "haskell_chess_game",
			position: 1,
			type: "app",
		},
		{
			id: "8",
			name: "Check Calculator",
			icon: "check_calculator",
			position: 1 + columnCount * 1,
			type: "app",
		},
	],
	windows: [],
	taskBar: [],
	config: {
		timeZone: "GMT",
		time: "",
	},
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
		openApp(
			state,
			action: PayloadAction<{
				id: string;
			}>,
		) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);

			state.windows.push({
				...state.apps[index],
				windowState: {
					isMaximized: false,
					isMinimized: false,
					zIndex: 0,
					position: { x: 350, y: 150 },
					size: { width: 800, height: 500 },
				},
			});

			const taskBarIndex = state.taskBar.findIndex(
				(app) => app.id === action.payload.id,
			);
			if (taskBarIndex === -1) {
				state.taskBar.push({
					id: state.apps[index].id,
					name: state.apps[index].name,
					icon: state.apps[index].icon,
					pinned: false,
				});
			}
		},
		closeApp(state, action: PayloadAction<{ id: string }>) {
			state.windows = state.windows.filter(
				(app) => app.id !== action.payload.id,
			);
			state.taskBar = state.taskBar.filter(
				(app) => !(app.id === action.payload.id && !app.pinned),
			);
		},
		minimizeApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMinimized: true,
			};
		},
		unMinimizeApp(state, action: PayloadAction<{ id: string }>) {
			const windowIndex = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.windows[windowIndex].windowState = {
				...state.windows[windowIndex].windowState,
				isMinimized: false,
			};
			pushToFront({ id: action.payload.id });
		},
		maximizeApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMaximized: true,
				isMinimized: false,
			};
		},
		unMaximizeApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMaximized: false,
				isMinimized: false,
			};
		},
		pinApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.apps.findIndex(
				(app) => app.id === action.payload.id,
			);
			const taskBarIndex = state.taskBar.findIndex(
				(app) => app.id === action.payload.id,
			);
			if (taskBarIndex === -1) {
				state.taskBar.push({
					...state.apps[index],
					pinned: true,
				});
			} else {
				state.taskBar[taskBarIndex].pinned = true;
			}
		},
		unpinApp(state, action: PayloadAction<{ id: string }>) {
			const windowIndex = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			if (windowIndex === -1) {
				state.taskBar = state.taskBar.filter(
					(app) => app.id !== action.payload.id,
				);
			} else {
				const index = state.taskBar.findIndex(
					(app) => app.id === action.payload.id,
				);
				state.taskBar[index].pinned = false;
			}
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
			state.taskBar = arrayMove(
				state.taskBar,
				action.payload.oldIndex,
				action.payload.newIndex,
			);
		},
		relocateApp(
			state,
			action: PayloadAction<{
				id: string;
				position: number;
			}>,
		) {
			const { id, position } = action.payload;
			if (
				state.apps.filter((app) => app.position === position).length > 0
			) {
				return;
			}
			const index = state.apps.findIndex((a) => a.id === id);
			state.apps[index].position = position;
		},
		relocateWindow(
			state,
			action: PayloadAction<{
				windowId: string;
				position: { x: number; y: number };
				size?: { width: number; height: number };
			}>,
		) {
			const { windowId, position, size } = action.payload;
			const index = state.windows.findIndex((a) => a.id === windowId);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMaximized: false,
				position,
				size: size || state.windows[index].windowState?.size,
			};
		},
		pushToFront(
			state,
			action: PayloadAction<{
				id: string;
			}>,
		) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.windows = [
				...state.windows.slice(0, index),
				...state.windows.slice(index + 1),
				state.windows[index],
			];
		},
		changeTimeZone(state, action: PayloadAction<string>) {
			state.config.timeZone = action.payload;
		},
		updateTime(state) {
			state.config.time = new Date().toString();
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
	relocateApp,
	relocateWindow,
	pushToFront,
	changeTimeZone,
	updateTime,
} = appsSlice.actions;

export const selectApps = (state: { apps: AppsState }) => state.apps.apps;

export const selectWindows = (state: { apps: AppsState }) => state.apps.windows;

export const selectTaskbar = (state: { apps: AppsState }) => state.apps.taskBar;

export const selectAppById = (id: string) =>
	createSelector(
		[selectApps],
		(apps) => apps?.find((app) => app.id === id) ?? apps[0],
	);

export const selectWindowById = (id: string) =>
	createSelector(
		[selectWindows],
		(windows) => windows?.find((app) => app.id === id) ?? windows[0],
	);

export const selectTaskbarById = (id: string) =>
	createSelector(
		[selectTaskbar],
		(taskBar) => taskBar?.find((app) => app.id === id) ?? taskBar[0],
	);

export const isAppOpen = (id: string) =>
	createSelector(
		[selectWindows],
		(windows) => windows.findIndex((w) => w.id === id) !== -1,
	);

export const isAppMinimized = (id: string) =>
	createSelector(
		[selectWindows],
		(windows) => windows.find((w) => w.id === id)?.windowState?.isMinimized,
	);

export const isAppPinned = (id: string) =>
	createSelector(
		[selectTaskbar],
		(taskBar) => taskBar.findIndex((w) => w.id === id) !== -1,
	);

export const selectTimeZone = (state: { apps: AppsState }) =>
	state.apps.config.timeZone;

export const selectTime = (state: { apps: AppsState }) =>
	state.apps.config.time ? new Date(state.apps.config.time) : undefined;

export default appsSlice.reducer;
