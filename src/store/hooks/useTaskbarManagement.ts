import { useCallback, useMemo } from "react";

import { useAppDispatch } from "../store";

/**
 * Hook to manage taskbar-wide operations
 *
 * @returns An object containing taskbar management functions
 */
export function useTaskbarManagement() {
	const dispatch = useAppDispatch();

	/**
	 * Reorder apps in the taskbar
	 */
	const reorderTaskbarApps = useCallback(
		(oldIndex: number, newIndex: number) => {
			dispatch({
				type: "taskbar/reorderTaskbar",
				payload: { oldIndex, newIndex },
			});
		},
		[dispatch],
	);

	return useMemo(
		() => ({
			reorderTaskbarApps,
		}),
		[reorderTaskbarApps],
	);
}
