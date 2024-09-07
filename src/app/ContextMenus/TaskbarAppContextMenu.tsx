"use client";

import { Pin, PinOff, X } from "lucide-react";
import { ReactNode, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/app/UIComponents/DropDownMenu";
import {
	closeApp,
	openApp,
	pinApp,
	selectTaskbarById,
	selectWindowById,
	unpinApp,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import Icon from "@/utils/Icon";

export function TaskbarAppContextMenu({
	children,
	onClick,
	extraOptions,
	appId,
}: {
	children: ReactNode;
	onClick?: () => void;
	extraOptions?: ReactNode;
	appId: string;
}) {
	const { t } = useTranslation();

	const dispatch = useAppDispatch();
	const window = useAppSelector(selectWindowById(appId));
	const app = useAppSelector(selectTaskbarById(appId));
	const [isOpen, setOpen] = useState(false);

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
		<DropdownMenu
			open={isOpen}
			onOpenChange={() => {
				setOpen(false);
			}}
		>
			<DropdownMenuTrigger
				onContextMenu={(e) => {
					e.preventDefault();
					setOpen(true);
				}}
				onClick={onClick}
			>
				{children}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" sideOffset={15}>
				{extraOptions && <DropdownMenuSeparator />}
				{app?.pinned && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleUnpin}
					>
						<PinOff width={24} height={24} />
						{t("context_menu.unpin_from_taskbar")}
					</DropdownMenuItem>
				)}
				{!app?.pinned && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handlePin}
					>
						<Pin width={24} height={24} />
						{t("context_menu.pin_to_taskbar")}
					</DropdownMenuItem>
				)}
				{!window && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleOpen}
					>
						<Icon icon={app?.icon} width={24} height={24} />
						{t("context_menu.open")} {app?.name}
					</DropdownMenuItem>
				)}
				{window && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleClose}
					>
						<X width={24} height={24} />
						{t("context_menu.close")} {app?.name}
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
