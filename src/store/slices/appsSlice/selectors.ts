import { createSelector } from "@reduxjs/toolkit";

import { AppsState } from "./types";

/**
 * Select the apps from the state
 * @param state - The state of the apps
 * @returns The apps
 */
export const selectApps = (state: { apps: AppsState }) => state.apps;

/**
 * Select the apps IDs from the state
 * @param state - The state of the apps
 * @returns The apps IDs
 */
export const selectAppsIds = createSelector(
	[selectApps],
	(apps) => Object.keys(apps),
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
 * Select the app from the state
 * @param id - The ID of the app
 * @returns The app
 */
export const selectApp = (id: string) =>
	createSelector([selectApps], (apps) => apps[id]);
