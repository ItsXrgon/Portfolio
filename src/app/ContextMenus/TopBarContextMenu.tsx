import { Maximize, Minimize, Minus, X } from "lucide-react";
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
	maximizeApp,
	minimizeApp,
	selectWindowById,
	unMaximizeApp,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";

export function TopBarContextMenu({
	children,
	extraOptions,
	appId,
}: {
	children: ReactNode;
	extraOptions?: ReactNode;
	appId: string;
}) {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const app = useAppSelector(selectWindowById(appId));

	const handleMaximize = useCallback(() => {
		dispatch(
			maximizeApp({
				id: appId,
			}),
		);
	}, [dispatch, appId]);

	const handleRestore = useCallback(() => {
		dispatch(
			unMaximizeApp({
				id: appId,
			}),
		);
	}, [dispatch, appId]);

	const handleMinimize = useCallback(() => {
		dispatch(
			minimizeApp({
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
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={() => {
						app?.windowState?.isMaximized
							? handleRestore()
							: handleMaximize();
					}}
					disabled={app?.windowState?.isMaximized}
				>
					{app?.windowState?.isMaximized ? (
						<Minimize size={18} />
					) : (
						<Maximize size={18} />
					)}
					{app?.windowState?.isMaximized
						? t("context_menu.restore")
						: t("context_menu.maximize")}
				</ContextMenuItem>
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleMinimize}
					disabled={app?.windowState?.isMinimized}
				>
					<Minus size={18} />
					{t("context_menu.minimize")}
				</ContextMenuItem>
				{extraOptions && <ContextMenuSeparator />}
				{extraOptions}
				<ContextMenuSeparator />
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleClose}
				>
					<X size={18} />
					{t("context_menu.close")}
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
}
