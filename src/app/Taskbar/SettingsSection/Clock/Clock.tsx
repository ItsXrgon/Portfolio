import { useMemo } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Label,
} from "@/app/UIComponents";
import { selectTime, selectTimeZone } from "@/app/stores/appsSlice";
import { useAppSelector } from "@/app/stores/hooks";
import { localeDateFormatter, localeTimeFormatter } from "@/utils/formatting";

import ClockPopup from "./ClockPopup";

export default function Clock() {
	const time = useAppSelector(selectTime);
	const timeZone = useAppSelector(selectTimeZone);

	const formattedDate = useMemo(() => {
		return time ? localeDateFormatter(time, timeZone) : "";
	}, [time, timeZone]);

	const formattedTime = useMemo(() => {
		return time ? localeTimeFormatter(time, timeZone) : "";
	}, [time, timeZone]);

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
