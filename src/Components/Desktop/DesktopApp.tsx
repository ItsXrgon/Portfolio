import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";
import { TApp } from "../../types";
import Icon from "./Icon";
import { useAppDispatch } from "../../store/hooks";
import { openApp } from "../../store/appsSlice";
import { useRef } from "react";

interface AppProps {
	index: number;
	app: TApp;
}

export default function DesktopApp({ app }: AppProps): JSX.Element {
	const dispatch = useAppDispatch();

	const ref = useRef<HTMLDivElement>(null);

	const [{ isDragging }, drag] = useDrag(() => ({
		type: "APP",
		item: {
			app: app,
		},
		collect: (monitor: DragSourceMonitor) => ({
			isDragging: monitor.isDragging(),
		}),
	}));

	return (
		<div
			ref={drag}
			onDoubleClick={() => {
				dispatch(openApp(app));
			}}
			onContextMenu={(e) => {
				e.preventDefault();
			}}
			role="dragabbleBox"
			className={`flex h-24 w-20 flex-col items-center justify-center gap-1 text-white hover:bg-slate-50 hover:bg-opacity-70 hover:text-black ${
				isDragging && "opacity-50"
			} ${app.appState.isSelected && "bg-slate-50 text-black"}`}
		>
			<div ref={ref} className="h-12 w-12">
				<Icon icon={app.icon} />
			</div>
			<label className="text-md select-none">{app.name}</label>
		</div>
	);
}
