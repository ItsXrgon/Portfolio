"use client";

import { useRef } from "react";
import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";

import Label from "@/app/UIComponents/Label";
import { openApp } from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";
import { TApp } from "@/app/types";
import Icon from "@/utils/Icon";

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
				dispatch(
					openApp({
						id: app.id,
					}),
				);
			}}
			role="dragabbleBox"
			className={`flex h-24 w-20 flex-col items-center justify-center gap-1 bg-none text-white ${
				isDragging && "opacity-50"
			}`}
		>
			<div ref={ref} className="h-12 w-12">
				<Icon icon={app.icon} />
			</div>
			<Label.Thin300>{app.name}</Label.Thin300>
		</div>
	);
}
