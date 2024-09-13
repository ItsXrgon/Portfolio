import { useDroppable } from "@dnd-kit/core";

import { DesktopAppContextMenu, DesktopContextMenu } from "@/app/ContextMenus";
import { TApp } from "@/app/types";

import DesktopApp from "./DesktopApp";

interface DesktopGridSlotProps {
	position: number;
	app?: TApp;
}

export default function DesktopGridSlot({
	position,
	app,
}: DesktopGridSlotProps): JSX.Element {
	const { setNodeRef } = useDroppable({
		id: position,
		data: {
			type: "desktop-grid-slot",
		},
	});

	if (!app) {
		return (
			<DesktopContextMenu key={position}>
				<div
					ref={setNodeRef}
					className="flex h-24 flex-col items-center justify-center"
				/>
			</DesktopContextMenu>
		);
	}

	return (
		<DesktopAppContextMenu appId={app.id}>
			<DesktopApp app={app} />
		</DesktopAppContextMenu>
	);
}
