import { selectWindows } from "../slices/windowsSlice";
import { useAppSelector } from "../store";

/**
 * Hook to select all windows as an array
 *
 * @returns An array of all window objects
 */
export function useWindows() {
	return Object.values(useAppSelector(selectWindows));
}
