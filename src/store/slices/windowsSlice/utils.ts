import { DesktopApp, DesktopWindow } from "@/store/types";

import { WindowsState } from "./types";

export const WINDOW_CONFIG = {
	DEFAULT_POSITION: { x: 350, y: 150 },
	DEFAULT_SIZE: { width: 600, height: 600 },
	MIN_SIZE: { width: 400, height: 300 },
	MAX_SIZE: { width: 1920, height: 1080 },
} as const;

export const validatePosition = (position: { x: number; y: number }) => {
	if (position.x < 0 || position.y < 0) {
		return false;
	}

	return true;
};

export const createWindowState = () => ({
	isMaximized: false,
	isMinimized: false,
	zIndex: 0,
	position: WINDOW_CONFIG.DEFAULT_POSITION,
	size: WINDOW_CONFIG.DEFAULT_SIZE,
});

export const createWindow = (app: DesktopApp): DesktopWindow => ({
	id: app.id,
	icon: app.icon,
	name: app.name,
	...createWindowState(),
});

export const getNextZIndex = (state: WindowsState): number => {
	const maxZIndex = Math.max(
		0,
		...Object.values(state).map((window) => window.zIndex ?? 0),
	);
	console.log(maxZIndex);
	return maxZIndex + 1;
};
