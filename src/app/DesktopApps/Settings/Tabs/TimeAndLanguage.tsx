import { useTranslation } from "react-i18next";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/app/UIComponents/Select";

import i18n, { languageOptions, timeZoneOptions } from "../../../i18n";

export default function TimeAndLanguage() {
	const { t } = useTranslation();

	function handleLanguageChange(selectedOption: string) {
		i18n.changeLanguage(selectedOption);
		document.documentElement.lang = selectedOption;
	}

	function handleTimezoneChange(selectedOption: string) {
		// Set the timezone
		console.log(selectedOption);
	}

	return (
		<>
			<div>
				<h1 className="text-2xl font-bold">
					{t("settings.languageAndTime.languageAndTime")}
				</h1>
				<p className="text-sm text-gray-500">
					{t("settings.languageAndTime.languageAndTime_description")}
				</p>
			</div>
			<div className="flex flex-col items-center justify-center gap-5">
				<div className="flex w-full flex-col gap-2">
					<label className="text-sm font-semibold">
						{t("settings.languageAndTime.language")}
					</label>
					<Select
						onValueChange={handleLanguageChange}
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
									onClick={() =>
										handleLanguageChange(option.value)
									}
								>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
				<div className="flex w-full flex-col gap-2">
					<label className="text-sm font-semibold">
						{t("settings.languageAndTime.timezone")}
					</label>
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
											onClick={() =>
												handleTimezoneChange(
													option.value,
												)
											}
										>
											{option.label}
										</SelectItem>
									))}
								</SelectGroup>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>
		</>
	);
}
