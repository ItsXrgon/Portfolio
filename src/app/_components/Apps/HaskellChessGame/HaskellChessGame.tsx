import { useRef } from "react";

import { Flex } from "@/components";

import AppHeader from "./AppHeader";
import Chessboard from "./Chessboard";
import Section from "./Section";
import "./index.css";

export default function HaskellChessGame() {
	const ref = useRef<HTMLDivElement | null>(null);
	return (
		<div
			className="w-full h-full relative bg-white font-chess chessboard-scrollbar rounded-lg overflow-hidden"
			ref={ref}
		>
			<Chessboard appRef={ref} />
			<Flex
				isColumn
				gap="4"
				className="w-full h-full p-4 overflow-y-auto chessboard-scrollbar relative"
			>
				<AppHeader />
				<Section title="Introduction">
					This project is a chess engine written in Haskell,
					demonstrating the power and elegance of functional
					programming in game AI.
				</Section>
				<Section title="How It Works">
					The engine uses a 2D array to represent the chess board,
					with pieces represented by characters (P, N, B, R, Q, K). It
					uses recursive functions to find all possible legal moves,
					ensuring moves are within bounds, not blocked, and don’t put
					the king in check. The board can be visualized in the
					terminal, and moves are made by inputting positions.
				</Section>
				<Section title="Why Haskell?">
					Haskell was chosen for its strong type system,
					expressiveness, and suitability for recursive
					algorithms—making it ideal for implementing chess logic.
				</Section>
				<Section title="Challenges & Solutions">
					Handling move legality and check detection in a purely
					functional way was challenging, but Haskell’s features made
					it manageable and elegant.
				</Section>
				<Section title="Results & Performance">
					The engine efficiently evaluates positions and implements
					minimax with alpha-beta pruning. It’s a demonstration of
					functional programming applied to classic game AI.
				</Section>
				<Section title="Links & Resources">
					<a
						href="https://github.com/ItsXrgon/Haskell-Chess-Game"
						target="_blank"
						className="text-blue-500 underline"
					>
						View on GitHub
					</a>
				</Section>
			</Flex>
		</div>
	);
}
