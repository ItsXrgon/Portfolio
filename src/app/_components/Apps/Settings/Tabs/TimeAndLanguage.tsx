import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import {
	Flex,
	Label,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components";
import i18n, { languageOptions } from "@/i18n";

export default function TimeAndLanguage() {
	const { t } = useTranslation();

	return (
		<>
			<Flex isColumn className="items-center gap-5">
				<Flex isColumn className="w-full gap-2">
					<Label.Big300>
						{t("settings.languageAndTime.language")}
					</Label.Big300>
					<Select
						onValueChange={changeLanguage}
						value={i18n.language}
					>
						<SelectTrigger>
							<SelectValue
								placeholder={t(
									"settings.languageAndTime.language_placeholder",
								)}
							/>
						</SelectTrigger>
						<SelectContent>
							{languageOptions.map((option) => (
								<SelectItem
									key={option.value}
									value={option.value}
								>
									{option.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</Flex>
			</Flex>
		</>
	);
}
