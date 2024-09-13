import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

import { Flex, Label } from "@/app/UIComponents";
import { openApp } from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";
import { TApp } from "@/app/types";
import UIImage from "@/utils/Icon";
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
		transform: CSS.Transform.toString(transform),
	};

	return (
		<Flex
			ref={setNodeRef}
			onDoubleClick={() => {
				dispatch(
					openApp({
						id: app.id,
					}),
				);
			}}
			{...attributes}
			{...listeners}
			style={style}
			isColumn
			className={cn(
				"h-24 w-20 items-center justify-center gap-1 text-desktop-app-text cursor-pointer",
				"hover:bg-desktop-app-hover-background hover:text-desktop-app-hover-text",
				{ "opacity-70 bg-desktop-app-drag-background ": isDragging },
			)}
		>
			<UIImage icon={app.icon} width={48} height={48} />
			<Label.Thin300>{app.name}</Label.Thin300>
		</Flex>
	);
}
