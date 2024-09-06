import { Pin, PinOff, X } from "lucide-react";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/app/UIComponents/ContextMenu";
import {
	closeApp,
	openApp,
	pinApp,
	selectAppById,
	selectTaskbarById,
	selectWindowById,
	unpinApp,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import Icon from "@/utils/Icon";

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

	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				{extraOptions && <ContextMenuSeparator />}
				{extraOptions}
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
							<Icon icon={app?.icon ?? ""} />
						</div>
						{t("context_menu.open")} {app?.name}
					</ContextMenuItem>
				)}
				{window && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleClose}
					>
						<X size={18} />
						{t("context_menu.close")} {app?.name}
					</ContextMenuItem>
				)}
			</ContextMenuContent>
		</ContextMenu>
	);
}
