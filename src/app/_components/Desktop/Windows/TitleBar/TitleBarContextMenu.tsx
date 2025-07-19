import { Maximize, Minimize, Minus, X } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/ContextMenu";
import { useWindow, useWindowManagement } from "@/store/hooks";

export function TitleBarContextMenu({
	children,
	extraOptions,
	appId,
}: PropsWithChildren<{
	extraOptions?: ReactNode;
	appId: string;
}>) {
	const { t } = useTranslation();

	const window = useWindow(appId);
	const isMaximized = window?.isMaximized;
	const isMinimized = window?.isMinimized;
	const { minimizeWindow, closeWindow, toggleMinMax } =
		useWindowManagement(appId);

	if (!window) {
		return null;
	}

	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={toggleMinMax}
					disabled={isMaximized}
				>
					{isMaximized ? (
						<Minimize size={18} />
					) : (
						<Maximize size={18} />
					)}
					{isMaximized
						? t("context_menu.restore")
						: t("context_menu.maximize")}
				</ContextMenuItem>
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={minimizeWindow}
					disabled={isMinimized}
				>
					<Minus size={18} />
					{t("context_menu.minimize")}
				</ContextMenuItem>
				{extraOptions && (
					<>
						{extraOptions}
						<ContextMenuSeparator />
					</>
				)}
				<ContextMenuSeparator />
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={closeWindow}
				>
					<X size={18} />
					{t("context_menu.close")}
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
}
