import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSettingsDispatch } from "../../../store/hooks";
import { changeColour } from "../../../store/settingsSlice";
import ColourPickerPopup from "./ColourPicker";
import { hexToHSL } from "../../../utils/conversion";

export default function ColourItem({ path }: { path: string[] }) {
	const { t } = useTranslation();

	const settingsDispatch = useSettingsDispatch();

	const [value, setValue] = useState(
		document.documentElement.style.getPropertyValue(`--${path.join("-")}`),
	);

	const handleColourChange = useCallback(
		(path: string[], color: string) => {
			settingsDispatch(changeColour({ path, color: hexToHSL(color) }));
			setValue(color);
		},
		[settingsDispatch],
	);

	const key = useMemo(() => path[path.length - 1], [path]);

	return (
		<div className="ml-2 flex items-center gap-5" key={path.join("-")}>
			<div className="w-[15%] ">
				{t(`settings.personalization.${key}`, { defaultValue: key })}
			</div>
			<div
				className="flex h-8 w-[80%] items-center justify-center rounded-md border border-solid"
				style={{
					background: value.substring(0, 7),
					padding: 10,
				}}
			>
				{value}
			</div>
			<ColourPickerPopup
				color={value}
				setColour={(color: string) => handleColourChange(path, color)}
			/>
		</div>
	);
}
