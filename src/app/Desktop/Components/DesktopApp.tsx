"use client";

import type { DragSourceMonitor } from "react-dnd";
import { useDrag } from "react-dnd";

import { Flex, Label } from "@/app/UIComponents";
import { openApp } from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";
import { TApp } from "@/app/types";
import Icon from "@/utils/Icon";
import { cn } from "@/utils/cn";

interface DesktopAppProps {
	app: TApp;
}

export default function DesktopApp({ app }: DesktopAppProps): JSX.Element {
	const dispatch = useAppDispatch();

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
		<Flex
			ref={drag}
			onDoubleClick={() => {
				dispatch(
					openApp({
						id: app.id,
					}),
				);
			}}
			role="dragabbleBox"
			draggable
			isColumn
			className={cn(
				"h-24 w-20 items-center justify-center gap-1 text-desktop-app-text cursor-pointer",
				"hover:bg-desktop-app-hover-background hover:text-desktop-app-hover-text",
				isDragging && "opacity-50 bg-desktop-app-drag-background ",
			)}
		>
			<Icon icon={app.icon} width={48} height={48} />
			<Label.Thin300>{app.name}</Label.Thin300>
		</Flex>
	);
}
