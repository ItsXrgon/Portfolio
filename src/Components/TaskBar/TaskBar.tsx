import LeftSection from './LeftSection';
import AppSection from './AppSection';
import SettingsSection from './SettingsSection';

export default function TaskBar(): JSX.Element {
	return (
		<div
			className={`tb-primary z-999 fixed bottom-0 left-0 flex h-[7%] w-full items-center justify-between border border-solid border-black px-3`}
		>
			<LeftSection />
			<AppSection />
			<SettingsSection />
		</div>
	);
}
