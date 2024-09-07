import Desktop from "@/app/Desktop/Desktop";
import Taskbar from "@/app/Taskbar/Taskbar";
import ConfigProvider from "@/providers/ConfigProvider";
import DragAndDropProvider from "@/providers/DragAndDropProvider";

export function generateStaticParams() {
	return [{ slug: [""] }];
}

export default function Page() {
	return (
		<DragAndDropProvider>
			<ConfigProvider>
				<Desktop />
				<Taskbar />
			</ConfigProvider>
		</DragAndDropProvider>
	);
}
