import { changeLanguage } from "i18next";
import { useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
	Flex,
	Label,
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/app/UIComponents";
import i18n, { languageOptions, timeZoneOptions } from "@/app/i18n";
import { changeTimeZone } from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";

export default function TimeAndLanguage() {
	const { t } = useTranslation();
	const dispatch = useAppDispatch();

	const handleTimezoneChange = useCallback(
		(selectedOption: string) => {
			dispatch(changeTimeZone(selectedOption));
		},
		[dispatch],
	);

	return (
		<>
			<Flex isColumn className="items-center gap-5">
				<Flex isColumn className="w-full gap-2">
					<Label.Big300>
						{t("settings.languageAndTime.language")}
					</Label.Big300>
					<Select
						onValueChange={changeLanguage}
						value={i18n.language}
					>
						<SelectTrigger>
							<SelectValue
								placeholder={t(
									"settings.languageAndTime.language_placeholder",
								)}
							/>
						</SelectTrigger>
						<SelectContent>
							{languageOptions.map((option) => (
								<SelectItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Flex>
				<Flex isColumn className="w-full gap-2">
					<Label.Big300>
						{t("settings.languageAndTime.timezone")}
					</Label.Big300>
					<Select onValueChange={handleTimezoneChange}>
						<SelectTrigger>
							<SelectValue
								placeholder={t(
									"settings.languageAndTime.timezone_placeholder",
								)}
							/>
						</SelectTrigger>
						<SelectContent>
							{timeZoneOptions.map((group) => (
								<SelectGroup key={group.label}>
									<SelectLabel>{group.label}</SelectLabel>
									{group.options.map((option) => (
										<SelectItem
											key={option.value}
											value={option.value}
										>
											{option.label}
										</SelectItem>
									))}
								</SelectGroup>
							))}
						</SelectContent>
					</Select>
				</Flex>
			</Flex>
		</>
	);
}
