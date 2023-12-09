import { useCallback, useEffect, useRef, useState } from "react";

export default function Terminal() {
	const [input, setInput] = useState("");
	const [history, setHistory] = useState<string[]>([]);
	const [cursor, setCursor] = useState(0);
	const [fontColor, setFontColor] = useState("white");
	const [path, setPath] = useState("home");

	const inputRef = useRef<HTMLInputElement>(null);

	const focusInput = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		focusInput();
	}, []);

	return (
		<div
			className="scrollbar-hidden overflow-y-scroll bg-black p-2"
			onClick={() => focusInput()}
		>
			<label className="text-white">
				You are currently in the {path} directory.
				<br />
				enter "help" for a list of commands.
			</label>
			{history.map((line, index) => (
				<div key={index} className="text-white">
					{line}
				</div>
			))}
			<div className="flex">
				<label>
					<span className="text-white">
						{path}
						{">"}
					</span>
				</label>
				<input
					ref={inputRef}
					className="w-full bg-black text-white"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => {
						if (e.key === "Enter") {
							setHistory([...history, input]);
							setInput("");
							setCursor(cursor + 1);
						}
						if (e.key === "ArrowUp") {
							setInput(history[cursor - 1]);
							setCursor(cursor - 1);
						}
					}}
				/>
			</div>
		</div>
	);
}
