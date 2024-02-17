import Chrome from '@uiw/react-color-chrome';
import { GithubPlacement } from '@uiw/react-color-github';
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from '../../../globalComponents/Popover';
import { Paintbrush } from 'lucide-react';

export default function ColourPickerPopup({
	colour,
	setColour,
}: {
	colour: string;
	setColour: (colour: string) => void;
}) {
	return (
		<Popover>
			<PopoverTrigger className="flex items-center justify-center shadow-md p-1 rounded-md">
				<Paintbrush size={24} />
			</PopoverTrigger>
			<PopoverContent className="bg-transparent border-none shadow-none">
				<Chrome
					color={colour}
					style={{ float: 'left' }}
					placement={GithubPlacement.Right}
					onChange={(color) => {
						setColour(color.hexa);
					}}
				/>
			</PopoverContent>
		</Popover>
	);
}
