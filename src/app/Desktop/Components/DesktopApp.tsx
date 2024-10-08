import { useDraggable } from "@dnd-kit/core";
import { CSS, Transform } from "@dnd-kit/utilities";
import { useCallback } from "react";

import { Flex, Label } from "@/app/UIComponents";
import UIImage from "@/app/UIComponents/UIImage";
import { isAppOpen, openApp, unMinimizeApp } from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import { TApp } from "@/app/types";
import { cn } from "@/utils/cn";

interface DesktopAppProps {
	app: TApp;
}

export default function DesktopApp({ app }: DesktopAppProps): JSX.Element {
	const dispatch = useAppDispatch();

	const { setNodeRef, isDragging, attributes, listeners, transform } =
		useDraggable({
			id: app.id,
			attributes: {
				role: "desktop-app",
			},
		});

	const style = {
		transform: CSS.Transform.toString({
			...transform,
			scaleX: 1,
			scaleY: 1,
		} as Transform),
	};

	const isOpen = useAppSelector(isAppOpen(app.id));

	const onDoubleClick = useCallback(() => {
		if (isOpen) {
			dispatch(
				unMinimizeApp({
					id: app.id,
				}),
			);
		} else {
			dispatch(
				openApp({
					id: app.id,
				}),
			);
		}
	}, [dispatch, app, isOpen]);

	return (
		<Flex
			ref={setNodeRef}
			onDoubleClick={onDoubleClick}
			{...attributes}
			{...listeners}
			style={style}
			isColumn
			className={cn(
				"h-full w-full p-2 items-center gap-1 text-desktop-app-text cursor-pointer text-center",
				"hover:bg-desktop-app-hover-background hover:text-desktop-app-hover-text",
				{ "opacity-70 bg-desktop-app-drag-background ": isDragging },
			)}
		>
			<UIImage icon={app.icon} width={48} height={48} />
			<Label.Thin300>{app.name}</Label.Thin300>
		</Flex>
	);
}
