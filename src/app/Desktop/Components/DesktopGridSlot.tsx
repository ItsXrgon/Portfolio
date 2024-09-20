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

	const GridSlotContent = (
		<div
			ref={setNodeRef}
			className="flex h-full w-full flex-col items-center justify-center"
		>
			{app ? <DesktopApp app={app} /> : null}
		</div>
	);

	if (!app) {
		return (
			<DesktopContextMenu key={position}>
				{GridSlotContent}
			</DesktopContextMenu>
		);
	}

	return (
		<DesktopAppContextMenu appId={app.id}>
			{GridSlotContent}
		</DesktopAppContextMenu>
	);
}