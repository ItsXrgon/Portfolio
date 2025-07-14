import {
	DragEndEvent,
	PointerSensor,
	useDroppable,
	useSensor,
	useSensors,
} from "@dnd-kit/core";
import { rectSortingStrategy } from "@dnd-kit/sortable";

import DragAndDropProvider from "@/providers/DragAndDropProvider";
import SortableContextProvider from "@/providers/SortableContextProvider";
import { useTaskbarAppsIds, useTaskbarManagement } from "@/store/hooks";

import { TaskbarAppIcon } from "./TaskbarAppIcon";

export default function AppSection() {
	const appsIds = useTaskbarAppsIds();
	const { reorderTaskbarApps } = useTaskbarManagement();

	const { setNodeRef } = useDroppable({
		id: "taskbar-drop",
		data: {
			type: "taskbar-app",
		},
	});

	const onDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (active.id !== over?.id) {
			const oldIndex = appsIds.findIndex((app) => app === active.id);
			const newIndex = appsIds.findIndex((app) => app === over?.id);
			reorderTaskbarApps(oldIndex, newIndex);
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
						items: appsIds,
						strategy: rectSortingStrategy,
					}}
				>
					{appsIds.map((appId, index) => (
						<TaskbarAppIcon
							appId={appId}
							index={index}
							key={appId}
						/>
					))}
				</SortableContextProvider>
			</DragAndDropProvider>
		</div>
	);
}
