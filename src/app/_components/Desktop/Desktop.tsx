"use client";

import { DragEndEvent } from "@dnd-kit/core";
import { useMemo } from "react";

import DragAndDropProvider from "@/providers/DragAndDropProvider";
import {
	GRID_CONFIG,
	useAppsIds,
	useGridManagement,
	useWindowsIds,
} from "@/store";

import DesktopGridSlot from "./Apps/DesktopGridSlot";
import AppWindow from "./Window/Window";

const rows = Array.from({ length: GRID_CONFIG.ROW_COUNT }, (_, i) => i);
const columns = Array.from({ length: GRID_CONFIG.COLUMN_COUNT }, (_, i) => i);

export default function Desktop() {
	const appsIds = useAppsIds();
	const windowsIds = useWindowsIds();
	const { relocateApp, getAppByPosition } = useGridManagement();

	// Grid for desktop apps
	// X is vertical, Y is horizontal
	const gridElements = useMemo(() => {
		return rows.map((row) =>
			columns.map((col) => {
				const position = row * GRID_CONFIG.COLUMN_COUNT + col;
				const appId = getAppByPosition(position);
				return (
					<DesktopGridSlot
						position={position}
						appId={appId}
						key={position}
					/>
				);
			}),
		);
	}, [getAppByPosition]);

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id === over?.id || !over) return;

		const activeApp = appsIds.find((app) => app === active.id);
		if (!activeApp) return;

		const overApp = appsIds.find((app) => app === over?.id);
		if (overApp) return;

		relocateApp(active.id.toString(), Number(over.id.toString()));
	};

	return (
		<div
			className="relative bg-desktop-background h-full w-full"
			onSelectCapture={(e) => e.stopPropagation()}
		>
			<DragAndDropProvider DndContextProps={{ onDragEnd }}>
				<div
					className="grid h-full w-full"
					style={{
						gridTemplateColumns: `repeat(${GRID_CONFIG.COLUMN_COUNT}, 1fr)`,
						gridTemplateRows: `repeat(${GRID_CONFIG.ROW_COUNT}, 1fr)`,
					}}
				>
					{...gridElements}
				</div>
			</DragAndDropProvider>
			{windowsIds.map((windowId, index: number) => (
				<AppWindow windowId={windowId} zIndex={index} key={windowId} />
			))}
		</div>
	);
}
