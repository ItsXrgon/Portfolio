import React from "react";

import { Flex } from "@/components";

type TerminalInputProps = {
	input: string;
	setInput: (val: string) => void;
	onSubmit: (cmd: string) => void;
	inputRef: React.RefObject<HTMLInputElement | null>;
};

export default function TerminalInput({
	input,
	setInput,
	onSubmit,
	inputRef,
}: TerminalInputProps) {
	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			onSubmit(input);
		}
	};

	return (
		<Flex align="center">
			<span className="text-[#00ffea] mr-2">user@portfolio:~$</span>
			<input
				ref={inputRef}
				className="bg-transparent border-none outline-none w-full text-[#39ff14]"
				value={input}
				onChange={(e) => setInput(e.target.value)}
				onKeyDown={handleKeyDown}
				autoFocus
			/>
		</Flex>
	);
}
