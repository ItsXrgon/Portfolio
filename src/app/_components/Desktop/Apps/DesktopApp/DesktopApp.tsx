import { useDraggable } from "@dnd-kit/core";
import { CSS, Transform } from "@dnd-kit/utilities";
import { useCallback, useMemo } from "react";

import { Flex, Image, Label } from "@/components";
import { cn } from "@/lib/utils";
import { useApp, useWindow, useWindowManagement } from "@/store/hooks";

/**
 * Represents a desktop app that can be dragged and dropped.
 * It displays the app's icon and name, and handles double-clicks to open the app.
 */
export default function DesktopApp({ appId }: { appId: string }) {
	const { openWindow, unMinimizeWindow } = useWindowManagement(appId);
	const app = useApp(appId);
	const isWindowOpen = !!useWindow(appId);

	const { setNodeRef, isDragging, attributes, listeners, transform } =
		useDraggable({
			id: appId,
			attributes: {
				role: "desktop-app",
			},
		});

	const style = useMemo(
		() => ({
			transform: CSS.Transform.toString({
				...transform,
				scaleX: 1,
				scaleY: 1,
			} as Transform),
		}),
		[transform],
	);

	const onDoubleClick = useCallback(() => {
		if (isWindowOpen) {
			unMinimizeWindow();
		} else {
			openWindow();
		}
	}, [isWindowOpen, unMinimizeWindow, openWindow]);

	return (
		<Flex
			ref={setNodeRef}
			onDoubleClick={onDoubleClick}
			style={style}
			isColumn
			className={cn(
				"h-full w-full p-2 items-center gap-1 text-desktop-app-text cursor-pointer text-center",
				"hover:bg-desktop-app-hover-background hover:text-desktop-app-hover-text",
				{ "opacity-70 bg-desktop-app-drag-background ": isDragging },
			)}
			{...attributes}
			{...listeners}
		>
			<Image icon={app?.icon} width={48} height={48} alt="" />
			<Label.Thin300>{app?.name}</Label.Thin300>
		</Flex>
	);
}
