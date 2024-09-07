import Label from "@/app/UIComponents/Label";

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
			className={`flex flex-col text-center justify-center h-full cursor-pointer items-center gap-2 border border-slate-400 p-2 hover:bg-slate-200 ${
				tab === activeTab ? "bg-slate-200" : "bg-white"
			}`}
			onClick={() => setActiveTab(tab)}
		>
			{icon}
			<Label.Big300>{label}</Label.Big300>
		</div>
	);
}
