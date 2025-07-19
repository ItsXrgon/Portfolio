import { useEffect, useMemo, useState } from "react";

const LIGHT = "#f0d9b5";
const DARK = "#b58863";
const SQUARE_SIZE = 64;

// Chess pieces for random placement
const CHESS_PIECES = [
	"♔",
	"♕",
	"♖",
	"♗",
	"♘",
	"♙",
	"♚",
	"♛",
	"♜",
	"♝",
	"♞",
	"♟",
];

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

	// Generate chess pieces once and memoize them
	const chessPiecePositions = useMemo(() => {
		const positions = new Map();
		const totalSquares = rows * cols;

		for (let i = 0; i < totalSquares; i++) {
			if (Math.random() < 0.25) {
				// 25% chance for a chess piece
				const randomPiece =
					CHESS_PIECES[
						Math.floor(Math.random() * CHESS_PIECES.length)
					];
				positions.set(i, randomPiece);
			}
		}

		return positions;
	}, [rows, cols]); // Only regenerate when dimensions change

	return (
		<div
			className="overflow-hidden absolute w-full h-full grid "
			style={{
				zIndex: 0,
				gridTemplateColumns: `repeat(${cols}, ${SQUARE_SIZE}px)`,
				gridTemplateRows: `repeat(${rows}, ${SQUARE_SIZE}px)`,
			}}
		>
			{Array.from({ length: rows * cols }).map((_, i) => {
				const x = i % cols;
				const y = Math.floor(i / cols);
				const isLight = (x + y) % 2 === 0;
				const chessPiece = chessPiecePositions.get(i);

				return (
					<div
						key={i}
						style={{
							width: SQUARE_SIZE,
							height: SQUARE_SIZE,
							background: isLight ? LIGHT : DARK,
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							fontSize: "48px",
							color: isLight ? "#8B4513" : "#F5DEB3",
							textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
						}}
					>
						{chessPiece}
					</div>
				);
			})}
		</div>
	);
}
