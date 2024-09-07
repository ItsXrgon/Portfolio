import { Label } from "@/app/UIComponents";

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
			className={`flex h-full cursor-pointer flex-col items-center justify-center gap-2 border border-slate-400 p-2 text-center hover:bg-slate-200 ${
				tab === activeTab ? "bg-slate-200" : "bg-white"
			}`}
			onClick={() => setActiveTab(tab)}
		>
			{icon}
			<Label.Big300>{label}</Label.Big300>
		</div>
	);
}
