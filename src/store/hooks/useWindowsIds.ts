import { selectWindowsIds } from "../slices";
import { useAppSelector } from "../store";

/**
 * Hook to select all window IDs as an array
 *
 * @returns An array of all window IDs (strings)
 */
export function useWindowsIds() {
	return useAppSelector(selectWindowsIds);
}
