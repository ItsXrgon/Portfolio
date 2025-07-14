import { createSelector } from "@reduxjs/toolkit";

import { TaskbarState } from "./types";

/**
 * Select the taskbar apps from the state
 * @param state - The state of the taskbar
 * @returns The taskbar apps
 */
export const selectTaskbarApps = (state: { taskbar: TaskbarState }) =>
	state.taskbar;

/**
 * Select the taskbar apps IDs from the state
 * @param state - The state of the taskbar
 * @returns The taskbar apps IDs
 */
export const selectTaskbarAppsIds = createSelector(
	[selectTaskbarApps],
	(taskbar) => Object.keys(taskbar),
	{
		memoizeOptions: {
			resultEqualityCheck: (a: string[], b: string[]) => {
				if (a.length !== b.length) return false;
				return a.every((id: string, index: number) => id === b[index]);
			},
		},
	},
);

/**
 * Select the taskbar app from the state
 * @param id - The ID of the taskbar app
 * @returns The taskbar app
 */
export const selectTaskbarApp = (id: string) =>
	createSelector([selectTaskbarApps], (taskbar) => taskbar[id]);

/**
 * Select the pinned taskbar items from the state
 * @param state - The state of the taskbar
 * @returns The pinned taskbar items
 */
export const selectPinnedTaskbarItems = createSelector(
	[selectTaskbarApps],
	(taskbar) => Object.values(taskbar).filter((item) => item.pinned),
);
