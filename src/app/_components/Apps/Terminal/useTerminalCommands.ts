import { useState } from "react";

import { commands } from "./commands";

export default function useTerminalCommands() {
	const [history, setHistory] = useState<string[]>([]);
	const [input, setInput] = useState("");

	const handleCommand = async (cmd: string) => {
		setHistory((prev) => [...prev, `user@portfolio:~$ ${cmd}`]);

		const [commandName, ...args] = cmd.trim().split(" ");
		if (!commandName) {
			setHistory((prev) => [...prev, `No command entered.`]);
			setInput("");
			return;
		}
		const command = commands[commandName];

		if (!command) {
			setHistory((prev) => [
				...prev,
				`Command not found: ${commandName}`,
			]);
			setInput("");
			return;
		}

		try {
			// For echo, pass the rest of the input as a string; for help, pass nothing
			let result;
			if (commandName === "echo") {
				result = await command.handler(args.join(" "));
			} else {
				result = await command.handler(undefined);
			}
			if (result !== undefined && result !== null && result !== "") {
				setHistory((prev) => [...prev, String(result)]);
			}
		} catch (err) {
			setHistory((prev) => [...prev, `Error: ${String(err)}`]);
		}
		setInput("");
	};

	return {
		history,
		input,
		setInput,
		handleCommand,
	};
}
