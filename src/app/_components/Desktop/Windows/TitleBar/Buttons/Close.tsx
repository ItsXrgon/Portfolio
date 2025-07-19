"use client";

import { X } from "lucide-react";
import { useCallback } from "react";

import { useWindowManagement } from "@/store";

export default function Close({ windowId }: { windowId: string }) {
	const { closeWindow } = useWindowManagement(windowId);

	const handleClose = useCallback(() => {
		closeWindow();
	}, [closeWindow]);

	return (
		<button
			className="cursor-pointer h-full px-2 text-window-header-icon-default hover:bg-red-700/90 hover:backdrop-blur-md active:bg-red-500/90"
			onClick={handleClose}
		>
			<X size={24} />
		</button>
	);
}
