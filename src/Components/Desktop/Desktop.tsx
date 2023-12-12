import { useMemo } from "react";
import {
	reLocateWindow,
	selectApps,
	selectOpenWindows,
} from "../../store/appsSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { TApp } from "../../types";
import DesktopGridSlot from "./DesktopGridSlot";
import { useDrop } from "react-dnd";
import Window from "../Desktop/Window";

export default function Desktop() {
	const apps = useAppSelector(selectApps);
	const openWindows = useAppSelector(selectOpenWindows);
	const dispatch = useAppDispatch();

	// Grid for desktop apps
	// X is vertical, Y is horizontal
	const gridElements = useMemo(() => {
		return Array.from(Array(8).keys()).map((_, i) =>
			Array.from(Array(20).keys()).map((_, j) => (
				<DesktopGridSlot
					xCoordinate={i}
					yCoordinate={j}
					app={apps.find(
						(app: TApp) =>
							app.position.x === i && app.position.y === j,
					)}
					key={`${i}-${j}`}
				/>
			)),
		);
	}, [apps]);

	const [, drop] = useDrop(
		() => ({
			accept: "WINDOW",
			drop(item: any, monitor: any) {
				const delta = monitor.getDifferenceFromInitialOffset() as {
					x: number;
					y: number;
				};

				dispatch(
					reLocateWindow({
						app: item,
						position: {
							x: item.app.windowState.position.x + delta.x,
							y: item.app.windowState.position.y + delta.y,
						},
					}),
				);
			},
		}),
		[dispatch],
	);

	return (
		<div
			ref={drop}
			className="h-full w-full"
			onSelectCapture={(e) => e.stopPropagation()}
		>
			<div className="grid grid-cols-20">{...gridElements}</div>
			{openWindows.map((app: TApp) => (
				<Window app={app} />
			))}
		</div>
	);
}
