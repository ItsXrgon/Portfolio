import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TApp, TTaskBar, TWindow } from '../types';

export interface AppsState {
	apps: TApp[];
	windows: TWindow[];
	taskBar: TTaskBar[];
}

const initialState: AppsState = {
	apps: [
		{
			id: '0',
			name: 'Terminal',
			icon: 'terminal',
			position: { x: 0, y: 0 },
			type: 'app',
		},
		{
			id: '1',
			name: 'Github',
			icon: 'github',
			position: { x: 1, y: 0 },
			type: 'app',
		},
	],
	windows: [],
	taskBar: [],
};

export const appsSlice = createSlice({
	name: 'apps',
	initialState,
	reducers: {
		addApp(state, action: PayloadAction<TApp>) {
			state.apps.push(action.payload);
		},
		editApp(state, action: PayloadAction<TApp>) {
			const index = state.apps.findIndex((app) => app.id === action.payload.id);
			state.apps[index] = action.payload;
		},
		openApp(
			state,
			action: PayloadAction<{
				id: string;
			}>
		) {
			const index = state.apps.findIndex((app) => app.id === action.payload.id);
			if (state.windows.findIndex((w) => w.id === action.payload.id) !== -1) {
				return;
			}

			state.windows.push({
				...state.apps[index],
				windowState: {
					isMaximized: false,
					isMinimized: false,
					zIndex: 0,
					position: { x: 350, y: 150 },
					size: { width: 800, height: 400 },
				},
			});

			const taskBarIndex = state.taskBar.findIndex(
				(app) => app.id === action.payload.id
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
				(app) => app.id !== action.payload.id
			);
			state.taskBar = state.taskBar.filter(
				(app) => !(app.id === action.payload.id && !app.pinned)
			);
		},
		minimizeApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMinimized: true,
			};
		},
		unMinimizeApp(state, action: PayloadAction<{ id: string }>) {
			const windowIndex = state.windows.findIndex(
				(app) => app.id === action.payload.id
			);
			state.windows[windowIndex].windowState = {
				...state.windows[windowIndex].windowState,
				isMinimized: false,
			};
		},
		maximizeApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMaximized: true,
				isMinimized: false,
			};
		},
		unMaximizeApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState,
				isMaximized: false,
				isMinimized: false,
			};
		},
		pinApp(state, action: PayloadAction<{ id: string }>) {
			const index = state.apps.findIndex((app) => app.id === action.payload.id);
			const taskBarIndex = state.taskBar.findIndex(
				(app) => app.id === action.payload.id
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
				(app) => app.id === action.payload.id
			);
			state.taskBar[index].pinned = false;
		},
		removeApp(state, action: PayloadAction<TApp>) {
			state.apps = state.apps.filter((app) => app.id !== action.payload.id);
		},
		reOrderApps(
			state,
			action: PayloadAction<{
				oldIndex: number;
				newIndex: number;
			}>
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
			}>
		) {
			const { app, position } = action.payload;
			if (
				state.apps.filter(
					(app) =>
						app.position.x === position.x && app.position.y === position.y
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
			}>
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
		pushToFront(state, action: PayloadAction<TApp | TWindow>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id
			);
			const zIndex = Math.max(
				...state.windows.map((w) => w.windowState?.zIndex || 0)
			);
			state.windows[index].windowState = {
				...state.windows[index].windowState!,
				zIndex: zIndex + 1,
			};
		},
		handleTaskBarAppClick(state, action: PayloadAction<TTaskBar>) {
			const index = state.windows.findIndex(
				(app) => app.id === action.payload.id
			);
			if (index === -1) {
				state.windows.push({
					...action.payload,
					type: 'app',
					windowState: {
						isMaximized: false,
						isMinimized: false,
						zIndex: 0,
						position: { x: 350, y: 150 },
						size: { width: 800, height: 400 },
					},
				});
			} else {
				state.windows[index].windowState = {
					...state.windows[index].windowState!,
					isMinimized: !state.windows[index].windowState?.isMinimized,
				};
			}
		},
	},
	selectors: {
		getApps: (state: AppsState) => state.apps,
		getWindows: (state: AppsState) => state.windows,
		getShownWindows: (state: AppsState) =>
			state.windows.filter((w) => !w.windowState?.isMinimized),
		getTaskBar: (state: AppsState) => state.taskBar,
		getAppById: (state: AppsState, id: string) =>
			state.apps.find((app) => app.id === id),
		getWindowById: (state: AppsState, id: string) =>
			state.windows.find((app) => app.id === id),
		getTaskBarById: (state: AppsState, id: string) =>
			state.taskBar.find((app) => app.id === id),
		isAppOpen: (state: AppsState, id: string) =>
			state.windows.findIndex((w) => w.id === id) !== -1,
		isAppMinimized: (state: AppsState, id: string) =>
			state.windows.find((w) => w.id === id)?.windowState?.isMinimized,
		isAppPinned: (state: AppsState, id: string) =>
			state.taskBar.findIndex((w) => w.id === id) !== -1,
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
	handleTaskBarAppClick,
} = appsSlice.actions;

export const {
	getAppById,
	getWindowById,
	getTaskBarById,
	getApps,
	getWindows,
	getShownWindows,
	getTaskBar,
	isAppOpen,
	isAppMinimized,
	isAppPinned,
} = appsSlice.selectors;

export default appsSlice.reducer;
