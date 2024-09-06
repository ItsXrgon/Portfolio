import { Roboto_Mono } from "next/font/google";
import { useCallback, useEffect, useRef, useState } from "react";

import Flex from "@/app/UIComponents/Flex";
import Label from "@/app/UIComponents/Label";

//👇 Configure our font object
const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
});

export default function Terminal() {
	const [input, setInput] = useState("");
	const [commandHistory, setCommandHistory] = useState<string[]>([]);
	const [outputHistory, setOutputHistory] = useState<string[]>([]);
	const [cursor, setCursor] = useState(0);
	const [fontColor] = useState("white");
	const [path, setPath] = useState("home");

	const inputRef = useRef<HTMLInputElement>(null);

	const focusInput = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		focusInput();
		setPath("home");
	}, [focusInput]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === "Enter") {
				setCommandHistory([...commandHistory, input]);
				setInput("");
				setCursor(cursor + 1);
				setOutputHistory([...outputHistory, ""]);
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
		},
		[cursor, commandHistory, input, setOutputHistory],
	);

	return (
		<Flex
			isColumn
			className="scrollbar-hidden w-full overflow-y-scroll bg-black p-1 text-white"
			onClick={() => focusInput()}
			style={{
				color: fontColor,
				...robotoMono.style,
			}}
		>
			<Label.Mid200>
				You are currently in the {path} directory.
				<br />
				enter "help" for a list of commands.
			</Label.Mid200>
			{commandHistory.map((line, index) => (
				<>
					<Label.Mid200 key={`command-${index}`}>{line}</Label.Mid200>
					<Label.Mid200 key={`output-${index}`}>
						{outputHistory[index]}
					</Label.Mid200>
					<div key={`space-${index}`} className="h-[14px]" />
				</>
			))}
			<Flex isColumn>
				<Flex gap="1">
					<Label.Mid200>XrgOs</Label.Mid200>
					<Label.Mid200>{`~${path}`}</Label.Mid200>
				</Flex>
				<Flex gap="2" align="center">
					<Label.Mid200 className="self-end">$</Label.Mid200>
					<input
						ref={inputRef}
						className="w-full border-0 border-none bg-transparent p-0 text-[14px] font-medium tracking-[-0.42px] outline-none"
						value={input}
						onChange={(e) => setInput(e.target.value)}
						onKeyDown={(e) => onKeyDown(e.nativeEvent)}
					/>
				</Flex>
			</Flex>
		</Flex>
	);
}
