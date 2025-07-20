import { useEffect, useState } from "react";

interface ScreenSize {
	width: number;
	height: number;
}

export function useScreenSize(): ScreenSize {
	const [screenSize, setScreenSize] = useState<ScreenSize>({
		width: typeof window !== "undefined" ? window.innerWidth : 1920,
		height: typeof window !== "undefined" ? window.innerHeight : 1080,
	});

	useEffect(() => {
		function updateScreenSize() {
			setScreenSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}

		// Set initial size
		updateScreenSize();

		// Add event listener
		window.addEventListener("resize", updateScreenSize);

		// Cleanup
		return () => window.removeEventListener("resize", updateScreenSize);
	}, []);

	return screenSize;
}
