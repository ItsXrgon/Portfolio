import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Flex } from "@/app/UIComponents";

import ColourPickerPopup from "./ColourPicker";
import { colorIsDark } from "@/utils/misc";

export default function ColourItem({ path }: { path: string[] }) {
	const { t } = useTranslation();
	const [colour, setColour] = useState(
		getComputedStyle(document.body).getPropertyValue(`--${path.join("-")}`),
	);

	const handleColourChange = useCallback(
		(path: string[], color: string) => {
			document.documentElement.style.setProperty(
				`--${path.join("-")}`,
				color,
			);
			setColour(color);
		},
		[setColour],
	);

	const key = useMemo(() => path[path.length - 1], [path]);

	return (
		<Flex
			className="ml-1"
			align="center"
			justify="between"
			key={path.join("-")}
		>
			<div>
				{t(`settings.personalization.${key}`, {
					defaultValue: key,
				})}
			</div>
			<Flex gap="2">
				<Flex
					align="center"
					justify="center"
					className="h-8 w-80 rounded-md border border-solid"
					style={{
						background: colour,
						color: colorIsDark(colour) ? "#FFFFFF" : "#000000",
					}}
				>
					{colour}
				</Flex>
				<ColourPickerPopup
					color={colour}
					setColour={(color: string) =>
						handleColourChange(path, color)
					}
				/>
			</Flex>
		</Flex>
	);
}
