"use client";

import { Pin, PinOff, X } from "lucide-react";
import { PropsWithChildren, ReactNode } from "react";
import { useTranslation } from "react-i18next";

import { AppIcon } from "@/components/AppIcon";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/ContextMenu";
import {
	useApp,
	useTaskbarApp,
	useTaskbarAppManagement,
	useWindow,
	useWindowManagement,
} from "@/store/hooks";

/**
 * Context menu for desktop apps.
 */
export function DesktopAppContextMenu({
	children,
	appId,
	extraOptions,
}: PropsWithChildren<{
	appId: string;
	extraOptions?: ReactNode;
}>) {
	const { t } = useTranslation();

	const { openWindow, closeWindow } = useWindowManagement(appId);
	const { pinToTaskbar, unpinFromTaskbar } = useTaskbarAppManagement(appId);

	const app = useApp(appId);
	const taskbarApp = useTaskbarApp(appId);
	const window = useWindow(appId);
	const isWindowOpen = !!window;
	const isPinned = taskbarApp?.pinned;

	if (!app) {
		return null;
	}

	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				{extraOptions && (
					<>
						{extraOptions}
						<ContextMenuSeparator />
					</>
				)}
				{isPinned ? (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={unpinFromTaskbar}
					>
						<PinOff size={18} />
						{t("context_menu.unpin_from_taskbar")}
					</ContextMenuItem>
				) : (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={pinToTaskbar}
					>
						<Pin size={18} />
						{t("context_menu.pin_to_taskbar")}
					</ContextMenuItem>
				)}
				{isWindowOpen ? (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={closeWindow}
					>
						<X size={18} />
						{t("context_menu.close")} {app.name}
					</ContextMenuItem>
				) : (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={openWindow}
					>
						<AppIcon
							icon={app.icon}
							className="h-5 w-5"
							alt={app.name}
						/>
						{t("context_menu.open")} {app.name}
					</ContextMenuItem>
				)}
			</ContextMenuContent>
		</ContextMenu>
	);
}
