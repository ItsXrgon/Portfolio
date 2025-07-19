import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useMemo,
	useState,
} from "react";

import { Flex, Image, Label } from "@/components";
import { useWindow, useWindowManagement } from "@/store";

import Close from "./Buttons/Close";
import Minimize from "./Buttons/Minimize";
import Restore from "./Buttons/Restore";
import { TitleBarContextMenu } from "./TitleBarContextMenu";

export default function TitleBar({
	windowId,
	localPosition,
	localSize,
	setLocalPosition,
	setLocalSize,
}: {
	windowId: string;
	localPosition: { x: number; y: number };
	setLocalPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
	localSize: { width: number; height: number };
	setLocalSize: Dispatch<SetStateAction<{ width: number; height: number }>>;
}) {
	const window = useWindow(windowId)!;

	const [previousState, setPreviousState] = useState({
		size: window.size,
		position: window.position,
	});

	const { maximizeWindow, unMaximizeWindow } = useWindowManagement(windowId);
	const isMaximized = useMemo(() => window.isMaximized, [window]);

	useEffect(() => {
		if (!isMaximized) {
			setLocalSize(window.size);
			setLocalPosition(window.position);
		}
	}, [
		window.size,
		window.position,
		isMaximized,
		setLocalSize,
		setLocalPosition,
	]);

	const handleMaximize = useCallback(() => {
		setPreviousState({ size: localSize, position: localPosition });
		maximizeWindow();
	}, [localSize, localPosition, maximizeWindow]);

	const handleRestore = useCallback(() => {
		unMaximizeWindow();
		setLocalSize(previousState.size);
		setLocalPosition(previousState.position);
	}, [
		unMaximizeWindow,
		setLocalSize,
		previousState.size,
		previousState.position,
		setLocalPosition,
	]);

	const handleMinMax = useCallback(() => {
		if (isMaximized) {
			handleRestore();
		} else {
			handleMaximize();
		}
	}, [isMaximized, handleMaximize, handleRestore]);

	return (
		<TitleBarContextMenu appId={window.id}>
			<div
				className={`dragHandle flex flex-row h-9 overflow-hidden relative items-center justify-between bg-window-header-background text-window-header-text ${
					!isMaximized && "rounded-t-md"
				}`}
			>
				<Image
					icon={window.icon}
					width={32}
					height={32}
					alt={window.name}
					className="ml-1"
					onContextMenu={(e) => e.stopPropagation()}
				/>
				<Label className="absolute left-1/2 -translate-x-1/2">
					{window.name}
				</Label>
				<Flex
					align="center"
					className="h-full"
					onContextMenu={(e) => e.stopPropagation()}
				>
					<Minimize windowId={windowId} />
					<Restore handleMinMax={handleMinMax} windowId={windowId} />
					<Close windowId={windowId} />
				</Flex>
			</div>
		</TitleBarContextMenu>
	);
}
