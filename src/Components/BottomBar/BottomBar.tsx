import LeftSection from "./LeftSection";
import AppSection from "./AppSection";
import SettingsSection from "./SettingsSection";

export default function BottomBar(): JSX.Element {
	return (
		<div
			className={`bg-bottomBar fixed bottom-0 left-0 flex h-14 w-full items-center justify-between border border-solid border-black px-3`}
		>
			<LeftSection />
			<AppSection />
			<SettingsSection />
		</div>
	);
}
