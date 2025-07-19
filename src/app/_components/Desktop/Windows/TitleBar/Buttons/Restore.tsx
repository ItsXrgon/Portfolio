"use client";

import { Maximize, Minimize } from "lucide-react";
import { useMemo } from "react";

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
		<button
			className="cursor-pointer h-full px-2 text-window-header-icon-default hover:bg-white/60 hover:backdrop-blur-md active:bg-white/90"
			onClick={handleMinMax}
		>
			{isMaximized ? <Minimize size={24} /> : <Maximize size={24} />}
		</button>
	);
}
