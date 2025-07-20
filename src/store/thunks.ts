import { createAsyncThunk } from "@reduxjs/toolkit";

import { selectApp } from "./slices/appsSlice";
import { addToTaskbar } from "./slices/taskbarSlice";
import { openWindow } from "./slices/windowsSlice";
import { RootState } from "./store";

// Thunk to open an app
export const openApp = createAsyncThunk(
	"apps/openApp",
	async (
		payload: {
			appId: string;
			screenWidth: number;
			screenHeight: number;
		},
		{ dispatch, getState },
	) => {
		const { appId, screenWidth, screenHeight } = payload;
		const state = getState() as RootState;
		const app = selectApp(appId)(state);

		if (!app) {
			console.warn(`App with ID ${appId} not found`);
			return;
		}

		// Open window in windows slice with responsive sizing
		dispatch(openWindow({ appId, app, screenWidth, screenHeight }));

		// Add to taskbar in taskbar slice
		dispatch(addToTaskbar({ appId, app, pinned: false }));
	},
);

// Thunk to close an app
export const closeApp = createAsyncThunk(
	"apps/closeApp",
	async (windowId: string, { dispatch, getState }) => {
		const state = getState() as RootState;
		const isPinned = state.taskbar[windowId]?.pinned;

		// Close window in windows slice
		dispatch({ type: "windows/closeWindow", payload: { windowId } });

		// Remove from taskbar if not pinned
		if (!isPinned) {
			dispatch({
				type: "taskbar/removeFromTaskbar",
				payload: { appId: windowId },
			});
		}
	},
);

// Thunk to pin an app
export const pinApp = createAsyncThunk(
	"apps/pinApp",
	async (appId: string, { dispatch, getState }) => {
		const state = getState() as RootState;
		const app = selectApp(appId)(state);

		if (!app) {
			console.warn(`App with ID ${appId} not found`);
			return;
		}

		// Add to taskbar if not already there
		if (!state.taskbar[appId]) {
			dispatch(addToTaskbar({ appId, app, pinned: true }));
		} else {
			// Just pin the existing item
			dispatch({ type: "taskbar/pinApp", payload: { appId } });
		}
	},
);

// Thunk to unpin an app
export const unpinApp = createAsyncThunk(
	"apps/unpinApp",
	async (appId: string, { dispatch, getState }) => {
		const state = getState() as RootState;
		const isWindowOpen = Object.keys(state.windows).includes(appId);

		// Unpin in taskbar slice
		dispatch({ type: "taskbar/unpinApp", payload: { appId } });

		// Remove from taskbar if window is not open
		if (!isWindowOpen) {
			dispatch({ type: "taskbar/removeFromTaskbar", payload: { appId } });
		}
	},
);
