import { useState } from "react";
import Home from "./Tabs/Home";
import Personalization from "./Tabs/Personalization";
import TimeAndLanguage from "./Tabs/TimeAndLanguage";
import About from "./Tabs/About";
import { Brush, Calendar, HomeIcon, Info } from "lucide-react";
import { useTranslation } from "react-i18next";
import { TabListItem } from "./Components/TabListItem";

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
			<div className="flex max-w-[30%] flex-col bg-white shadow-lg">
				<TabListItem
					tab="Home"
					icon={<HomeIcon size="1rem" />}
					label={t("settings.home")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabListItem
					tab="Personalization"
					icon={<Brush size="1rem" />}
					label={t("settings.personalization.personalization")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabListItem
					tab="TimeAndLanguage"
					icon={<Calendar size="1rem" />}
					label={t("settings.languageAndTime.languageAndTime")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
				<TabListItem
					tab="About"
					icon={<Info size="1rem" />}
					label={t("settings.about")}
					activeTab={activeTab}
					setActiveTab={setActiveTab}
				/>
			</div>
			<div className="flex w-full flex-col gap-5 overflow-y-scroll bg-white p-5">
				{settingsTabsMap[activeTab as SettingsTabs]}
			</div>
		</>
	);
}
