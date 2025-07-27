"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pin, PinOff, X } from "lucide-react";
import { PropsWithChildren, ReactNode, useState } from "react";
import { useTranslation } from "react-i18next";

import { AppIcon } from "@/components/AppIcon";
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
	const [open, setOpen] = useState(false);
	const { pinToTaskbar, unpinFromTaskbar } = useTaskbarAppManagement(appId);
	const { openWindow, closeWindow } = useWindowManagement(appId);

	if (!app) {
		return null;
	}

	return (
		<DropdownMenu
			open={open}
			onOpenChange={() => {
				setOpen(false);
			}}
		>
			<DropdownMenuTrigger
				onContextMenu={(e) => {
					e.preventDefault();
					setOpen(true);
				}}
				asChild
			>
				{children}
			</DropdownMenuTrigger>
			<AnimatePresence>
				<DropdownMenuContent sideOffset={10} asChild>
					{open && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{
								type: "tween",
								duration: 0.15,
							}}
							className="w-56"
						>
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
									<AppIcon
										icon={app.icon}
										width={24}
										height={24}
										alt=""
									/>
									{t("context_menu.open")} {app.name}
								</DropdownMenuItem>
							)}
						</motion.div>
					)}
				</DropdownMenuContent>
			</AnimatePresence>
		</DropdownMenu>
	);
}
