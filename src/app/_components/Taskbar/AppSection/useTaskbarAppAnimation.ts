import { TargetAndTransition } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export type BounceDirection = "up" | "down" | "none";

export const BOUNCE_UP: TargetAndTransition = {
	scale: [1, 1.18, 0.88, 1],
	y: [0, -6, 0, 0],
};

export const BOUNCE_DOWN: TargetAndTransition = {
	scale: [1, 1.18, 0.88, 1],
	y: [0, 6, 0, 0],
};

export const BOUNCE_NONE: TargetAndTransition = {
	scale: 1,
	y: 0,
};

/**
 * Determines the bounce animation direction for a taskbar app icon.
 * @returns {BounceDirection}
 * - "up" if the window is opening from closed, or being unminimized (restored)
 * - "down" if the window is being minimized (but remains open)
 * - "none" for all other state changes (including unrelated or closed transitions)
 */
export function getBounceDirection(
	prevIsWindowOpen: boolean,
	prevIsMinimized: boolean,
	isWindowOpen: boolean,
	isMinimized: boolean,
): BounceDirection {
	const isOpeningFromClosed =
		!prevIsWindowOpen && isWindowOpen && !isMinimized;
	const isUnminimizing =
		prevIsWindowOpen && prevIsMinimized && isWindowOpen && !isMinimized;
	const isMinimizing =
		prevIsWindowOpen && !prevIsMinimized && isWindowOpen && isMinimized;

	if (isOpeningFromClosed) {
		return "up";
	} else if (isUnminimizing) {
		return "up";
	} else if (isMinimizing) {
		return "down";
	} else {
		return "none";
	}
}

export function useTaskbarAppAnimation(
	isWindowOpen: boolean,
	isMinimized: boolean,
) {
	const prevIsMinimized = useRef(isMinimized);
	const prevIsWindowOpen = useRef(isWindowOpen);
	const [bounceDirection, setBounceDirection] =
		useState<BounceDirection>("none");

	useEffect(() => {
		setBounceDirection(
			getBounceDirection(
				prevIsWindowOpen.current,
				prevIsMinimized.current,
				isWindowOpen,
				isMinimized,
			),
		);
		prevIsMinimized.current = isMinimized;
		prevIsWindowOpen.current = isWindowOpen;
	}, [isMinimized, isWindowOpen]);

	let animateProps: TargetAndTransition;
	if (bounceDirection === "up") {
		animateProps = BOUNCE_UP;
	} else if (bounceDirection === "down") {
		animateProps = BOUNCE_DOWN;
	} else {
		animateProps = BOUNCE_NONE;
	}

	return animateProps;
}
