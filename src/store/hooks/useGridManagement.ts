import { useCallback, useMemo } from "react";

import { useAppDispatch } from "../store";
import { useApps } from "./useApps";

/**
 * Hook to manage desktop app grid positioning and layout
 *
 * @returns An object containing grid management functions
 */
export function useGridManagement() {
	const dispatch = useAppDispatch();
	const apps = useApps();

	/**
	 * Relocate an app to a new grid position
	 */
	const relocateApp = useCallback(
		(appId: string, position: number) => {
			dispatch({
				type: "apps/relocateApp",
				payload: { appId, position },
			});
		},
		[dispatch],
	);

	/**
	 * Get an app by its grid position
	 */
	const getAppByPosition = useCallback(
		(position: number) => {
			return apps.find((app) => app.position === position)?.id;
		},
		[apps],
	);

	return useMemo(
		() => ({
			relocateApp,
			getAppByPosition,
		}),
		[relocateApp, getAppByPosition],
	);
}
