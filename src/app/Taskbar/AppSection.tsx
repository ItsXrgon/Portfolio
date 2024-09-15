import {
	DragEndEvent,
	PointerSensor,
	useDroppable,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { rectSortingStrategy } from "@dnd-kit/sortable";

import { reOrderApps, selectTaskbar } from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import DragAndDropProvider from "@/providers/DragAndDropProvider";
import SortableContextProvider from "@/providers/SortableContextProvider";

import { TaskbarAppIcon } from "./AppSection/TaskbarAppIcon";

export default function AppSection() {
	const apps = useAppSelector(selectTaskbar);
	const dispatch = useAppDispatch();

	const { setNodeRef } = useDroppable({
		id: "taskbar-drop",
		data: {
			type: "taskbar-app",
		},
	});

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			const oldIndex = apps.findIndex((app) => app.id === active.id);
			const newIndex = apps.findIndex((app) => app.id === over?.id);
			dispatch(
				reOrderApps({
					oldIndex,
					newIndex,
				}),
			);
		}
	};

	const sensors = useSensors(
		useSensor(PointerSensor, {
			activationConstraint: {
				distance: 8,
			},
		}),
	);

	return (
		<div ref={setNodeRef} className="flex flex-row gap-3">
			<DragAndDropProvider DndContextProps={{ onDragEnd, sensors }}>
				<SortableContextProvider
					SortableContextProps={{
						items: apps,
						strategy: rectSortingStrategy,
					}}
				>
					{apps.map((app, index) => (
						<TaskbarAppIcon app={app} index={index} key={app.id} />
					))}
				</SortableContextProvider>
			</DragAndDropProvider>
		</div>
	);
}
