import { useDrop } from "react-dnd";

import { relocateApp } from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";
import { TApp } from "@/app/types";

import { DesktopAppContextMenu } from "../ContextMenus/DesktopAppContextMenu";
import { DesktopContextMenu } from "../ContextMenus/DesktopContextMenu";
import DesktopApp from "./DesktopApp";

interface DesktopGridSlotProps {
	xCoordinate: number;
	yCoordinate: number;
	app?: TApp;
}

export default function DesktopGridSlot({
	xCoordinate,
	yCoordinate,
	app,
}: DesktopGridSlotProps): JSX.Element {
	const dispatch = useAppDispatch();

	const [, drop] = useDrop(
		() => ({
			accept: "APP",
			drop(item: { app: TApp }) {
				if (
					(item.app?.position.x === xCoordinate &&
						item.app?.position.y === yCoordinate) ||
					!item.app
				) {
					return;
				}
				dispatch(
					relocateApp({
						app: item.app,
						position: {
							x: xCoordinate,
							y: yCoordinate,
						},
					}),
				);
			},
		}),
		[],
	);

	if (!app) {
		return (
			<DesktopContextMenu key={`${xCoordinate}-${yCoordinate}`}>
				<div
					ref={drop}
					className="flex h-24 flex-col items-center justify-center"
				/>
			</DesktopContextMenu>
		);
	}

	return (
		<DesktopAppContextMenu appId={app.id}>
			<div className="flex h-24 flex-col items-center justify-center">
				{app && <DesktopApp index={0} app={app} />}
			</div>
		</DesktopAppContextMenu>
	);
}
