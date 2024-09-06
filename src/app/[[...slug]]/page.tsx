import CustomBehaviourProvider from "@/utils/providers/CustomBehaviourProvider";
import DragAndDropProvider from "@/utils/providers/DragAndDropProvider";

import Desktop from "../Components/Desktop/Desktop";
import Taskbar from "../Components/Taskbar/Taskbar";

export function generateStaticParams() {
	return [{ slug: [""] }];
}

export default function Page() {
	return (
		<DragAndDropProvider>
			<CustomBehaviourProvider>
				<Desktop />
				<Taskbar />
			</CustomBehaviourProvider>
		</DragAndDropProvider>
	);
}
