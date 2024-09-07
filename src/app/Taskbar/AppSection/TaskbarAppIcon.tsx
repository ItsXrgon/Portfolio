import { useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";

import { TaskbarAppContextMenu } from "@/app/ContextMenus";
import {
	handleTaskbarAppClick,
	isAppOpen,
	reOrderApps,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import { TApp, TTaskbar } from "@/app/types";
import Icon from "@/utils/Icon";

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

	const [, drag] = useDrag(() => ({
		type: "APPICON",
		item: {
			app: app,
			index: index,
		},
		collect: (monitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	const [, drop] = useDrop(
		() => ({
			accept: "APPICON",
			hover(item: { app: TApp }) {
				if (item.app.id !== app.id) {
					dispatch(
						reOrderApps({
							oldIndex: item.app.index ?? 0,
							newIndex: index,
						}),
					);
				}
			},
		}),
		[],
	);

	const isOpen = useAppSelector(isAppOpen(app.id));

	return (
		<TaskbarAppContextMenu
			appId={app.id}
			onClick={() => {
				onAppIconClick(app);
			}}
		>
			<div
				ref={(node) => drag(drop(node))}
				className={`flex flex-col items-center justify-center rounded-sm p-1
					${isOpen && "border-b-2 border-solid border-gray-500 shadow-lg"}`}
				key={app.id}
			>
				<Icon icon={app.icon} width={40} height={40} />
			</div>
		</TaskbarAppContextMenu>
	);
}
