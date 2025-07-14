import { AppsState } from "./types";

/**
 * The configuration for the grid
 */
export const GRID_CONFIG = {
	ROW_COUNT: 7,
	COLUMN_COUNT: 16,
} as const;

/**
 * Check if a grid position is valid
 * @param position - The position to check
 * @returns True if the position is valid, false otherwise
 */
export const isValidGridPosition = (position: number): boolean => {
	return (
		position >= 0 &&
		position < GRID_CONFIG.ROW_COUNT * GRID_CONFIG.COLUMN_COUNT
	);
};

/**
 * Check if a grid position is occupied
 * @param state - The state of the apps
 * @param position - The position to check
 * @returns True if the position is occupied, false otherwise
 */
export const isGridPositionOccupied = (
	state: AppsState,
	position: number,
): boolean => {
	return Object.values(state).some((app) => app.position === position);
};
