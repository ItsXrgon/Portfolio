import { Settings } from "lucide-react";
import { useCallback, useRef } from "react";

import { Button } from "@/components/ui/Button";
import { useWindow, useWindowManagement } from "@/store";

const settingsAppId = "2";

export default function SettingsButton() {
	const settings = useWindow(settingsAppId);
	const { openWindow, unMinimizeWindow } = useWindowManagement(settingsAppId);
	const buttonRef = useRef<HTMLButtonElement>(null);

	const handleOpenSettings = useCallback(() => {
		if (!settings?.isMinimized) {
			openWindow();
		} else {
			unMinimizeWindow();
		}
	}, [openWindow, settings?.isMinimized, unMinimizeWindow]);
	return (
		<Button
			className="h-full bg-transparent hover:bg-white/60 hover:backdrop-blur-md text-taskbar-icon-default hover:text-taskbar-icon-hover active:text-taskbar-icon-pressed"
			onClick={handleOpenSettings}
			ref={buttonRef}
		>
			<Settings className="size-6" />
		</Button>
	);
}
