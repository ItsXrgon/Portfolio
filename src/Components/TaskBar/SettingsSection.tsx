import { Settings } from "lucide-react";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { openApp } from "../../store/appsSlice";
import { useAppDispatch } from "../../store/hooks";
import LanguageSelector from "./SettingsSection/LanguageSelector";
import Clock from "./SettingsSection/Clock/Clock";

export default function SettingsSection() {
	useTranslation();
	const dispatch = useAppDispatch();

	const handleOpenSettings = useCallback(() => {
		dispatch(
			openApp({
				id: "3",
			}),
		);
	}, [dispatch]);

	return (
		<div className="flex items-center gap-1">
			<Clock />
			<div className="h-8 w-px bg-taskbar-separator" />
			<LanguageSelector />
			<div className="h-8 w-px bg-taskbar-separator" />
			<div
				className="rounded-lg px-3 py-2 text-taskbar-icon"
				onClick={handleOpenSettings}
			>
				<Settings />
			</div>
		</div>
	);
}
