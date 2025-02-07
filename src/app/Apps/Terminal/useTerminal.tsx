"use client";

import { useState } from "react";

import { Flex } from "@/components/ui";

import { LS } from "./Commands/LS";

export function useTerminal() {
	const [input, setInput] = useState("");
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [outputHistory, setOutputHistory] = useState<JSX.Element[]>([]);

	const [cursor, setCursor] = useState(0);
	const [fontColor] = useState("white");
	const [path, setPath] = useState("/");

	function getTerminalOutput(input: string) {
		const [command, ...args] = input.split(" ");

		if (command in terminalCommands) {
			return terminalCommands[
				command as keyof typeof terminalCommands
			].function();
		}

		return (
			<Flex isColumn gap="1">
				{`bash: ${command}: command not found`}
				{`Type 'help' for a list of available commands`}
			</Flex>
		);
	}

	function onKeyDown(e: KeyboardEvent) {
		if (e.key === "Enter") {
			setCommandHistory([...commandHistory, input]);
			setOutputHistory([...outputHistory, getTerminalOutput(input)]);
			setInput("");
		}
		if (e.key === "ArrowUp") {
			if (cursor === 0) return;
			setInput(commandHistory[cursor - 1]);
			setCursor(cursor - 1);
		}
		if (e.key === "ArrowDown") {
			if (cursor === commandHistory.length - 1) {
				setInput("");
			} else {
				setInput(commandHistory[cursor + 1]);
				setCursor(cursor + 1);
			}
		}
	}

	return {
		input,
		setInput,
		commandHistory,
		setCommandHistory,
		outputHistory,
		setOutputHistory,
		cursor,
		setCursor,
		fontColor,
		path,
		setPath,
		getTerminalOutput,
		onKeyDown,
	};
}

const terminalCommands = {
	ls: {
		message: "List directory contents",
		function: LS,
	},
	cd: {
		message: "Change the current directory",
		function: LS,
	},
	pwd: {
		message: "Print name of current/working directory",
		function: LS,
	},
	cat: {
		message: "Concatenate and display the content of files",
		function: LS,
	},
	touch: {
		message: "Create a file",
		function: LS,
	},
	mkdir: {
		message: "Create a directory",
		function: LS,
	},
	rm: {
		message: "Remove files or directories",
		function: LS,
	},
	rmdir: {
		message: "Remove empty directories",
		function: LS,
	},
	mv: {
		message: "Move files",
		function: LS,
	},
	cp: {
		message: "Copy files",
		function: LS,
	},
	clear: {
		message: "Clear the terminal screen",
		function: LS,
	},
	help: {
		message: "Display help information",
		function: LS,
	},
};
