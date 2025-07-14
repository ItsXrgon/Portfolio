import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCallback, useMemo } from "react";

import { Image } from "@/components";
import { cn } from "@/lib/utils";
import { useTaskbarApp, useWindow, useWindowManagement } from "@/store/hooks";

import { TaskbarAppContextMenu } from "./TaskbarAppContextMenu";

export function TaskbarAppIcon({
	appId,
	index,
}: {
	appId: string;
	index: number;
}) {
	const { openWindow, minimizeWindow, unMinimizeWindow } =
		useWindowManagement(appId);
	const window = useWindow(appId);
	const taskbarApp = useTaskbarApp(appId);
	const isWindowOpen = !!window;
	const isMinimized = window?.isMinimized;
	const isPinned = taskbarApp?.pinned;

	const onAppIconClick = useCallback(() => {
		if (isWindowOpen) {
			if (isMinimized) {
				unMinimizeWindow();
			} else {
				minimizeWindow();
			}
		} else {
			openWindow();
		}
	}, [
		isWindowOpen,
		isMinimized,
		unMinimizeWindow,
		minimizeWindow,
		openWindow,
	]);

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: appId,
			attributes: {
				role: "taskbar-app",
				tabIndex: index,
			},
		});

	const style = useMemo(() => {
		return {
			transform: CSS.Transform.toString(transform),
			transition,
		};
	}, [transform, transition]);

	if (!taskbarApp) {
		return null;
	}

	return (
		<TaskbarAppContextMenu appId={appId}>
			<div
				key={appId}
				ref={setNodeRef}
				id={appId}
				style={style}
				onClick={() => onAppIconClick()}
				className={cn(
					"bg-none rounded-sm p-1 bg-taskbar-app-background opacity-50",
					{
						"bg-taskbar-app-open-background opacity-100":
							isWindowOpen,
						"border-b-2 border-solid border-taskbar-app-open-indicator":
							isWindowOpen || isPinned,
					},
				)}
				{...listeners}
				{...attributes}
			>
				<Image icon={taskbarApp.icon} width={40} height={40} alt="" />
			</div>
		</TaskbarAppContextMenu>
	);
}
