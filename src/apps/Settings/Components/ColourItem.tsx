import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ColourPickerPopup from "./ColourPicker";

export default function ColourItem({ path }: { path: string[] }) {
	const { t } = useTranslation();

	const [value, setValue] = useState(
		getComputedStyle(document.body).getPropertyValue(`--${path.join("-")}`),
	);

	const handleColourChange = useCallback((path: string[], color: string) => {
		setValue(color);
		document.documentElement.style.setProperty(
			`--${path.join("-")}`,
			color,
		);
	}, []);

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
					{getComputedStyle(document.body).getPropertyValue(
						`--${path.join("-")}`,
					)}
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
