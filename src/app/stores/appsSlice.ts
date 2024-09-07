import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

import { TApp, TTaskbar, TWindow } from "@/app/types";

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
			position: { x: 0, y: 0 },
			type: "app",
		},
		{
			id: "1",
			name: "Github",
			icon: "github",
			position: { x: 1, y: 0 },
			type: "app",
		},
		{
			id: "2",
			name: "Settings",
			icon: "settings",
			position: { x: 2, y: 0 },
			type: "app",
		},
	],
	windows: [],
	taskBar: [],
	config: {
		timeZone: "GMT",
		time: undefined,
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
			if (
				state.windows.findIndex((w) => w.id === action.payload.id) !==
				-1
			) {
				return;
			}

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
			const index = state.taskBar.findIndex(
				(app) => app.id === action.payload.id,
			);
			state.taskBar[index].pinned = false;
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
		relocateApp(
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
				{
					...state.windows[index],
					windowState: {
						...state.windows[index].windowState,
						isMinimized: false,
					},
				},
			];
		},
		handleTaskbarAppClick(state, action: PayloadAction<TTaskbar>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id,
			);
			if (index === -1) {
				state.windows.push({
					...action.payload,
					type: "app",
					windowState: {
						isMaximized: false,
						isMinimized: false,
						zIndex: 0,
						position: { x: 350, y: 150 },
						size: { width: 800, height: 400 },
					},
				});
			} else {
				if (state.windows[index].windowState?.isMinimized) {
					state.windows = [
						...state.windows.slice(0, index),
						...state.windows.slice(index + 1),
						{
							...state.windows[index],
							windowState: {
								...state.windows[index].windowState,
								isMinimized: false,
							},
						},
					];
				} else {
					state.windows[index].windowState = {
						...state.windows[index].windowState!,
						isMinimized: true,
					};
				}
			}
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
	handleTaskbarAppClick,
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
		(windows) =>
			windows.findIndex(
				(w) => w.id === id && w.windowState?.isMinimized,
			) !== -1,
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
