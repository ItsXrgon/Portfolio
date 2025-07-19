import { AnimatePresence, motion } from "framer-motion";
import { CalendarClock, HomeIcon, Info, Palette } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Flex, Label } from "@/components";

import About from "./About/About";
import Home from "./Home/Home";
import Personalization from "./Theme/Personalization";
import TimeAndLanguage from "./TimeAndLanguage/TimeAndLanguage";
import "./index.css";

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
		<Flex
			className="h-full w-full rounded-lg blueprint-scrollbar font-sketchy overflow-hidden"
			style={{
				backgroundColor: "#183153",
				backgroundImage:
					"linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
				backgroundSize: "32px 32px",
			}}
		>
			<Flex className="h-full w-full overflow-y-auto">
				<Flex
					isColumn
					className="w-48 shrink-0 grow-0 overflow-y-hidden gap-2 p-4"
				>
					{Object.keys(settingsTabsMap).map((tab) => (
						<div
							key={tab}
							className={`relative mb-2 cursor-pointer rounded-lg bg-yellow-100 shadow-lg border-2 border-dashed border-yellow-300 transition-all duration-200 hover:scale-105 hover:shadow-xl ${activeTab === tab ? "after:absolute after:left-2 after:right-2 after:bottom-1 after:h-1 after:bg-blue-400 after:rounded-full after:animate-pulse" : ""}`}
							onClick={() => setActiveTab(tab)}
						>
							<div className="flex flex-col items-center gap-1 py-3">
								<span className="text-blue-900">
									{settingsTabsIcons[tab as SettingsTabs]}
								</span>
								<Label
									size="md"
									weight="Bold"
									className=" text-blue-900"
								>
									{t(settingsTabsTitles[tab as SettingsTabs])}
								</Label>
							</div>
						</div>
					))}
				</Flex>
				<Flex isColumn gap="4" className="w-full overflow-y-auto p-4">
					<Flex isColumn gap="1">
						<Label
							size="2xl"
							weight="Bold"
							className=" text-blue-100"
						>
							<div className="tinylytics_hits"></div>
							{t(settingsTabsTitles[activeTab as SettingsTabs])}
						</Label>
						<Label
							size="lg"
							weight="Medium"
							className=" text-blue-200"
						>
							{t(
								settingsTabsSubtitles[
									activeTab as SettingsTabs
								],
							)}
						</Label>
					</Flex>
					<hr className="border-blue-300 border-dashed" />
					<AnimatePresence mode="wait">
						<motion.div
							key={activeTab}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -16 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
							className="rounded-xl bg-white/90 p-6 shadow-xl border-2 border-dashed border-blue-300"
						>
							{settingsTabsMap[activeTab as SettingsTabs]}
						</motion.div>
					</AnimatePresence>
				</Flex>
			</Flex>
		</Flex>
	);
}
