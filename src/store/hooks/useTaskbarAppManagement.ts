import { useCallback, useMemo } from "react";

import { useAppDispatch } from "../store";
import { pinApp, unpinApp } from "../thunks";

/**
 * Hook to manage pinning and unpinning of a specific app in the taskbar
 *
 * @param appId - The unique identifier of the app to manage
 * @returns An object containing taskbar management functions
 */
export function useTaskbarAppManagement(appId: string) {
	const dispatch = useAppDispatch();

	/**
	 * Pin the app to the taskbar
	 */
	const pinToTaskbar = useCallback(() => {
		dispatch(pinApp(appId));
	}, [dispatch, appId]);

	/**
	 * Unpin the app from the taskbar
	 */
	const unpinFromTaskbar = useCallback(() => {
		dispatch(unpinApp(appId));
	}, [dispatch, appId]);

	return useMemo(
		() => ({
			pinToTaskbar,
			unpinFromTaskbar,
		}),
		[pinToTaskbar, unpinFromTaskbar],
	);
}
