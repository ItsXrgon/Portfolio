import { Roboto_Mono } from "next/font/google";
import { useCallback, useEffect, useRef } from "react";

import { Flex, Label } from "@/components/ui";

import { useTerminal } from "./useTerminal";

const robotoMono = Roboto_Mono({
	subsets: ["latin"],
	display: "swap",
});

export default function Terminal() {
	const {
		input,
		setInput,
		commandHistory,
		outputHistory,
		onKeyDown,
		fontColor,
		path,
		setPath,
	} = useTerminal();

	const inputRef = useRef<HTMLInputElement>(null);

	const focusInput = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		focusInput();
		setPath("home");
	}, [focusInput, setPath]);

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
				enter &quot;help&quot; for a list of commands.
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
