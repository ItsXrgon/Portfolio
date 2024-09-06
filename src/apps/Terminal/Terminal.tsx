import { useCallback, useEffect, useRef, useState } from "react";
import Label from "../../globalComponents/Label";
import Flex from "../../globalComponents/Flex";

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
		setPath("home");
	}, []);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Enter") {
				setHistory([...history, input]);
				setInput("");
				setCursor(cursor + 1);
			}
			if (e.key === "ArrowUp") {
				if (cursor === 0) return;
				setInput(history[cursor - 1]);
				setCursor(cursor - 1);
			}
			if (e.key === "ArrowDown") {
				if (cursor === history.length - 1) {
					setInput("");
				} else {
					setInput(history[cursor + 1]);
					setCursor(cursor + 1);
				}
			}
		},
		[cursor, history, input],
	);

	return (
		<div
			className="scrollbar-hidden w-full overflow-y-scroll bg-black p-1"
			onClick={() => focusInput()}
			style={{
				color: fontColor,
				fontFamily: "Roboto Mono",
			}}
		>
			<Label.Mid200>
				You are currently in the {path} directory.
				<br />
				enter "help" for a list of commands.
			</Label.Mid200>
			{history.map((line, index) => (
				<div key={index}>{line}</div>
			))}
			<Flex isColumn gap="0">
				<Flex gap="1">
					<Label.Mid200>XrgOs</Label.Mid200>
					<Label.Mid200>{`~${path}`}</Label.Mid200>
				</Flex>
				<Flex gap="2">
					<Label.Mid200>$</Label.Mid200>
					<input
						ref={inputRef}
						className="w-full border-0 border-none bg-transparent outline-none"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => onKeyDown(e.nativeEvent)}
					/>
				</Flex>
			</Flex>
		</div>
	);
}
