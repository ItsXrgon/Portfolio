import { SettingsTabs } from '../Settings';

export function TabListItem({
	tab,
	icon,
	label,
	activeTab,
	setActiveTab,
}: {
	tab: SettingsTabs;
	icon: JSX.Element;
	label: string;
	activeTab: string;
	setActiveTab: (tab: string) => void;
}) {
	return (
		<div
			className={`flex items-center gap-2 p-2 h-1/2 cursor-pointer border border-slate-400 hover:bg-slate-200 last-of-type:rounded-br-lg first-of-type:rounded-tr-lg ${
				tab === activeTab ? 'bg-slate-200' : 'bg-white'
			}`}
			onClick={() => setActiveTab(tab)}
		>
			{icon}
			<div className="text-base whitespace-nowrap">{label}</div>
		</div>
	);
}
