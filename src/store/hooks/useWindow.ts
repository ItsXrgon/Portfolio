import { selectWindow } from "../slices";
import { useAppSelector } from "../store";

/**
 * Hook to select a specific window by its ID
 *
 * @param id - The unique identifier of the window to retrieve
 * @returns The window object if found, or undefined if the window doesn't exist
 */
export function useWindow(id: string) {
	return useAppSelector(selectWindow(id));
}
