import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "../../../globalComponents/Accordion";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "../../../globalComponents/Select";
import { useSettingsDispatch, useSettingsSelector } from "../../../store/hooks";
import {
	selectActiveTheme,
	selectThemes,
	setActiveTheme,
} from "../../../store/settingsSlice";
import ColourItem from "../Components/ColourItem";
import palette from "../../../palette";

type ColorObject = { [key: string]: string | ColorObject };

export default function Personalization() {
	const { t } = useTranslation();
	const settingsDispatch = useSettingsDispatch();
	const activeTheme = useSettingsSelector(selectActiveTheme);
	const themes = useSettingsSelector(selectThemes);

	const handleThemeChange = useCallback(
		(themeName: string) => {
			settingsDispatch(setActiveTheme(themeName));
		},
		[settingsDispatch],
	);

	const renderColorItems = useCallback(
		(obj: ColorObject, path: string[] = []) => {
			return Object.entries(obj).map(([key, value]) => {
				const currentPath = [...path, key];
				if (typeof value === "string") {
					return <ColourItem path={currentPath} key={key} />;
				} else {
					return (
						<AccordionItem
							value={currentPath.join("-")}
							key={currentPath.join("-")}
							style={{
								marginLeft:
									currentPath.length > 1
										? `${currentPath.length * 4}px`
										: "0px",
							}}
						>
							<AccordionTrigger className="text-base">
								{t(`settings.personalization.${key}`, {
									defaultValue: key,
								})}
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-2">
								{renderColorItems(value, currentPath)}
							</AccordionContent>
						</AccordionItem>
					);
				}
			});
		},
		[t],
	);

	const colorItems = useMemo(
		() => renderColorItems(palette),
		[renderColorItems, activeTheme],
	);

	return (
		<>
			<div>
				<h1 className="text-2xl font-bold">
					{t("settings.personalization.personalization")}
				</h1>
				<p className="text-sm text-gray-500">
					{t("settings.personalization.personalization_description")}
				</p>
			</div>
			<div className="mb-4">
				<label htmlFor="theme-select" className="mb-2 block">
					Select Theme:
				</label>
				<Select
					onValueChange={handleThemeChange}
					value={activeTheme.name}
				>
					<SelectTrigger className="w-full rounded border p-2">
						<SelectValue
							placeholder={t(
								"settings.languageAndTime.language_placeholder",
							)}
						/>
					</SelectTrigger>
					<SelectContent>
						{themes?.map((theme) => (
							<SelectItem key={theme.name} value={theme.name}>
								{theme.name}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
			<Accordion type="multiple" className="w-full">
				{colorItems}
			</Accordion>
		</>
	);
}
