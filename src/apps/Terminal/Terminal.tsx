import { useCallback, useEffect, useRef, useState } from 'react';
import getTerminalOuput from './Commands';

export default function Terminal() {
	const [input, setInput] = useState('');
	const [history, setHistory] = useState<string[]>([]);
	const [cursor, setCursor] = useState(0);
	const [fontColor, setFontColor] = useState('white');
	const [path, setPath] = useState('home');

	const inputRef = useRef<HTMLInputElement>(null);

	const focusInput = useCallback(() => {
		inputRef.current?.focus();
	}, []);

	useEffect(() => {
		focusInput();
	}, []);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Enter') {
				setHistory([...history, input, getTerminalOuput(input, setFontColor)]);
				setInput('');
				setCursor(cursor + 1);
			}
			if (e.key === 'ArrowUp') {
				if (cursor === 0) return;
				setInput(history[cursor - 1]);
				setCursor(cursor - 1);
			}
			if (e.key === 'ArrowDown') {
				if (cursor === history.length - 1) return;
				setInput(history[cursor + 1]);
				setCursor(cursor + 1);
			}
		},
		[cursor, history, input]
	);

	return (
		<div
			className="scrollbar-hidden h-full w-full overflow-y-scroll bg-black p-2"
			onClick={() => focusInput()}
			style={{
				color: fontColor,
			}}
		>
			<label>
				You are currently in the {path} directory.
				<br />
				enter "help" for a list of commands.
			</label>
			{history.map((line, index) => (
				<div key={index}>{line}</div>
			))}
			<div className="flex">
				<label>
					<span>
						{path}
						{'>'}
					</span>
				</label>
				<input
					ref={inputRef}
					className="w-full bg-black"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyDown={(e) => onKeyDown(e.nativeEvent)}
				/>
			</div>
		</div>
	);
}
