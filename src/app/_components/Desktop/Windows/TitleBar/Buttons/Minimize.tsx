"use client";

import { Minus } from "lucide-react";
import { useCallback } from "react";

import { useWindowManagement } from "@/store";

export default function Minimize({ windowId }: { windowId: string }) {
	const { minimizeWindow } = useWindowManagement(windowId);

	const handleMinimize = useCallback(() => {
		minimizeWindow();
	}, [minimizeWindow]);

	return (
		<button className="cursor-pointer h-full px-2 text-window-header-icon-default hover:bg-white/60 hover:backdrop-blur-md active:bg-white/90">
			<Minus size={24} onClick={handleMinimize} />
		</button>
	);
}
