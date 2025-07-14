"use client";

import { X } from "lucide-react";
import React, { useCallback } from "react";

import { useWindowManagement } from "@/store";

export default function Close({ windowId }: { windowId: string }) {
	const { closeWindow } = useWindowManagement(windowId);

	const handleClose = useCallback(() => {
		closeWindow();
	}, [closeWindow]);

	return (
		<div
			className="cursor-pointer p-1 text-window-header-icon-default hover:text-window-header-icon-hovered active:text-window-header-icon-pressed"
			onClick={handleClose}
		>
			<X size={24} />
		</div>
	);
}
