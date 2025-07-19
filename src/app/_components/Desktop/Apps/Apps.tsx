import { DragEndEvent } from "@dnd-kit/core";
import { useCallback, useMemo } from "react";

import DragAndDropProvider from "@/providers/DragAndDropProvider";
import { useAppsIds, useGridManagement } from "@/store";

import DesktopGridSlot from "./DesktopGridSlot";
import { useGridDimensions } from "./useGridDimensions";

export default function Apps() {
	const appsIds = useAppsIds();
	const { relocateApp } = useGridManagement();
	const { columnCount, rowCount, rows, columns, containerRef } =
		useGridDimensions();

	// Grid for desktop apps
	// Position is now the grid cell index (0-based)
	// Apps are arranged vertically: first column fills top to bottom, then second column, etc.
	const gridElements = useMemo(() => {
		return rows.map((row) =>
			columns.map((col) => {
				const position = col * rowCount + row;
				return <DesktopGridSlot position={position} key={position} />;
			}),
		);
	}, [rows, columns, rowCount]);

	const onDragEnd = useCallback(
		(event: DragEndEvent) => {
			const { active, over } = event;

			if (active.id === over?.id || !over) return;

			const activeApp = appsIds.find((app) => app === active.id);
			if (!activeApp) return;

			const overApp = appsIds.find((app) => app === over?.id);
			if (overApp) return;

			relocateApp(active.id.toString(), Number(over.id.toString()));
		},
		[appsIds, relocateApp],
	);

	return (
		<DragAndDropProvider DndContextProps={{ onDragEnd }}>
			<div
				ref={containerRef}
				className="grid h-full w-full"
				style={{
					gridTemplateColumns: `repeat(${columnCount}, 1fr)`,
					gridTemplateRows: `repeat(${rowCount}, 1fr)`,
				}}
			>
				{...gridElements}
			</div>
		</DragAndDropProvider>
	);
}
