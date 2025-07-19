import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DesktopApp } from "../../types";
import { WindowActionPayload, WindowsState } from "./types";
import { createWindow, getNextZIndex, validatePosition } from "./utils";

const initialState: WindowsState = {};

export const windowsSlice = createSlice({
	name: "windows",
	initialState,
	reducers: {
		openWindow(
			state,
			action: PayloadAction<{ appId: string; app: DesktopApp }>,
		) {
			const { appId, app } = action.payload;

			if (state[appId]) {
				return;
			}

			const Window = createWindow(app);
			Window.zIndex = getNextZIndex(state);

			state[appId] = Window;
		},
		closeWindow(state, action: PayloadAction<WindowActionPayload>) {
			const { windowId } = action.payload;

			delete state[windowId];
		},
		minimizeWindow(state, action: PayloadAction<WindowActionPayload>) {
			const { windowId } = action.payload;

			const window = state[windowId];
			if (!window) {
				console.warn(`Window with ID ${windowId} not found`);
				return;
			}

			window.isMinimized = true;
		},
		unMinimizeWindow(state, action: PayloadAction<WindowActionPayload>) {
			const { windowId } = action.payload;

			const window = state[windowId];
			if (!window) {
				console.warn(`Window with ID ${windowId} not found`);
				return;
			}

			window.isMinimized = false;
			window.zIndex = getNextZIndex(state);
		},
		maximizeWindow(state, action: PayloadAction<WindowActionPayload>) {
			const { windowId } = action.payload;
			const window = state[windowId];
			if (!window) {
				console.warn(`Window with ID ${windowId} not found`);
				return;
			}

			window.isMaximized = true;
			window.isMinimized = false;
			window.zIndex = getNextZIndex(state);
		},
		unMaximizeWindow(state, action: PayloadAction<WindowActionPayload>) {
			const { windowId } = action.payload;
			const window = state[windowId];
			if (!window) {
				console.warn(`Window with ID ${windowId} not found`);
				return;
			}

			window.isMaximized = false;
			window.zIndex = getNextZIndex(state);
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
			const isPositionValid = validatePosition(position);

			const window = state[windowId];
			if (!window) {
				console.warn(`Window with ID ${windowId} not found`);
				return;
			}

			if (!isPositionValid) {
				console.warn("Invalid position");
				return;
			}

			window.isMaximized = false;
			window.position = position;
			if (size) {
				window.size = size;
			}
		},
		pushToFront(state, action: PayloadAction<WindowActionPayload>) {
			const { windowId } = action.payload;
			const window = state[windowId];
			if (!window) {
				console.warn(`Window with ID ${windowId} not found`);
				return;
			}

			window.zIndex = getNextZIndex(state);
		},
		minimizeAllWindows(state) {
			Object.keys(state).forEach((windowId) => {
				const window = state[windowId];
				if (window) {
					window.isMinimized = true;
					window.isMaximized = false;
				}
			});
		},
	},
});

// Export actions
export const {
	openWindow,
	closeWindow,
	minimizeWindow,
	unMinimizeWindow,
	maximizeWindow,
	unMaximizeWindow,
	relocateWindow,
	pushToFront,
	minimizeAllWindows,
} = windowsSlice.actions;

export default windowsSlice.reducer;
