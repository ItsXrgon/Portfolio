import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/app/UIComponents/Accordion";
import palette from "@/styles/palette";

import ColourItem from "../Components/ColourItem";

type ColorObject = { [key: string]: string | ColorObject };

export default function Personalization() {
	const { t } = useTranslation();

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
		[renderColorItems],
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
			<Accordion type="multiple" className="w-full">
				{colorItems}
			</Accordion>
		</>
	);
}
