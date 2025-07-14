"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DraggableData, Rnd, RndResizeCallback } from "react-rnd";

import { useWindow, useWindowManagement } from "@/store";

import Content from "./Content/Content";
import TitleBar from "./TitleBar/TitleBar";

interface WindowProps {
	windowId: string;
	zIndex: number;
}

export default function Window({ windowId, zIndex }: WindowProps) {
	const window = useWindow(windowId)!;

	const [dragging, setDragging] = useState(false);
	const [localSize, setLocalSize] = useState(window.size);
	const [localPosition, setLocalPosition] = useState(window.position);
	const rndRef = useRef<Rnd>(null);

	const { bringToFront, relocateWindow } = useWindowManagement(windowId);
	const isMaximized = useMemo(() => window.isMaximized, [window]);
	const isMinimized = useMemo(() => window.isMinimized, [window]);

	useEffect(() => {
		if (!isMaximized) {
			setLocalSize(window.size);
			setLocalPosition(window.position);
		}
	}, [window.size, window.position, isMaximized]);

	const onDragStart = useCallback(() => {
		setDragging(true);
		bringToFront();
	}, [bringToFront]);

	const onDrag = useCallback((_: unknown, { x, y }: DraggableData) => {
		setLocalPosition({ x, y });
	}, []);

	const onDragStop = useCallback(() => {
		bringToFront();
		setDragging(false);
		relocateWindow(localPosition, localSize);
	}, [bringToFront, relocateWindow, localPosition, localSize]);

	const onResize: RndResizeCallback = useCallback(
		(_, __, ref: HTMLElement) => {
			setLocalSize({
				width: ref.offsetWidth,
				height: ref.offsetHeight,
			});
		},
		[],
	);

	const onResizeStop = useCallback(() => {
		relocateWindow(localPosition, localSize);
	}, [localPosition, localSize, relocateWindow]);

	return (
		<Rnd
			ref={rndRef}
			className="rounded-md"
			style={{
				zIndex: dragging ? 998 : zIndex,
				display: isMinimized ? "none" : "inherit",
			}}
			size={isMaximized ? { width: "100%", height: "100%" } : localSize}
			position={isMaximized ? { x: 0, y: 0 } : localPosition}
			onMouseDown={bringToFront}
			onDragStart={onDragStart}
			onDrag={onDrag}
			onDragStop={onDragStop}
			dragHandleClassName="dragHandle"
			enableResizing={!isMaximized}
			minHeight={400}
			minWidth={600}
			bounds={"parent"}
			onResize={onResize}
			onResizeStop={onResizeStop}
			key={window.id}
			disableDragging={isMaximized}
		>
			<TitleBar
				windowId={window.id}
				localPosition={localPosition}
				localSize={localSize}
				setLocalPosition={setLocalPosition}
				setLocalSize={setLocalSize}
			/>
			<div
				className="flex"
				style={{
					height: isMaximized
						? "calc(100% - 37px)"
						: localSize.height - 37,
					width: "100%",
				}}
			>
				<Content windowId={window.id} />
			</div>
		</Rnd>
	);
}
