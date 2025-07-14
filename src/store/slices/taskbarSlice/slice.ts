import { arrayMove } from "@dnd-kit/sortable";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { DesktopApp, TaskbarApp } from "@/store/types";

import { TaskbarState } from "./types";

const initialState: TaskbarState = {};

export const taskbarSlice = createSlice({
	name: "taskbar",
	initialState,
	reducers: {
		/**
		 * Add an app to the taskbar
		 * @param state - The state of the taskbar
		 * @param action - The action payload
		 */
		addToTaskbar(
			state,
			action: PayloadAction<{
				appId: string;
				app: DesktopApp;
				pinned?: boolean;
			}>,
		) {
			const { appId, app, pinned = false } = action.payload;

			// Don't add if already exists
			if (state[appId]) return;

			const taskbarItem: TaskbarApp = {
				id: appId,
				name: app.name,
				icon: app.icon,
				pinned,
			};

			state[appId] = taskbarItem;
		},
		/**
		 * Remove an app from the taskbar
		 * @param state - The state of the taskbar
		 * @param action - The action payload
		 */
		removeFromTaskbar(
			state,
			action: PayloadAction<{ appId: string; force?: boolean }>,
		) {
			const { appId, force = false } = action.payload;

			const taskbarItem = state[appId];
			if (!taskbarItem) return;

			// Only remove if forced or not pinned
			if (force || !taskbarItem.pinned) {
				delete state[appId];
			}
		},
		/**
		 * Pin an app to the taskbar
		 * @param state - The state of the taskbar
		 * @param action - The action payload
		 */
		pinApp(
			state,
			action: PayloadAction<{
				appId: string;
			}>,
		) {
			const { appId } = action.payload;

			const taskbarItem = state[appId];
			if (taskbarItem) {
				taskbarItem.pinned = true;
			}
		},
		/**
		 * Unpin an app from the taskbar
		 * @param state - The state of the taskbar
		 * @param action - The action payload
		 */
		unpinApp(
			state,
			action: PayloadAction<{
				appId: string;
			}>,
		) {
			const { appId } = action.payload;

			const taskbarItem = state[appId];
			if (taskbarItem) {
				taskbarItem.pinned = false;
			}
		},
		/**
		 * Reorder the taskbar apps
		 * @param state - The state of the taskbar
		 * @param action - The action payload
		 */
		reorderTaskbar(
			state,
			action: PayloadAction<{
				oldIndex: number;
				newIndex: number;
			}>,
		) {
			const { oldIndex, newIndex } = action.payload;
			const taskbarIds = Object.keys(state);

			if (
				oldIndex >= 0 &&
				oldIndex < taskbarIds.length &&
				newIndex >= 0 &&
				newIndex < taskbarIds.length
			) {
				const reorderedIds = arrayMove(taskbarIds, oldIndex, newIndex);

				// Rebuild the state object with the new order
				const newState: TaskbarState = {};
				reorderedIds.forEach((id) => {
					if (state[id]) {
						newState[id] = state[id];
					}
				});

				// Clear and rebuild the state
				Object.keys(state).forEach((key) => {
					delete state[key];
				});
				Object.assign(state, newState);
			}
		},
	},
});

export const {
	addToTaskbar,
	removeFromTaskbar,
	pinApp,
	unpinApp,
	reorderTaskbar,
} = taskbarSlice.actions;

export default taskbarSlice.reducer;
