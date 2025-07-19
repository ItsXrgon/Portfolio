import { useDroppable } from "@dnd-kit/core";

import { useGridManagement } from "@/store";

import { DesktopContextMenu } from "../DesktopContextMenu";
import DesktopApp from "./DesktopApp/DesktopApp";
import { DesktopAppContextMenu } from "./DesktopApp/DesktopAppContextMenu";

/**
 * Represents a slot in the desktop grid where an app can be placed.
 * If an app is present, it renders the app with its context menu.
 * If no app is present, it renders an empty slot with a context menu.
 */
export default function DesktopGridSlot({ position }: { position: number }) {
	const { getAppByPosition } = useGridManagement();
	const appId = getAppByPosition(position);
	
	const { setNodeRef } = useDroppable({
		id: position,
		data: {
			type: "desktop-grid-slot",
		},
	});

	if (!appId) {
		return (
			<DesktopContextMenu key={position}>
				<div ref={setNodeRef} className="h-full w-full" />
			</DesktopContextMenu>
		);
	}

	return (
		<DesktopAppContextMenu appId={appId}>
			<DesktopApp appId={appId} />
		</DesktopAppContextMenu>
	);
}
