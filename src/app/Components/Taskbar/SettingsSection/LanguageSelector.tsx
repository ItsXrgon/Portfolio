"use client";

import { Globe2 } from "lucide-react";
import { useTranslation } from "react-i18next";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/app/UIComponents/DropDownMenu";

import i18n, { languageOptions } from "../../../i18n";

export default function LanguageSelector() {
	const { t } = useTranslation();

	function handleLanguageChange(selectedOption: string) {
		i18n.changeLanguage(selectedOption);
		document.documentElement.lang = selectedOption;
	}

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="rounded-lg px-3 py-2">
				<Globe2 className="text-taskbar-icon" />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56" sideOffset={15}>
				<DropdownMenuLabel>
					{t("settings.select_language")}
				</DropdownMenuLabel>
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
						>
							{option.label}
						</DropdownMenuRadioItem>
					))}
				</DropdownMenuRadioGroup>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
