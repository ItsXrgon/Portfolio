import { useEffect, useMemo } from "react";

import { useScreenSize } from "@/hooks";
import { useWindow, useWindowManagement } from "@/store/hooks";
import {
	getResponsiveWindowConfig,
	validateAndAdjustWindowBounds,
} from "@/store/slices/windowsSlice/utils";

interface UseResponsiveWindowProps {
	windowId: string;
	localPosition: { x: number; y: number };
	localSize: { width: number; height: number };
	setLocalPosition: (position: { x: number; y: number }) => void;
	setLocalSize: (size: { width: number; height: number }) => void;
}

export function useResponsiveWindow({
	windowId,
	localPosition,
	localSize,
	setLocalPosition,
	setLocalSize,
}: UseResponsiveWindowProps) {
	const window = useWindow(windowId);
	const isMaximized = useMemo(() => window?.isMaximized, [window]);
	const isMinimized = useMemo(() => window?.isMinimized, [window]);
	const { width: screenWidth, height: screenHeight } = useScreenSize();
	const { relocateWindow } = useWindowManagement(windowId);

	// Get responsive configuration based on screen size
	const responsiveConfig = useMemo(
		() => getResponsiveWindowConfig(screenWidth, screenHeight),
		[screenWidth, screenHeight],
	);

	// Adjust window bounds when screen size changes
	useEffect(() => {
		if (!isMaximized && !isMinimized) {
			const { position: adjustedPosition, size: adjustedSize } =
				validateAndAdjustWindowBounds(
					localPosition,
					localSize,
					screenWidth,
					screenHeight,
				);

			// Only update if adjustments were made
			if (
				adjustedPosition.x !== localPosition.x ||
				adjustedPosition.y !== localPosition.y ||
				adjustedSize.width !== localSize.width ||
				adjustedSize.height !== localSize.height
			) {
				setLocalPosition(adjustedPosition);
				setLocalSize(adjustedSize);
				relocateWindow(adjustedPosition, adjustedSize);
			}
		}
	}, [
		screenWidth,
		screenHeight,
		isMaximized,
		isMinimized,
		localPosition,
		localSize,
		relocateWindow,
		setLocalPosition,
		setLocalSize,
	]);

	return {
		responsiveConfig,
		screenWidth,
		screenHeight,
	};
}
