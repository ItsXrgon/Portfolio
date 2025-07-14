import { useDroppable } from "@dnd-kit/core";

import { DesktopContextMenu } from "../DesktopContextMenu";
import DesktopApp from "./DesktopApp/DesktopApp";
import { DesktopAppContextMenu } from "./DesktopApp/DesktopAppContextMenu";

/**
 * Represents a slot in the desktop grid where an app can be placed.
 * If an app is present, it renders the app with its context menu.
 * If no app is present, it renders an empty slot with a context menu.
 */
export default function DesktopGridSlot({
	position,
	appId,
}: {
	position: number;
	appId: string | undefined;
}) {
	const { setNodeRef } = useDroppable({
		id: position,
		data: {
			type: "desktop-grid-slot",
		},
	});

	if (!appId) {
		return (
			<DesktopContextMenu key={position}>
				<div
					ref={setNodeRef}
					className="flex h-full w-full flex-col items-center justify-center"
				/>
			</DesktopContextMenu>
		);
	}

	return (
		<DesktopAppContextMenu appId={appId}>
			<div
				ref={setNodeRef}
				className="flex h-full w-full flex-col items-center justify-center"
			>
				<DesktopApp appId={appId} />
			</div>
		</DesktopAppContextMenu>
	);
}
