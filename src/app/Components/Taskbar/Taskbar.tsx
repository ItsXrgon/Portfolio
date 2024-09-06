"use client";

import AppSection from "./AppSection";
import SettingsSection from "./SettingsSection";
import StartSection from "./StartSection";

export default function Taskbar(): JSX.Element {
	return (
		<div className="fixed bottom-0 left-0 z-[999] flex h-14 w-full items-center justify-between border border-taskbar-border bg-taskbar-background px-3">
			<StartSection />
			<AppSection />
			<SettingsSection />
		</div>
	);
}
