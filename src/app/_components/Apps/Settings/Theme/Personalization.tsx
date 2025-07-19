import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	Label,
} from "@/components";
import { Button } from "@/components/ui/Button";
import palette from "@/styles/palette";

import ColourItem from "./ColourItem";

// Placeholder reset all logic
function handleResetAll() {
	// TODO: Implement actual reset logic
	alert("Reset all colors to default (placeholder)");
}

type ColorObject = { [key: string]: string | ColorObject };

export default function Personalization() {
	const { t } = useTranslation();

	const renderColorItems = useCallback(
		(obj: ColorObject, path: string[] = []) => {
			return Object.entries(obj).map(([key, value]) => {
				const currentPath = [...path, key];
				if (typeof value === "string") {
					return (
						<motion.div
							key={key}
							initial={{ opacity: 0, y: 16 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -16 }}
							transition={{ duration: 0.2, ease: "easeOut" }}
						>
							<ColourItem path={currentPath} />
						</motion.div>
					);
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
							className="rounded-xl p-2 bg-yellow-100 border-2 border-dashed border-yellow-300 shadow-lg my-2"
						>
							<AccordionTrigger>
								<Label
									size="lg"
									weight="Bold"
									className=" text-blue-900"
								>
									{t(`settings.personalization.${key}`, {
										defaultValue: key,
									})}
								</Label>
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
			<div className="flex items-center justify-between mb-4">
				<Label size="xl" weight="Bold" className=" text-blue-900">
					Theme Personalization
				</Label>
				<Button
					onClick={handleResetAll}
					className="bg-blue-200 border-2 border-blue-300 border-dashed  text-blue-900 hover:bg-blue-300 transition-colors"
				>
					Reset All
				</Button>
			</div>
			<Accordion type="multiple" className="w-full">
				<AnimatePresence>{colorItems}</AnimatePresence>
			</Accordion>
		</>
	);
}
