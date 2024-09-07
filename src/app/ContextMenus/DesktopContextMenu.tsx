import { ReactNode } from "react";

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/app/UIComponents/ContextMenu";

export function DesktopContextMenu({
	children,
	extraOptions,
}: {
	children: ReactNode;
	extraOptions?: ReactNode;
}) {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				{extraOptions && <ContextMenuSeparator />}
				{extraOptions}
			</ContextMenuContent>
		</ContextMenu>
	);
}
