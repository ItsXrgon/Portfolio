import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

import { Flex } from "@/components";
import { languageOptions } from "@/i18n";

export default function TimeAndLanguage() {
	const { i18n } = useTranslation();

	return (
		<Flex className="flex-wrap gap-4 justify-center w-full">
			{languageOptions.map((option) => {
				const isActive = i18n.language === option.value;
				return (
					<button
						key={option.value}
						onClick={() => changeLanguage(option.value)}
						className={`relative rounded-xl bg-yellow-100 border-2 border-dashed border-yellow-300 shadow-lg px-6 py-4  text-blue-900 text-lg transition-all duration-150 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400 ${isActive ? "border-blue-400 scale-105 z-10" : ""}`}
						style={{ minWidth: 120 }}
					>
						{option.label}
						{isActive && (
							<span className="absolute -top-3 -right-3 bg-blue-400 text-white rounded-full px-2 py-1 text-xs font-bold shadow">
								Selected
							</span>
						)}
					</button>
				);
			})}
		</Flex>
	);
}
