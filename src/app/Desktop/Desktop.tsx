"use client";

import { DragEndEvent } from "@dnd-kit/core";
import { useMemo } from "react";

import { relocateApp, selectApps, selectWindows } from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import { TApp, TWindow } from "@/app/types";
import DragAndDropProvider from "@/providers/DragAndDropProvider";

import DesktopGridSlot from "./Components/DesktopGridSlot";
import Window from "./Components/Window";

const rowCount = 8;
const columnCount = 20;
const rows = Array.from({ length: rowCount }, (_, i) => i);
const columns = Array.from({ length: columnCount }, (_, i) => i);

export default function Desktop() {
	const dispatch = useAppDispatch();
	const apps = useAppSelector(selectApps);
	const windows = useAppSelector(selectWindows);

	// Grid for desktop apps
	// X is vertical, Y is horizontal
	const gridElements = useMemo(() => {
		return rows.map((row) =>
			columns.map((col) => {
				const position = row * columnCount + col;
				return (
					<DesktopGridSlot
						position={position}
						app={apps.find(
							(app: TApp) => app.position === position,
						)}
						key={position}
					/>
				);
			}),
		);
	}, [apps]);

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id === over?.id || !over) return;

		const activeApp = apps.find((app) => app.id === active.id);
		if (!activeApp) return;

		const overApp = apps.find((app) => app.id === over?.id);
		if (overApp) return;

		dispatch(
			relocateApp({
				id: active.id.toString(),
				position: Number(over.id.toString()),
			}),
		);
	};

	return (
		<div
			className="relative w-full bg-desktop-background h-full"
			style={{ height: "calc(100% - 3.5rem)" }}
			onSelectCapture={(e) => e.stopPropagation()}
		>
			<DragAndDropProvider DndContextProps={{ onDragEnd }}>
				<div className="grid grid-cols-20">{...gridElements}</div>
			</DragAndDropProvider>
			{windows.map((app: TWindow, index: number) => (
				<Window app={app} zIndex={index} key={app.id} />
			))}
		</div>
	);
}
