"use client";

import { Maximize, Minimize, Minus, X } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DraggableData, Rnd } from "react-rnd";

import { TopBarContextMenu } from "@/app/ContextMenus";
import About from "@/app/DesktopApps/About/About";
import Github from "@/app/DesktopApps/Github/Github";
import Settings from "@/app/DesktopApps/Settings/Settings";
import Terminal from "@/app/DesktopApps/Terminal/Terminal";
import {
	closeApp,
	maximizeApp,
	minimizeApp,
	pushToFront,
	relocateWindow,
	unMaximizeApp,
} from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";
import { TWindow } from "@/app/types";
import Icon from "@/utils/Icon";

interface WindowProps {
	app: TWindow;
	zIndex: number;
}

export default function Window({ app, zIndex }: WindowProps) {
	const dispatch = useAppDispatch();
	const [dragging, setDragging] = useState(false);
	const [localSize, setLocalSize] = useState(app.windowState.size);
	const [localPosition, setLocalPosition] = useState(
		app.windowState.position,
	);
	const [previousState, setPreviousState] = useState({
		size: app.windowState.size,
		position: app.windowState.position,
	});
	const rndRef = useRef<Rnd>(null);

	const isMaximized = useMemo(() => app.windowState.isMaximized, [app]);

	useEffect(() => {
		if (!isMaximized) {
			setLocalSize(app.windowState.size);
			setLocalPosition(app.windowState.position);
		}
	}, [app.windowState.size, app.windowState.position, isMaximized]);

	function renderApp() {
		switch (app.name) {
			case "Terminal":
				return <Terminal />;
			case "Settings":
				return <Settings />;
			case "Github":
				return <Github />;
			case "About":
				return <About />;
			default:
				return (
					<div className="bg-black">
						<div className="text-white">
							This is a default page!
						</div>
					</div>
				);
		}
	}

	const onDragStart = useCallback(() => {
		setDragging(true);
		dispatch(pushToFront({ id: app.id }));
	}, [app.id, dispatch]);

	const onDrag = useCallback((_: unknown, { x, y }: DraggableData) => {
		setLocalPosition({ x, y });
	}, []);

	const onDragStop = useCallback(() => {
		dispatch(pushToFront({ id: app.id }));
		setDragging(false);
		dispatch(
			relocateWindow({
				windowId: app.id,
				position: localPosition,
				size: localSize,
			}),
		);
	}, [app.id, dispatch, localPosition, localSize]);

	const onResize = useCallback(
		(_: unknown, __: unknown, ref: HTMLElement) => {
			setLocalSize({
				width: ref.offsetWidth,
				height: ref.offsetHeight,
			});
		},
		[],
	);

	const onResizeStop = useCallback(() => {
		dispatch(
			relocateWindow({
				windowId: app.id,
				position: localPosition,
				size: localSize,
			}),
		);
	}, [app.id, dispatch, localPosition, localSize]);

	const handleMaximize = useCallback(() => {
		setPreviousState({ size: localSize, position: localPosition });
		dispatch(maximizeApp({ id: app.id }));
	}, [dispatch, app.id, localSize, localPosition]);

	const handleRestore = useCallback(() => {
		dispatch(unMaximizeApp({ id: app.id }));
		setLocalSize(previousState.size);
		setLocalPosition(previousState.position);
	}, [dispatch, app.id, previousState]);

	const handleMinimize = useCallback(() => {
		dispatch(minimizeApp({ id: app.id }));
	}, [dispatch, app.id]);

	const handleClose = useCallback(() => {
		dispatch(closeApp({ id: app.id }));
	}, [dispatch, app.id]);

	return (
		<Rnd
			ref={rndRef}
			className={`fixed ${isMaximized && "rounded-md"}`}
			style={{ zIndex: dragging ? 998 : zIndex }}
			size={isMaximized ? { width: "100%", height: "100%" } : localSize}
			position={isMaximized ? { x: 0, y: 0 } : localPosition}
			onMouseDown={() => dispatch(pushToFront({ id: app.id }))}
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
			key={app.id}
			disableDragging={isMaximized}
		>
			<TopBarContextMenu appId={app.id}>
				<div
					className={`dragHandle flex flex-row items-center justify-between bg-window-header-background px-2 py-1 text-window-header-text ${
						!isMaximized && "rounded-t-md"
					}`}
				>
					<Icon icon={app.icon} width={36} height={36} />
					<div className="flex items-center">
						<div className="cursor-pointer p-1 text-window-header-icon-default hover:text-window-header-icon-hovered active:text-window-header-icon-pressed">
							<Minus size={24} onClick={handleMinimize} />
						</div>
						<div
							className="cursor-pointer p-1 text-window-header-icon-default hover:text-window-header-icon-hovered active:text-window-header-icon-pressed"
							onClick={() =>
								isMaximized ? handleRestore() : handleMaximize()
							}
						>
							{isMaximized ? (
								<Minimize size={24} />
							) : (
								<Maximize size={24} />
							)}
						</div>
						<div
							className="cursor-pointer p-1 text-window-header-icon-default hover:text-window-header-icon-hovered active:text-window-header-icon-pressed"
							onClick={handleClose}
						>
							<X size={24} />
						</div>
					</div>
				</div>
			</TopBarContextMenu>
			<div
				className="flex"
				style={{
					height: isMaximized
						? "calc(100% - 37px)"
						: localSize.height - 37,
					width: "100%",
				}}
			>
				{renderApp()}
			</div>
		</Rnd>
	);
}
