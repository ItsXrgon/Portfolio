"use client";

import { Settings } from "lucide-react";
import { useCallback } from "react";

import { Flex } from "@/components";
import { Button } from "@/components/ui/Button";
import { useWindow, useWindowManagement } from "@/store/hooks";

import Clock from "./Clock/Clock";
import LanguageSelector from "./LanguageSelector";

const settingsAppId = "2";

export default function SettingsSection() {
	const settings = useWindow(settingsAppId);
	const { openWindow, unMinimizeWindow } = useWindowManagement(settingsAppId);

	const handleOpenSettings = useCallback(() => {
		if (!settings?.isMinimized) {
			openWindow();
		} else {
			unMinimizeWindow();
		}
	}, [openWindow, settings?.isMinimized, unMinimizeWindow]);

	return (
		<Flex align="center" gap="1">
			<Clock />
			<div className="h-8 w-px bg-taskbar-separator" />
			<LanguageSelector />
			<div className="h-8 w-px bg-taskbar-separator" />
			<Button size="icon" variant="ghost" onClick={handleOpenSettings}>
				<Settings className="text-taskbar-icon-default size-6" />
			</Button>
		</Flex>
	);
}
