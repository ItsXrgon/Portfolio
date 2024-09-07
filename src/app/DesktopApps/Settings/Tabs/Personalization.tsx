import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Label,
} from "@/app/UIComponents";
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
							<AccordionTrigger>
								<Label.Mid200>
									{t(`settings.personalization.${key}`, {
										defaultValue: key,
									})}
								</Label.Mid200>
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
			<Accordion type="multiple" className="w-full">
				{colorItems}
			</Accordion>
		</>
	);
}
