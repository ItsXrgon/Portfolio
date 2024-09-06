import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSettingsDispatch } from "../../../store/hooks";
import ColourPickerPopup from "./ColourPicker";
import { updateTheme } from "../../../store/settingsSlice";

export default function ColourItem({ path }: { path: string[] }) {
	const { t } = useTranslation();

	const settingsDispatch = useSettingsDispatch();

	const [value, setValue] = useState(
		getComputedStyle(document.body).getPropertyValue(`--${path.join("-")}`),
	);

	const handleColourChange = useCallback(
		(path: string[], color: string) => {
			setValue(color);
			settingsDispatch(updateTheme({ path, color }));
		},
		[settingsDispatch],
	);

	const key = useMemo(() => path[path.length - 1], [path]);

	return (
		<div
			className="ml-1 flex w-full items-center justify-between"
			key={path.join("-")}
		>
			<div>
				{t(`settings.personalization.${key}`, {
					defaultValue: key,
				})}
			</div>
			<div className="flex gap-2">
				<div
					className="flex h-8 w-80 items-center justify-center rounded-md border border-solid"
					style={{
						background: value,
					}}
				>
					{value}
				</div>
				<ColourPickerPopup
					color={value}
					setColour={(color: string) =>
						handleColourChange(path, color)
					}
				/>
			</div>
		</div>
	);
}
