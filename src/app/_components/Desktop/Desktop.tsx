"use client";

import Apps from "./Apps/Apps";
import Windows from "./Windows/Windows";

export default function Desktop() {
	return (
		<div
			className="relative bg-desktop-background h-full w-full overflow-hidden"
			onSelectCapture={(e) => e.stopPropagation()}
		>
			<Apps />
			<Windows />
		</div>
	);
}
