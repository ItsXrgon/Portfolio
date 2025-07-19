import { HaskellOriginal } from "devicons-react";
import { useRef } from "react";

import { Flex, Label } from "@/components";

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
				gap="10"
				className="w-full h-full p-10 overflow-y-auto chessboard-scrollbar relative"
			>
				<AppHeader />
				<Section title="Project Overview">
					This project is a chess game implementation written in
					Haskell, developed as a university assignment to explore the
					functional programming paradigm. It demonstrates how
					Haskell&apos;s strong type system and pure functions can be
					used to implement game logic in an elegant and mathematical
					way.
					<br />
					<br />
					The project showcases fundamental chess mechanics including
					piece movement validation, board state management, and
					turn-based gameplay using algebraic notation (a1-h8).
				</Section>
				<Section title="Project Status">
					This project was completed as part of university coursework
					to learn functional programming concepts. It serves as a
					learning exercise demonstrating Haskell&apos;s capabilities
					for game development and algorithmic problem-solving.
				</Section>
				<Section title="Features">
					<Flex isColumn gap="6">
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								♔ Core Game Logic
							</Label>
							<ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
								<li>
									Complete chess board representation using
									algebraic notation
								</li>
								<li>
									All six piece types (Pawn, Knight, Bishop,
									Rook, Queen, King)
								</li>
								<li>Piece movement validation for each type</li>
								<li>
									Turn-based gameplay (White/Black
									alternating)
								</li>
								<li>
									Board state management and piece tracking
								</li>
							</ul>
						</div>
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								♖ Move Validation
							</Label>
							<ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
								<li>Legal move checking for all piece types</li>
								<li>Boundary checking (board limits)</li>
								<li>Path obstruction detection</li>
								<li>
									Pawn special moves (first move 2 squares)
								</li>
								<li>
									Diagonal and horizontal movement validation
								</li>
							</ul>
						</div>
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								♕ User Interface
							</Label>
							<ul className="list-disc list-inside space-y-2 text-gray-700 ml-2">
								<li>Terminal-based board visualization</li>
								<li>
									Clear piece representation (P, N, B, R, Q, K
									with color)
								</li>
								<li>Current player turn display</li>
								<li>Move suggestion functionality</li>
							</ul>
						</div>
					</Flex>
				</Section>
				<Section title="Development Process">
					<Flex isColumn gap="6">
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								⚡ Functional Programming Approach
							</Label>
							<Label className="text-gray-700 leading-relaxed">
								The project leverages Haskell&apos;s pure
								functions, pattern matching, and recursive
								algorithms to implement chess logic. Each piece
								type is represented as a data constructor, and
								move validation uses recursive functions to
								check paths and legality.
							</Label>
						</div>
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								🏗️ Data Structures
							</Label>
							<Label className="text-gray-700 leading-relaxed">
								The board is represented using tuples and lists,
								with pieces stored as algebraic data types. The
								game state tracks current player, white pieces,
								and black pieces separately for efficient
								manipulation.
							</Label>
						</div>
					</Flex>
				</Section>
				<Section title="Tech Stack">
					<Flex isColumn gap="6">
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								💻 Programming Language
							</Label>
							<Flex isWrapped gap="4">
								<Flex
									gap="2"
									align="center"
									className="bg-amber-50 border border-amber-900 p-3 rounded-lg hover:bg-amber-100 transition-colors"
								>
									<HaskellOriginal />
									<Label className="text-lg font-semibold text-amber-800">
										Haskell
									</Label>
								</Flex>
							</Flex>
						</div>
						<div className="pl-4 border-l-2 border-amber-900">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-amber-700 mb-3 block text-lg"
							>
								🔧 Key Concepts Demonstrated
							</Label>
							<Flex isWrapped gap="3">
								<Flex
									gap="2"
									align="center"
									className="bg-amber-50 border border-amber-900 p-2 rounded-lg hover:bg-amber-100 transition-colors"
								>
									<Label className="text-amber-800 font-medium">
										Algebraic Data Types
									</Label>
								</Flex>
								<Flex
									gap="2"
									align="center"
									className="bg-amber-50 border border-amber-900 p-2 rounded-lg hover:bg-amber-100 transition-colors"
								>
									<Label className="text-amber-800 font-medium">
										Pattern Matching
									</Label>
								</Flex>
								<Flex
									gap="2"
									align="center"
									className="bg-amber-50 border border-amber-900 p-2 rounded-lg hover:bg-amber-100 transition-colors"
								>
									<Label className="text-amber-800 font-medium">
										Recursive Functions
									</Label>
								</Flex>
								<Flex
									gap="2"
									align="center"
									className="bg-amber-50 border border-amber-900 p-2 rounded-lg hover:bg-amber-100 transition-colors"
								>
									<Label className="text-amber-800 font-medium">
										Pure Functions
									</Label>
								</Flex>
							</Flex>
						</div>
					</Flex>
				</Section>
				<Section title="Links & Resources">
					<a
						href="https://github.com/ItsXrgon/Haskell-Chess-Game"
						target="_blank"
						className="text-blue-500 underline"
					>
						🔗 View on GitHub
					</a>
				</Section>
			</Flex>
		</div>
	);
}
