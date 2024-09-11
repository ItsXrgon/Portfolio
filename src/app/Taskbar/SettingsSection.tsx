"use client";

import { Settings } from "lucide-react";
import { useCallback } from "react";

import {
	openApp,
	selectWindowById,
	unMinimizeApp,
} from "@/app/stores/appsSlice";
import { useAppDispatch, useAppSelector } from "@/app/stores/hooks";
import { cn } from "@/utils/cn";

import { Flex } from "../UIComponents";
import Clock from "./SettingsSection/Clock/Clock";
import LanguageSelector from "./SettingsSection/LanguageSelector";

const settingsAppId = "2";

export default function SettingsSection() {
	const dispatch = useAppDispatch();
	const settings = useAppSelector(selectWindowById(settingsAppId));

	const handleOpenSettings = useCallback(() => {
		if (!settings?.windowState?.isMinimized) {
			dispatch(
				openApp({
					id: settingsAppId,
				}),
			);
		} else {
			dispatch(
				unMinimizeApp({
					id: settingsAppId,
				}),
			);
		}
	}, [dispatch, settings]);

	return (
		<Flex align="center" gap="1">
			<Clock />
			<div className="h-8 w-px bg-taskbar-separator" />
			<LanguageSelector />
			<div className="h-8 w-px bg-taskbar-separator" />
			<div
				className={cn(
					"rounded-lg p-3",
					"hover:bg-taskbar-icon-hover",
					"active:bg-taskbar-icon-pressed",
				)}
				onClick={handleOpenSettings}
			>
				<Settings className="text-taskbar-icon-default" />
			</div>
		</Flex>
	);
}
