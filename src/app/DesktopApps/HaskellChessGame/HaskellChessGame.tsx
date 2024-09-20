import { HaskellOriginal } from "devicons-react";
import React from "react";

import { Flex, Label } from "@/app/UIComponents";

export default function HaskellChessGame() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-scroll bg-white p-4"
		>
			<Flex isColumn gap="2">
				<Label.Big400>What is this?</Label.Big400>
				<Label.Mid300>
					Chess game made with Haskell as a univeristy project, The
					app supports visualizing the chess board, moving a piece
					according to its movement rules, and suggesting possible
					legal moves for any piece on the board. Find it here{" "}
					<a
						href="https://github.com/ItsXrgon/Haskell-Chess-Game"
						target="_blank"
						className="text-blue-500 underline"
					>
						here
					</a>
					.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>How does this work?</Label.Big400>
				<Label.Mid300>
					The app uses a 2D array to represent the chess board, and
					the pieces are represented by P, N, B, R, Q and K
					characters. The app uses a recursive function to find all
					possible legal moves for a piece on the board, checking if
					the move is within the bounds of the board, if the move is
					not blocked by another piece, and if the move is not putting
					the king in check.
					<br />
					The app also supports visualizing the board using the
					terminal, and moving pieces by inputting the piece's
					position and the desired position.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>Tech stack</Label.Big400>
				<Flex isWrapped gap="4">
					<Flex gap="1" align="center">
						<HaskellOriginal size={48} />
						<Label.Mid400>Haskell</Label.Mid400>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
