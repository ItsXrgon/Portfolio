import { useCallback, useRef } from "react";

import { Flex } from "@/components";

import TerminalInput from "./TerminalInput";
import TerminalOutput from "./TerminalOutput";
import "./index.css";
import useTerminalCommands from "./useTerminalCommands";

export default function Terminal() {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const { history, input, setInput, handleCommand } = useTerminalCommands();

	const handleFocusInput = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	return (
		<Flex
			isColumn
			className="h-full w-full bg-[#181c1f] p-4 rounded-lg terminal-font terminal-scrollbar overflow-hidden"
			onClick={handleFocusInput}
		>
			<TerminalOutput history={history} />
			<TerminalInput
				input={input}
				setInput={setInput}
				onSubmit={handleCommand}
				inputRef={inputRef}
			/>
		</Flex>
	);
}
