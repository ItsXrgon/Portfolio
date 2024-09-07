import { useDrop } from "react-dnd";

import { selectTaskbar } from "@/app/stores/appsSlice";
import { useAppSelector } from "@/app/stores/hooks";

import { TaskbarAppIcon } from "./AppSection/TaskbarAppIcon";

export default function AppSection() {
	const apps = useAppSelector(selectTaskbar);

	const [, drop] = useDrop(() => ({ accept: "APPICON" }));

	return (
		<div ref={drop} className="flex flex-row gap-3">
			{apps.map((app, index) => (
				<TaskbarAppIcon app={app} index={index} key={app.id} />
			))}
		</div>
	);
}
