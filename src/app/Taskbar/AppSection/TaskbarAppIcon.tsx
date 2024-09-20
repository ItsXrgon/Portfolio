import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCallback, useMemo } from "react";

import { TaskbarAppContextMenu } from "@/app/ContextMenus";
import {
	isAppMinimized,
	isAppOpen,
	minimizeApp,
	openApp,
	unMinimizeApp,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import { TTaskbar } from "@/app/types";
import UIImage from "@/utils/UIImage";
import { cn } from "@/utils/cn";

export function TaskbarAppIcon({
	app,
	index,
}: {
	app: TTaskbar;
	index: number;
}) {
	const dispatch = useAppDispatch();

	const isOpen = useAppSelector(isAppOpen(app.id));
	const isMinimized = useAppSelector(isAppMinimized(app.id));

	const onAppIconClick = useCallback(() => {
		if (isOpen) {
			if (isMinimized) {
				dispatch(
					unMinimizeApp({
						id: app.id,
					}),
				);
			} else {
				dispatch(
					minimizeApp({
						id: app.id,
					}),
				);
			}
		} else {
			dispatch(
				openApp({
					id: app.id,
				}),
			);
		}
	}, [dispatch, app, isOpen, isMinimized]);

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: app.id,
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

	return (
		<TaskbarAppContextMenu appId={app.id}>
			<div
				ref={setNodeRef}
				id={app.id}
				{...listeners}
				{...attributes}
				style={style}
				onClick={() => onAppIconClick()}
				className={cn(
					"bg-none rounded-sm p-1 bg-taskbar-app-background opacity-50",
					isOpen && "bg-taskbar-app-open-background opacity-75",
					isOpen &&
						!isMinimized &&
						"border-b-2 border-solid border-taskbar-app-open-indicator opacity-100",
				)}
				key={app.id}
			>
				<UIImage icon={app.icon} width={40} height={40} />
			</div>
		</TaskbarAppContextMenu>
	);
}
