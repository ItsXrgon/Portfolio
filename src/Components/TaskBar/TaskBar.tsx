import StartSection from "./StartSection";
import AppSection from "./AppSection";
import SettingsSection from "./SettingsSection";

export default function Taskbar(): JSX.Element {
	return (
		<div className="z-999 fixed bottom-0 left-0 flex h-14 w-full items-center justify-between border border-taskbar-border bg-taskbar-background px-3">
			<StartSection />
			<AppSection />
			<SettingsSection />
		</div>
	);
}
