"use client";

import { useMemo } from "react";

import { selectApps, selectWindows } from "@/app/stores/appsSlice";
import { useAppSelector } from "@/app/stores/hooks";
import { TApp, TWindow } from "@/app/types";

import DesktopGridSlot from "./Components/DesktopGridSlot";
import Window from "./Components/Window";

export default function Desktop() {
	const apps = useAppSelector(selectApps);
	const windows = useAppSelector(selectWindows);

	// Grid for desktop apps
	// X is vertical, Y is horizontal
	const gridElements = useMemo(() => {
		return Array.from(Array(8).keys()).map((_, i) =>
			Array.from(Array(20).keys()).map((_, j) => (
				<DesktopGridSlot
					xCoordinate={i}
					yCoordinate={j}
					app={
						(apps.find(
							(app: TApp) =>
								app.position.x === i && app.position.y === j,
						) as TApp) ?? undefined
					}
					key={`${i}-${j}`}
				/>
			)),
		);
	}, [apps]);

	return (
		<div
			className="relative w-full bg-desktop-background"
			style={{ height: "calc(100% - 3.5rem)" }}
			onSelectCapture={(e) => e.stopPropagation()}
		>
			<div className="grid grid-cols-20">{...gridElements}</div>
			{windows.map((app: TWindow, index: number) => (
				<Window app={app} zIndex={index} key={app.id} />
			))}
		</div>
	);
}
