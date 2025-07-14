"use client";

import { Minus } from "lucide-react";
import React, { useCallback } from "react";

import { useWindowManagement } from "@/store";

export default function Minimize({ windowId }: { windowId: string }) {
	const { minimizeWindow } = useWindowManagement(windowId);

	const handleMinimize = useCallback(() => {
		minimizeWindow();
	}, [minimizeWindow]);

	return (
		<div className="cursor-pointer p-1 text-window-header-icon-default hover:text-window-header-icon-hovered active:text-window-header-icon-pressed">
			<Minus size={24} onClick={handleMinimize} />
		</div>
	);
}
