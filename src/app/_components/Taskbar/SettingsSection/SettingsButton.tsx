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
			className="h-full bg-transparent hover:bg-white/60 hover:backdrop-blur-md"
			onClick={handleOpenSettings}
            ref={buttonRef}
		>
			<Settings className="text-taskbar-icon-default size-6" />
		</Button>
	);
}
