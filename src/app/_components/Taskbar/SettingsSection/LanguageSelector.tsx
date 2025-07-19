"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

import { Button } from "@/components/ui/Button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/DropDownMenu";
import i18n, { languageOptions } from "@/i18n";
import { cn } from "@/lib/utils";

export default function LanguageSelector() {
	const { t } = useTranslation();

	const [open, setOpen] = useState(false);

	function handleLanguageChange(selectedOption: string) {
		i18n.changeLanguage(selectedOption);
		document.documentElement.lang = selectedOption;
	}

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger asChild>
				<Button
					className={cn(
						"h-full bg-transparent",
						"hover:bg-white/60 hover:backdrop-blur-md",
						open && "bg-white/60 backdrop-blur-md",
					)}
				>
					<Globe2 className="text-taskbar-icon-default size-6" />
				</Button>
			</DropdownMenuTrigger>
			<AnimatePresence>
				<DropdownMenuContent sideOffset={10} asChild>
					{open && (
						<motion.div
							initial={{ height: 0, opacity: 0 }}
							animate={{ height: "auto", opacity: 1 }}
							exit={{ height: 0, opacity: 0 }}
							transition={{
								type: "tween",
								duration: 0.15,
							}}
							className="w-56"
						>
							<DropdownMenuLabel>
								{t("settings.select_language")}
							</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={i18n.language}
								onValueChange={handleLanguageChange}
							>
								{languageOptions.map((option) => (
									<DropdownMenuRadioItem
										className="flex items-center"
										value={option.value}
										key={option.value}
									>
										{option.label}
									</DropdownMenuRadioItem>
								))}
							</DropdownMenuRadioGroup>
						</motion.div>
					)}
				</DropdownMenuContent>
			</AnimatePresence>
		</DropdownMenu>
	);
}
