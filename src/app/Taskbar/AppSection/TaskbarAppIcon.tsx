import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useCallback } from "react";

import { TaskbarAppContextMenu } from "@/app/ContextMenus";
import {
	handleTaskbarAppClick,
	isAppMinimized,
	isAppOpen,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import { TTaskbar } from "@/app/types";
import Icon from "@/utils/Icon";
import { cn } from "@/utils/cn";

export function TaskbarAppIcon({
	app,
	index,
}: {
	app: TTaskbar;
	index: number;
}) {
	const dispatch = useAppDispatch();

	const onAppIconClick = useCallback(
		(app: TTaskbar) => {
			dispatch(handleTaskbarAppClick(app));
		},
		[dispatch],
	);

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: app.id,
			attributes: {
				role: "taskbar-app",
				tabIndex: index,
			},
		});

	const style = {
		transform: CSS.Transform.toString(transform),
		transition,
	};

	const isOpen = useAppSelector(isAppOpen(app.id));
	const isMinimized = useAppSelector(isAppMinimized(app.id));

	return (
		<TaskbarAppContextMenu
			appId={app.id}
			onClick={() => {
				onAppIconClick(app);
			}}
		>
			<div
				ref={setNodeRef}
				id={app.id}
				{...attributes}
				{...listeners}
				style={style}
				className={cn(
					"bg-none rounded-sm p-1 bg-taskbar-app-background opacity-50",
					isOpen && "bg-taskbar-app-open-background opacity-75",
					isOpen &&
						!isMinimized &&
						"border-b-2 border-solid border-taskbar-app-open-indicator opacity-100",
				)}
				key={app.id}
			>
				<Icon icon={app.icon} width={40} height={40} />
			</div>
		</TaskbarAppContextMenu>
	);
}
