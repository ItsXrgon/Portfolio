import { useCallback, useMemo } from "react";

import { useScreenSize } from "@/hooks";

import { useAppDispatch } from "../store";
import { closeApp as closeAppThunk, openApp as openAppThunk } from "../thunks";
import { useWindow } from "./useWindow";

/**
 * Hook to manage a specific window's state and operations
 *
 * @param windowId - The unique identifier of the window to manage
 * @returns An object containing window management functions and state
 */
export function useWindowManagement(windowId: string) {
	const dispatch = useAppDispatch();
	const window = useWindow(windowId);
	const { width: screenWidth, height: screenHeight } = useScreenSize();

	const isMaximized = useMemo(() => window?.isMaximized, [window]);

	/**
	 * Open the window
	 */
	const openWindow = useCallback(() => {
		dispatch(openAppThunk({ appId: windowId, screenWidth, screenHeight }));
	}, [dispatch, screenHeight, screenWidth, windowId]);

	/**
	 * Close the window
	 */
	const closeWindow = useCallback(() => {
		dispatch(closeAppThunk(windowId));
	}, [dispatch, windowId]);

	/**
	 * Minimize the window
	 */
	const minimizeWindow = useCallback(() => {
		dispatch({ type: "windows/minimizeWindow", payload: { windowId } });
	}, [dispatch, windowId]);

	/**
	 * Restore the window from minimized state
	 */
	const unMinimizeWindow = useCallback(() => {
		dispatch({
			type: "windows/unMinimizeWindow",
			payload: { windowId },
		});
	}, [dispatch, windowId]);

	/**
	 * Maximize the window
	 */
	const maximizeWindow = useCallback(() => {
		dispatch({ type: "windows/maximizeWindow", payload: { windowId } });
	}, [dispatch, windowId]);

	/**
	 * Restore the window from maximized state
	 */
	const unMaximizeWindow = useCallback(() => {
		dispatch({
			type: "windows/unMaximizeWindow",
			payload: { windowId },
		});
	}, [dispatch, windowId]);

	/**
	 * Bring the window to the front (highest z-index)
	 */
	const bringToFront = useCallback(() => {
		dispatch({ type: "windows/pushToFront", payload: { windowId } });
	}, [dispatch, windowId]);

	/**
	 * Move and resize the window
	 */
	const relocateWindow = useCallback(
		(
			position: { x: number; y: number },
			size?: { width: number; height: number },
		) => {
			dispatch({
				type: "windows/relocateWindow",
				payload: { windowId, position, size },
			});
		},
		[dispatch, windowId],
	);

	/**
	 * Toggle between maximized and normal state
	 */
	const toggleMinMax = useCallback(() => {
		if (isMaximized) {
			unMaximizeWindow();
		} else {
			maximizeWindow();
		}
	}, [isMaximized, unMaximizeWindow, maximizeWindow]);

	return useMemo(
		() => ({
			openWindow,
			closeWindow,
			minimizeWindow,
			unMinimizeWindow,
			maximizeWindow,
			unMaximizeWindow,
			bringToFront,
			relocateWindow,
			toggleMinMax,
		}),
		[
			openWindow,
			closeWindow,
			minimizeWindow,
			unMinimizeWindow,
			maximizeWindow,
			unMaximizeWindow,
			bringToFront,
			relocateWindow,
			toggleMinMax,
		],
	);
}
