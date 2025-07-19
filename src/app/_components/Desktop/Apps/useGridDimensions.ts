import { useEffect, useMemo, useRef, useState } from "react";

// Grid cell size in pixels
const GRID_CELL_SIZE_WIDTH = 100;
const GRID_CELL_SIZE_HEIGHT = 150;

/**
 * Hook to calculate grid dimensions based on container size
 * @returns Object containing grid dimensions, counts, and arrays
 */
export function useGridDimensions() {
	const containerRef = useRef<HTMLDivElement>(null);
	const [dimensions, setDimensions] = useState({
		width: 0,
		height: 0,
	});

	// Track container dimensions
	useEffect(() => {
		function updateSize() {
			if (containerRef?.current) {
				const { width, height } =
					containerRef.current.getBoundingClientRect();
				setDimensions({ width, height });
			}
		}
		updateSize();
		const resizeObserver = new window.ResizeObserver(updateSize);
		if (containerRef?.current) resizeObserver.observe(containerRef.current);
		return () => resizeObserver.disconnect();
	}, []);

	// Calculate grid dimensions based on container size
	const columnCount = Math.floor(dimensions.width / GRID_CELL_SIZE_WIDTH);
	const rowCount = Math.floor(dimensions.height / GRID_CELL_SIZE_HEIGHT);

	// Create arrays for rows and columns
	const rows = useMemo(
		() => Array.from({ length: rowCount }, (_, i) => i),
		[rowCount],
	);
	const columns = useMemo(
		() => Array.from({ length: columnCount }, (_, i) => i),
		[columnCount],
	);

	return {
		dimensions,
		columnCount,
		rowCount,
		rows,
		columns,
		containerRef,
	};
}
