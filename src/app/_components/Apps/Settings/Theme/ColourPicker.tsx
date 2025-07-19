import Chrome from "@uiw/react-color-chrome";
import { GithubPlacement } from "@uiw/react-color-github";
import { motion } from "framer-motion";
import { Paintbrush } from "lucide-react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/Popover";

export default function ColourPickerPopup({
	color,
	setColour,
}: {
	color: string;
	setColour: (color: string) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger className="flex items-center justify-center rounded-md p-1 shadow-md transition-transform hover:scale-110 bg-yellow-300 border-2 border-dashed border-yellow-600">
				<Paintbrush size={24} className="text-blue-900" />
			</PopoverTrigger>
			<PopoverContent className="border-none bg-transparent shadow-none">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.95 }}
					transition={{ duration: 0.15 }}
					className="rounded-xl bg-yellow-100 border-2 border-dashed border-yellow-300 shadow-lg p-2"
				>
					<Chrome
						color={color}
						style={{ float: "left" }}
						placement={GithubPlacement.Right}
						onChange={(color) => {
							setColour(color.hexa);
						}}
					/>
				</motion.div>
			</PopoverContent>
		</Popover>
	);
}
