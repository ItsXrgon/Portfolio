import { SettingsTabs } from "../Settings";

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
			className={`flex h-1/2 cursor-pointer items-center gap-2 border border-slate-400 p-2 first-of-type:rounded-tr-lg last-of-type:rounded-br-lg hover:bg-slate-200 ${
				tab === activeTab ? "bg-slate-200" : "bg-white"
			}`}
			onClick={() => setActiveTab(tab)}
		>
			{icon}
			<div className="whitespace-nowrap text-base">{label}</div>
		</div>
	);
}