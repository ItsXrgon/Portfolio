import { Pin, PinOff, X } from "lucide-react";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Image } from "@/components/ui";
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/components/ui/ContextMenu";
import {
	closeApp,
	openApp,
	pinApp,
	selectAppById,
	selectTaskbarById,
	selectWindowById,
	unpinApp,
} from "@/store/appsSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";

export function DesktopAppContextMenu({
	children,
	appId,
	extraOptions,
}: {
	children: ReactNode;
	appId: string;
	extraOptions?: ReactNode;
}) {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const window = useAppSelector(selectWindowById(appId));
	const app = useAppSelector(selectAppById(appId));
	const taskBarApp = useAppSelector(selectTaskbarById(appId));

	const handleUnpin = useCallback(() => {
		dispatch(
			unpinApp({
				id: appId,
			}),
		);
	}, [dispatch, appId]);

	const handlePin = useCallback(() => {
		dispatch(
			pinApp({
				id: appId,
			}),
		);
	}, [dispatch, appId]);

	const handleOpen = useCallback(() => {
		dispatch(
			openApp({
				id: appId,
			}),
		);
	}, [dispatch, appId]);

	const handleClose = useCallback(() => {
		dispatch(
			closeApp({
				id: appId,
			}),
		);
	}, [dispatch, appId]);

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
				{taskBarApp?.pinned && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleUnpin}
					>
						<PinOff size={18} />
						{t("context_menu.unpin_from_taskbar")}
					</ContextMenuItem>
				)}
				{!taskBarApp?.pinned && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handlePin}
					>
						<Pin size={18} />
						{t("context_menu.pin_to_taskbar")}
					</ContextMenuItem>
				)}
				{!window && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleOpen}
					>
						<div className="h-5 w-5">
							<Image icon={app.icon} />
						</div>
						{t("context_menu.open")} {app.name}
					</ContextMenuItem>
				)}
				{window && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleClose}
					>
						<X size={18} />
						{t("context_menu.close")} {app.name}
					</ContextMenuItem>
				)}
			</ContextMenuContent>
		</ContextMenu>
	);
}
