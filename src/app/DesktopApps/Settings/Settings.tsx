import { Brush, CalendarClock, HomeIcon, Info } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import Flex from "@/app/UIComponents/Flex";

import { TabListItem } from "./Components/TabListItem";
import About from "./Tabs/About";
import Home from "./Tabs/Home";
import Personalization from "./Tabs/Personalization";
import TimeAndLanguage from "./Tabs/TimeAndLanguage";

export type SettingsTabs =
	| "Home"
	| "Personalization"
	| "TimeAndLanguage"
	| "About";

export default function Settings() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState("Home");

	const settingsTabsMap = {
		Home: <Home />,
		Personalization: <Personalization />,
		TimeAndLanguage: <TimeAndLanguage />,
		About: <About />,
	};

	return (
		<>
			<Flex isColumn className="w-40 shrink-0 grow-0 overflow-y-scroll">
				<TabListItem
					tab="Home"
					icon={<HomeIcon width={32} height={32} />}
					label={t("settings.home")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabListItem
					tab="Personalization"
					icon={<Brush width={32} height={32} />}
					label={t("settings.personalization.personalization")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabListItem
					tab="TimeAndLanguage"
					icon={<CalendarClock width={32} height={32} />}
					label={t("settings.languageAndTime.languageAndTime")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabListItem
					tab="About"
					icon={<Info width={32} height={32} />}
					label={t("settings.about")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</Flex>
			<div className="flex w-full flex-col gap-5 overflow-y-scroll bg-white p-5">
				{settingsTabsMap[activeTab as SettingsTabs]}
			</div>
		</>
	);
}
