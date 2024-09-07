import { CalendarClock, HomeIcon, Info, Palette } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Flex, Label } from "@/app/UIComponents";

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

const settingsTabsMap = {
	Home: <Home />,
	Personalization: <Personalization />,
	TimeAndLanguage: <TimeAndLanguage />,
	About: <About />,
};

const settingsTabsTitles = {
	Home: "settings.home.title",
	Personalization: "settings.personalization.title",
	TimeAndLanguage: "settings.languageAndTime.title",
	About: "settings.about.title",
};

const settingsTabsSubtitles = {
	Home: "settings.home.description",
	Personalization: "settings.personalization.description",
	TimeAndLanguage: "settings.languageAndTime.description",
	About: "settings.about.description",
};

const settingsTabsIcons = {
	Home: <HomeIcon width={32} height={32} />,
	Personalization: <Palette width={32} height={32} />,
	TimeAndLanguage: <CalendarClock width={32} height={32} />,
	About: <Info width={32} height={32} />,
};

export default function Settings() {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState("Home");

	return (
		<>
			<Flex isColumn className="w-40 shrink-0 grow-0 overflow-y-scroll">
				{Object.keys(settingsTabsMap).map((tab) => (
					<TabListItem
						tab={tab as SettingsTabs}
						icon={settingsTabsIcons[tab as SettingsTabs]}
						label={t(settingsTabsTitles[tab as SettingsTabs])}
						activeTab={activeTab}
						setActiveTab={setActiveTab}
						key={tab}
					/>
				))}
			</Flex>
			<div className="flex w-full flex-col gap-6 overflow-y-scroll bg-white p-4">
				<Flex isColumn gap="1">
					<Label.Big500>
						{t(settingsTabsTitles[activeTab as SettingsTabs])}
					</Label.Big500>
					<Label.Mid300>
						{t(settingsTabsSubtitles[activeTab as SettingsTabs])}
					</Label.Mid300>
				</Flex>
				{settingsTabsMap[activeTab as SettingsTabs]}
			</div>
		</>
	);
}
