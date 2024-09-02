import { useCallback, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSettingsDispatch } from '../../../store/hooks';
import { changeColour } from '../../../store/settingsSlice';
import ColourPickerPopup from './ColourPicker';

export default function ColourItem({ path }: { path: string[] }) {
	const { t } = useTranslation();

	const settingsDispatch = useSettingsDispatch();

	const [value, setValue] = useState(
		document.documentElement.style.getPropertyValue(`--${path.join('-')}`)
	);

	const handleColourChange = useCallback(
		(path: string[], colour: string) => {
			settingsDispatch(changeColour({ path, colour }));
			setValue(colour);
		},
		[settingsDispatch]
	);

	const key = useMemo(() => path[path.length - 1], [path]);

	return (
		<div className="flex items-center gap-5 ml-2" key={path.join('-')}>
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
				colour={value}
				setColour={(colour: string) => handleColourChange(path, colour)}
			/>
		</div>
	);
}
