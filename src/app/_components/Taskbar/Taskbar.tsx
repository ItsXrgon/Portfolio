"use client";

import { Flex } from "@/components";

import AppSection from "./AppSection/AppSection";
import SettingsSection from "./SettingsSection/SettingsSection";
import StartSection from "./StartSection";

export default function Taskbar(): JSX.Element {
	return (
		<footer>
			<Flex
				justify="between"
				className="fixed bottom-0 left-0 z-[999] h-16 w-full border border-taskbar-border bg-taskbar-background px-3 py-1 text-taskbar-text"
			>
				<StartSection />
				<AppSection />
				<SettingsSection />
			</Flex>
		</footer>
	);
}
