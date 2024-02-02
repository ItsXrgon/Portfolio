import { useState } from 'react';
import Home from './Tabs/Home';
import Personalization from './Tabs/Personalization';
import TimeAndLanguage from './Tabs/TimeAndLanguage';
import About from './Tabs/About';
import { Brush, Calendar, HomeIcon, Info } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { TWindow } from '../../types';

type SettingsTabs = 'Home' | 'Personalization' | 'TimeAndLanguage' | 'About';

export default function Settings({ app }: { app: TWindow }) {
	const { t } = useTranslation();
	const [activeTab, setActiveTab] = useState('Home');

	const settingsTabsMap = {
		Home: <Home />,
		Personalization: <Personalization />,
		TimeAndLanguage: <TimeAndLanguage />,
		About: <About />,
	};

	function TabListItem({
		tab,
		icon,
		label,
	}: {
		tab: SettingsTabs;
		icon: JSX.Element;
		label: string;
	}) {
		return (
			<div
				className={`flex items-center gap-2 p-2 cursor-pointer border border-slate-50 hover:bg-slate-200 last-of-type:rounded-br-lg first-of-type:rounded-tr-lg ${
					tab === activeTab && 'bg-slate-200'
				}`}
				onClick={() => setActiveTab(tab)}
			>
				{icon}
				<div className="text-base whitespace-nowrap">{label}</div>
			</div>
		);
	}

	return (
		<div className="text-black bg-slate-100 flex w-full h-full">
			<div className="flex flex-col max-w-[30%] justify-between shadow-lg rounded-l-lg">
				<TabListItem
					tab="Home"
					icon={<HomeIcon size="1rem" />}
					label={t('settings.home')}
				/>
				<TabListItem
					tab="Personalization"
					icon={<Brush size="1rem" />}
					label={t('settings.personalization')}
				/>
				<TabListItem
					tab="TimeAndLanguage"
					icon={<Calendar size="1rem" />}
					label={t('settings.timeAndDate')}
				/>
				<TabListItem
					tab="About"
					icon={<Info size="1rem" />}
					label={t('settings.about')}
				/>
			</div>
			<div className="min-w-[70%] h-full flex items-center justify-center">
				{settingsTabsMap[activeTab as SettingsTabs]}
			</div>
		</div>
	);
}
