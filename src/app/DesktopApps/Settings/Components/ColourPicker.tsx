import Chrome from "@uiw/react-color-chrome";
import { GithubPlacement } from "@uiw/react-color-github";
import { Paintbrush } from "lucide-react";

import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/app/UIComponents/Popover";

export default function ColourPickerPopup({
	color,
	setColour,
}: {
	color: string;
	setColour: (color: string) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger className="flex items-center justify-center rounded-md p-1 shadow-md">
				<Paintbrush size={24} />
			</PopoverTrigger>
			<PopoverContent className="border-none bg-transparent shadow-none">
				<Chrome
					color={color}
					style={{ float: "left" }}
					placement={GithubPlacement.Right}
					onChange={(color) => {
						setColour(color.hexa);
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
