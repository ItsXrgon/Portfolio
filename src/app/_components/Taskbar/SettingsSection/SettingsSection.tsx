"use client";

import { Flex } from "@/components";

import Clock from "./Clock/Clock";
import LanguageSelector from "./LanguageSelector";
import SettingsButton from "./SettingsButton";

export default function SettingsSection() {
	return (
		<Flex align="center" gap="1">
			<Clock />
			<div className="h-8 w-px bg-taskbar-separator" />
			<LanguageSelector />
			<div className="h-8 w-px bg-taskbar-separator" />
			<SettingsButton />
		</Flex>
	);
}
