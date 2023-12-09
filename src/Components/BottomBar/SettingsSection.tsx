import { Settings } from "lucide-react";
import { useState, useEffect } from "react";
import { selectTheme } from "../../store/settingsSlice";
import { useSettingsSelector } from "../../store/hooks";

export default function SettingsSection() {
	const theme = useSettingsSelector(selectTheme);

	const [time, setTime] = useState(new Date().toLocaleTimeString());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date().toLocaleTimeString());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex items-center gap-4">
			<div className="text-accent flex flex-col items-center">
				<label>{time}</label>
				<label>{new Date().toLocaleDateString()}</label>
			</div>
			<div className="h-8 w-px bg-white" />
			<div className="text-accent">
				<Settings color={theme.text.accent} />
			</div>
		</div>
	);
}
