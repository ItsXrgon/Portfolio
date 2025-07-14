"use client";

import { Maximize, Minimize } from "lucide-react";
import React, { useMemo } from "react";

import { useWindow } from "@/store";

export default function Restore({
	windowId,
	handleMinMax,
}: {
	windowId: string;
	handleMinMax: () => void;
}) {
	const window = useWindow(windowId)!;
	const isMaximized = useMemo(() => window.isMaximized, [window]);

	return (
		<div
			className="cursor-pointer p-1 text-window-header-icon-default hover:text-window-header-icon-hovered active:text-window-header-icon-pressed"
			onClick={handleMinMax}
		>
			{isMaximized ? <Minimize size={24} /> : <Maximize size={24} />}
		</div>
	);
}
