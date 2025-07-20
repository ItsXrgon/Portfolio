import { DesktopApp, DesktopWindow } from "@/store/types";

import { WindowsState } from "./types";

// Base window configuration
export const BASE_WINDOW_CONFIG = {
	DEFAULT_POSITION: { x: 350, y: 150 },
	MIN_SIZE: { width: 400, height: 300 },
} as const;

// Responsive breakpoints for window sizing
const RESPONSIVE_BREAKPOINTS = {
	xs: 480, // Mobile
	sm: 768, // Tablet
	md: 1024, // Small desktop
	lg: 1440, // Large desktop
	xl: 1920, // Extra large
} as const;

/**
 * Get responsive window configuration based on screen size
 */
export const getResponsiveWindowConfig = (
	screenWidth: number,
	screenHeight: number,
) => {
	// Calculate responsive default size based on screen dimensions
	let defaultWidth: number;
	let defaultHeight: number;
	let minWidth: number;
	let minHeight: number;

	if (screenWidth <= RESPONSIVE_BREAKPOINTS.xs) {
		// Mobile: nearly full screen
		defaultWidth = Math.max(screenWidth - 40, 320);
		defaultHeight = Math.max(screenHeight - 120, 400);
		minWidth = 280;
		minHeight = 200;
	} else if (screenWidth <= RESPONSIVE_BREAKPOINTS.sm) {
		// Tablet: medium size
		defaultWidth = Math.min(screenWidth * 0.8, 600);
		defaultHeight = Math.min(screenHeight * 0.7, 500);
		minWidth = 320;
		minHeight = 240;
	} else if (screenWidth <= RESPONSIVE_BREAKPOINTS.md) {
		// Small desktop: standard size
		defaultWidth = 600;
		defaultHeight = 600;
		minWidth = 400;
		minHeight = 300;
	} else if (screenWidth <= RESPONSIVE_BREAKPOINTS.lg) {
		// Large desktop: larger default
		defaultWidth = 800;
		defaultHeight = 700;
		minWidth = 500;
		minHeight = 400;
	} else {
		// Extra large: even larger
		defaultWidth = 1000;
		defaultHeight = 800;
		minWidth = 600;
		minHeight = 500;
	}

	// Ensure default size doesn't exceed screen bounds
	defaultWidth = Math.min(defaultWidth, screenWidth - 100);
	defaultHeight = Math.min(defaultHeight, screenHeight - 150);

	// Ensure minimum size is reasonable
	minWidth = Math.min(minWidth, screenWidth * 0.3);
	minHeight = Math.min(minHeight, screenHeight * 0.3);

	// Calculate responsive default position (center the window)
	const defaultX = Math.max(50, Math.floor((screenWidth - defaultWidth) / 2));
	const defaultY = Math.max(
		50,
		Math.floor((screenHeight - defaultHeight) / 2),
	);

	return {
		DEFAULT_POSITION: { x: defaultX, y: defaultY },
		DEFAULT_SIZE: { width: defaultWidth, height: defaultHeight },
		MIN_SIZE: { width: minWidth, height: minHeight },
	};
};

export const validatePosition = (position: { x: number; y: number }) => {
	if (position.x < 0 || position.y < 0) {
		return false;
	}

	return true;
};

/**
 * Validate and adjust window bounds to ensure they stay within screen dimensions
 */
export const validateAndAdjustWindowBounds = (
	position: { x: number; y: number },
	size: { width: number; height: number },
	screenWidth: number,
	screenHeight: number,
) => {
	const adjustedPosition = { ...position };
	const adjustedSize = { ...size };

	// Ensure window doesn't go off-screen horizontally
	if (adjustedPosition.x + adjustedSize.width > screenWidth) {
		adjustedPosition.x = Math.max(0, screenWidth - adjustedSize.width);
	}

	// Ensure window doesn't go off-screen vertically
	if (adjustedPosition.y + adjustedSize.height > screenHeight) {
		adjustedPosition.y = Math.max(0, screenHeight - adjustedSize.height);
	}

	// Ensure window size doesn't exceed screen bounds
	if (adjustedSize.width > screenWidth) {
		adjustedSize.width = screenWidth - 50; // Leave some margin
		adjustedPosition.x = 25; // Center the window
	}

	if (adjustedSize.height > screenHeight) {
		adjustedSize.height = screenHeight - 100; // Leave some margin for taskbar
		adjustedPosition.y = 25; // Center the window
	}

	return {
		position: adjustedPosition,
		size: adjustedSize,
	};
};

export const createWindowState = (
	screenWidth: number,
	screenHeight: number,
) => {
	const config = getResponsiveWindowConfig(screenWidth, screenHeight);

	return {
		isMaximized: false,
		isMinimized: false,
		zIndex: 0,
		position: config.DEFAULT_POSITION,
		size: config.DEFAULT_SIZE,
	};
};

export const createWindow = (
	app: DesktopApp,
	screenWidth: number,
	screenHeight: number,
): DesktopWindow => ({
	id: app.id,
	icon: app.icon,
	name: app.name,
	...createWindowState(screenWidth, screenHeight),
});

export const getNextZIndex = (state: WindowsState): number => {
	const maxZIndex = Math.max(
		0,
		...Object.values(state).map((window) => window.zIndex ?? 0),
	);
	console.log(maxZIndex);
	return maxZIndex + 1;
};
