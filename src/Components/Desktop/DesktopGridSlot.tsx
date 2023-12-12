import { useDrop } from "react-dnd";
import { TApp } from "../../types";
import DesktopApp from "./DesktopApp";
import { useAppDispatch } from "../../store/hooks";
import { reLocateApp } from "../../store/appsSlice";
import { useCallback, useState } from "react";
import DesktopContextMenu from "../ContextMenus/DesktopContextMenu";

interface DesktopGridSlotProps {
	xCoordinate: number;
	yCoordinate: number;
	onContextMenu?: (
		e: React.MouseEvent<HTMLDivElement>,
		app: TApp | null,
		ref: HTMLDivElement,
	) => void;
	app?: TApp;
}

export default function DesktopGridSlot({
	xCoordinate,
	yCoordinate,
	app,
}: DesktopGridSlotProps): JSX.Element {
	const dispatch = useAppDispatch();

	const [contextMenu, setContextMenu] = useState<{
		position: {
			x: number;
			y: number;
		};
		isOpen: boolean;
		app: TApp | null;
	}>({
		position: {
			x: 0,
			y: 0,
		},
		isOpen: false,
		app: null,
	});

	const onContextMenu = useCallback(
		(e: React.MouseEvent<HTMLDivElement>, app: TApp | null) => {
			setContextMenu({
				isOpen: true,
				position: {
					x: e.clientX,
					y: e.clientY,
				},
				app,
			});
		},
		[contextMenu],
	);

	const onContextMenuClose = useCallback(() => {
		setContextMenu({
			isOpen: false,
			app: null,
			position: {
				x: 0,
				y: 0,
			},
		});
	}, [contextMenu]);

	const [, drop] = useDrop(
		() => ({
			accept: "APP",
			drop(item: any) {
				if (
					(item.app?.position.x === xCoordinate &&
						item.app?.position.y === yCoordinate) ||
					!item.app
				) {
					return;
				}
				dispatch(
					reLocateApp({
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

	return (
		<div
			ref={drop}
			onContextMenu={(e) => {
				if (onContextMenu) {
					onContextMenu(e, app ?? null);
				}
			}}
			className="flex h-24 flex-col items-center justify-center"
		>
			{app && <DesktopApp index={0} app={app} />}
			<DesktopContextMenu
				onContextMenuClose={onContextMenuClose}
				{...contextMenu}
			/>
		</div>
	);
}
