import { useMemo } from "react";

import { useScreenSize } from "./useScreenSize";

// Responsive breakpoints (matching the ones in window utils)
export const RESPONSIVE_BREAKPOINTS = {
	xs: 480, // Mobile
	sm: 768, // Tablet
	md: 1024, // Small desktop
	lg: 1440, // Large desktop
	xl: 1920, // Extra large
} as const;

export type Breakpoint = keyof typeof RESPONSIVE_BREAKPOINTS;

/**
 * Hook to get current responsive breakpoint and utilities
 */
export function useResponsiveBreakpoints() {
	const { width } = useScreenSize();

	const currentBreakpoint = useMemo((): Breakpoint => {
		if (width <= RESPONSIVE_BREAKPOINTS.xs) return "xs";
		if (width <= RESPONSIVE_BREAKPOINTS.sm) return "sm";
		if (width <= RESPONSIVE_BREAKPOINTS.md) return "md";
		if (width <= RESPONSIVE_BREAKPOINTS.lg) return "lg";
		return "xl";
	}, [width]);

	const isMobile = useMemo(
		() => currentBreakpoint === "xs",
		[currentBreakpoint],
	);
	const isTablet = useMemo(
		() => currentBreakpoint === "sm",
		[currentBreakpoint],
	);
	const isDesktop = useMemo(
		() =>
			currentBreakpoint === "md" ||
			currentBreakpoint === "lg" ||
			currentBreakpoint === "xl",
		[currentBreakpoint],
	);
	const isLargeScreen = useMemo(
		() => currentBreakpoint === "lg" || currentBreakpoint === "xl",
		[currentBreakpoint],
	);

	return {
		currentBreakpoint,
		isMobile,
		isTablet,
		isDesktop,
		isLargeScreen,
		breakpoints: RESPONSIVE_BREAKPOINTS,
	};
}
