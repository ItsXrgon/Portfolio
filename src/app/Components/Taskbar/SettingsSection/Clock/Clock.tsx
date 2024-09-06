import { useEffect, useMemo, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from "@/app/UIComponents/DropDownMenu";
import Label from "@/app/UIComponents/Label";
import { localeDateFormatter, localeTimeFormatter } from "@/utils/formatting";

import ClockPopup from "./ClockPopup";

export default function Clock() {
	const [time, setTime] = useState<Date | undefined>();

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formattedDate = useMemo(() => {
		return time ? localeDateFormatter(time) : "";
	}, [time]);

	const formattedTime = useMemo(() => {
		return time ? localeTimeFormatter(time) : "";
	}, [time]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex flex-col items-center rounded-lg px-3">
				<Label.Mid300 className="text-taskbar-text">
					{formattedTime}
				</Label.Mid300>
				<Label.Mid300 className="text-taskbar-text">
					{formattedDate}
				</Label.Mid300>
			</DropdownMenuTrigger>
			<DropdownMenuContent
				className="h-[320px] w-[320px]"
				sideOffset={15}
			>
				<ClockPopup time={time} />
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
