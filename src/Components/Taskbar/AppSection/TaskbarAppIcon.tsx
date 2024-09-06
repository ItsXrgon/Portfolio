import { useDrag, useDrop } from "react-dnd";
import {
	handleTaskbarAppClick,
	isAppOpen,
	reOrderApps,
} from "../../../store/appsSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { TTaskbar } from "../../../types";
import TaskbarAppContextMenu from "../../ContextMenus/TaskbarAppContextMenu";
import { useCallback } from "react";
import Icon from "../../../utils/Icon";

export function TaskbarAppIcon({
	app,
	ref,
	index,
}: {
	app: TTaskbar;
	ref: React.RefObject<HTMLDivElement>;
	index: number;
}) {
	const dispatch = useAppDispatch();

	const onAppIconClick = useCallback(
		(app: TTaskbar) => {
			dispatch(handleTaskbarAppClick(app));
		},
		[dispatch],
	);

	const [{}, drag] = useDrag(() => ({
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
			hover(item: any) {
				if (item.app.id !== app.id) {
					dispatch(
						reOrderApps({
							oldIndex: item.index,
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
				<div className="h-10 w-10" ref={ref}>
					<Icon icon={app.icon} />
				</div>
			</div>
		</TaskbarAppContextMenu>
	);
}
