import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '../../../globalComponents/Accordion';
import { changeColour, selectTheme } from '../../../store/settingsSlice';
import { useSettingsDispatch, useSettingsSelector } from '../../../store/hooks';
import { useTranslation } from 'react-i18next';
import ColourPickerPopup from '../Components/ColourPicker';
import { TTheme } from '../../../types';
import { useCallback } from 'react';

export default function Personalization() {
	const { t } = useTranslation();
	const settingsDispatch = useSettingsDispatch();
	const theme = useSettingsSelector(selectTheme);

	const handleColourChange = useCallback(
		(target: string, variant: string, colour: string) => {
			settingsDispatch(
				changeColour({
					target,
					variant,
					colour,
				})
			);
		},
		[settingsDispatch]
	);

	return (
		<>
			<div>
				<h1 className="text-2xl font-bold">
					{t('settings.personalization.personalization')}
				</h1>
				<p className="text-sm text-gray-500">
					{t('settings.personalization.personalization_description')}
				</p>
			</div>
			<Accordion type="multiple" className="w-full">
				{Object.keys(theme)
					.filter((target) => target !== 'name' && target !== 'wallpaper')
					.map((target) => (
						<AccordionItem value={target} key={target}>
							<AccordionTrigger className="">
								{t(`settings.personalization.${target}`)}
							</AccordionTrigger>
							<AccordionContent className="flex flex-col gap-2">
								{Object.keys(theme[target as keyof TTheme]).map((variant) => (
									<div className="flex items-center gap-5" key={variant}>
										<div className="w-[15%] indent-2">
											{t(`settings.personalization.${variant}`)}
										</div>
										<div
											className="w-[80%] h-8 flex items-center justify-center rounded-md border border-solid"
											key={variant}
											style={{
												background:
													// @ts-ignore
													theme[target as keyof TTheme][
														variant as any
													] as string,
												padding: 10,
											}}
										>
											{
												// @ts-ignore
												theme[target as keyof TTheme][variant as any] as string
											}
										</div>
										<ColourPickerPopup
											colour={
												// @ts-ignore
												theme[target as keyof TTheme][variant as any] as string
											}
											setColour={(colour: string) =>
												handleColourChange(target, variant, colour)
											}
										/>
									</div>
								))}
							</AccordionContent>
						</AccordionItem>
					))}
			</Accordion>
		</>
	);
}
