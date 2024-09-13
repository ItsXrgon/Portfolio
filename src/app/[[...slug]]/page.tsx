import Desktop from "@/app/Desktop/Desktop";
import Taskbar from "@/app/Taskbar/Taskbar";

export function generateStaticParams() {
	return [{ slug: [""] }];
}

export default function Page() {
	return (
		<>
			<Desktop />
			<Taskbar />
		</>
	);
}
