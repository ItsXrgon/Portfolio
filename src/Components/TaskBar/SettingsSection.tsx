import { Globe2, Settings } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import i18n, { languageOptions } from '../../i18n';
import { useState, useEffect } from 'react';
import { selectTheme } from '../../store/settingsSlice';
import { useSettingsSelector } from '../../store/hooks';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../../globalComponents/DropDownMenu';
import Clock from './Clock';

export default function SettingsSection() {
	const { t } = useTranslation();
	const theme = useSettingsSelector(selectTheme);

	const [time, setTime] = useState(new Date());

	function handleLanguageChange(selectedOption: string) {
		i18n.changeLanguage(selectedOption);
		document.documentElement.lang = selectedOption;
	}

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="flex items-center gap-1">
			<DropdownMenu>
				<DropdownMenuTrigger className="text-accent flex flex-col items-center rounded-lg px-3 hover:bg-slate-50 hover:bg-opacity-60">
					<label className="text-sm">{time.toLocaleTimeString()}</label>
					<label className="text-sm">{new Date().toLocaleDateString()}</label>
				</DropdownMenuTrigger>
				<DropdownMenuContent
					className="w-[320px] h-[320px]"
					sideOffset={15}
				>
					<Clock time={time} />
				</DropdownMenuContent>
			</DropdownMenu>
			<div className="h-8 w-px bg-white" />
			<DropdownMenu>
				<DropdownMenuTrigger className="text-accent px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-60 ">
					<Globe2 color={theme.text.accent} />
				</DropdownMenuTrigger>
				<DropdownMenuContent className="w-56" sideOffset={15}>
					<DropdownMenuLabel>{t('settings.select_language')}</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuRadioGroup
						value={i18n.language}
						onValueChange={handleLanguageChange}
					>
						{languageOptions.map((option) => (
							<DropdownMenuRadioItem
								className="flex items-center"
								value={option.value}
								key={option.value}
								onClick={() => handleLanguageChange(option.value)}
							>
								{option.label}
							</DropdownMenuRadioItem>
						))}
					</DropdownMenuRadioGroup>
				</DropdownMenuContent>
			</DropdownMenu>
			<div className="h-8 w-px bg-white" />
			<div className="text-accent px-3 py-2 rounded-lg hover:bg-slate-50 hover:bg-opacity-60 ">
				<Settings color={theme.text.accent} />
			</div>
		</div>
	);
}
