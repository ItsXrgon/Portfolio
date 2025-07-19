import { useEffect, useState } from "react";

const LIGHT = "#f0d9b5";
const DARK = "#b58863";
const SQUARE_SIZE = 64;

export default function Chessboard({
	appRef,
}: {
	appRef: React.RefObject<HTMLDivElement | null>;
}) {
	const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

	useEffect(() => {
		function updateSize() {
			if (appRef?.current) {
				const { width, height } =
					appRef.current.getBoundingClientRect();
				setDimensions({ width, height });
			}
		}
		updateSize();
		const resizeObserver = new window.ResizeObserver(updateSize);
		if (appRef?.current) resizeObserver.observe(appRef.current);
		return () => resizeObserver.disconnect();
	}, [appRef]);

	const cols = Math.ceil(dimensions.width / SQUARE_SIZE);
	const rows = Math.ceil(dimensions.height / SQUARE_SIZE);

	return (
		<div
			className="overflow-hidden absolute w-full h-full grid "
			style={{
				zIndex: 0,
				opacity: 0.25,
				gridTemplateColumns: `repeat(${cols}, ${SQUARE_SIZE}px)`,
				gridTemplateRows: `repeat(${rows}, ${SQUARE_SIZE}px)`,
			}}
		>
			{Array.from({ length: rows * cols }).map((_, i) => {
				const x = i % cols;
				const y = Math.floor(i / cols);
				const isLight = (x + y) % 2 === 0;
				return (
					<div
						key={i}
						style={{
							width: SQUARE_SIZE,
							height: SQUARE_SIZE,
							background: isLight ? LIGHT : DARK,
						}}
					/>
				);
			})}
		</div>
	);
}
