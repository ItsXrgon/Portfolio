"use client";

import { Pin, PinOff, X } from "lucide-react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

import { Image } from "@/components";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu";
import {
	useTaskbarApp,
	useTaskbarAppManagement,
	useWindow,
	useWindowManagement,
} from "@/store";

export function TaskbarAppContextMenu({
	children,
	onClick,
	extraOptions,
	appId,
}: PropsWithChildren<{
	onClick?: () => void;
	extraOptions?: ReactNode;
	appId: string;
}>) {
	const { t } = useTranslation();

	const window = useWindow(appId);
	const isWindowOpen = !!window;
	const app = useTaskbarApp(appId);
	const isPinned = app?.pinned;
	const [isOpen, setOpen] = useState(false);
	const { pinToTaskbar, unpinFromTaskbar } = useTaskbarAppManagement(appId);
	const { openWindow, closeWindow } = useWindowManagement(appId);

	if (!app) {
		return null;
	}

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
				{extraOptions && (
					<>
						{extraOptions}
						<DropdownMenuSeparator />
					</>
				)}
				{isPinned ? (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={unpinFromTaskbar}
					>
						<PinOff width={24} height={24} />
						{t("context_menu.unpin_from_taskbar")}
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={pinToTaskbar}
					>
						<Pin width={24} height={24} />
						{t("context_menu.pin_to_taskbar")}
					</DropdownMenuItem>
				)}
				{isWindowOpen ? (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={closeWindow}
					>
						<X width={24} height={24} />
						{t("context_menu.close")} {app.name}
					</DropdownMenuItem>
				) : (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={openWindow}
					>
						<Image icon={app.icon} width={24} height={24} alt="" />
						{t("context_menu.open")} {app.name}
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
