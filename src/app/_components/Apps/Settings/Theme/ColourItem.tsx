import { motion } from "framer-motion";
import { useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

import { Flex, Label } from "@/components";
import { Button } from "@/components/ui/Button";
import { isColorDark } from "@/lib/misc";

import ColourPickerPopup from "./ColourPicker";

// Placeholder reset logic for per-color reset
function handleReset(path: string[]) {
	// TODO: Implement actual reset logic
	alert(`Reset color ${path.join("-")} to default (placeholder)`);
}

export default function ColourItem({ path }: { path: string[] }) {
	const { t } = useTranslation();
	const [colour, setColour] = useState(
		getComputedStyle(document.body).getPropertyValue(`--${path.join("-")}`),
	);
	const [animate, setAnimate] = useState(false);

	const handleColourChange = useCallback(
		(path: string[], color: string) => {
			document.documentElement.style.setProperty(
				`--${path.join("-")}`,
				color,
			);
			setColour(color);
			setAnimate(true);
			setTimeout(() => setAnimate(false), 400);
		},
		[setColour],
	);

	const key = useMemo(() => path[path.length - 1], [path]);

	return (
		<motion.div
			className="rounded-xl bg-yellow-100 border-2 border-dashed border-yellow-300 shadow-lg p-4 flex items-center justify-between my-2"
			initial={{ opacity: 0, y: 16 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -16 }}
			transition={{ duration: 0.2, ease: "easeOut" }}
		>
			<Label
				size="md"
				weight="Medium"
				className=" text-blue-900 min-w-[120px]"
			>
				{t(`settings.personalization.${key}`, {
					defaultValue: key,
				})}
			</Label>
			<Flex gap="2" align="center">
				<motion.div
					className="h-8 w-32 rounded-md border border-solid flex items-center justify-center font-mono text-xs"
					style={{
						background: colour,
						color: isColorDark(colour) ? "#FFFFFF" : "#000000",
					}}
					animate={animate ? { scale: 1.1 } : { scale: 1 }}
					transition={{ type: "spring", stiffness: 300, damping: 15 }}
				>
					{colour}
				</motion.div>
				<ColourPickerPopup
					color={colour}
					setColour={(color: string) =>
						handleColourChange(path, color)
					}
				/>
				<Button
					variant="outline"
					size="sm"
					className="border-blue-300 border-dashed  text-blue-900 hover:bg-blue-100"
					onClick={() => handleReset(path)}
				>
					Reset
				</Button>
			</Flex>
		</motion.div>
	);
}
