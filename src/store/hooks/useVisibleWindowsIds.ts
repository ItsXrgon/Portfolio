import { selectVisibleWindowsIds } from "../slices";
import { useAppSelector } from "../store";

/**
 * Hook to select all visible windows IDs
 *
 * @returns An array of visible windows IDs
 */
export function useVisibleWindowsIds() {
	return useAppSelector(selectVisibleWindowsIds);
}
