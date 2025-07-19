// Command interface and factory for typed commands

export interface Command<I = void, O = string> {
	name: string;
	description: string;
	usage?: string;
	handler: (input: I) => O | Promise<O>;
}

export function createCommand<I = void, O = string>(config: {
	name: string;
	description: string;
	usage?: string;
	handler: (input: I) => O | Promise<O>;
}): Command<I, O> {
	return config;
}

// Example: help command (no input, string output)
export const helpCommand: Command<unknown, unknown> = createCommand({
	name: "help",
	description: "List available commands",
	usage: "help",
	handler: () =>
		"Available commands: help, echo, about, projects, clear, theme, lang",
});

// Example: echo command (string input, string output)
export const echoCommand: Command<string, string> = createCommand({
	name: "echo",
	description: "Echoes the input text.",
	usage: "echo [text]",
	handler: (input: string) => input,
});

// Export all commands in a map for easy lookup
export const commands: Record<string, Command<unknown, unknown>> = {
	help: helpCommand,
	echo: echoCommand as Command<unknown, unknown>,
};
