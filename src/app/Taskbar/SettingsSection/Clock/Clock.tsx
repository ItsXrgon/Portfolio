import { useMemo, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Label,
} from "@/components/ui";
import { localeDateFormatter, localeTimeFormatter } from "@/lib/formatting";
import { cn } from "@/lib/utils";
import { selectTime, selectTimeZone } from "@/store/appsSlice";
import { useAppSelector } from "@/store/hooks";

import ClockPopup from "./ClockPopup";

export default function Clock() {
	const time = useAppSelector(selectTime);
	const timeZone = useAppSelector(selectTimeZone);

	const [open, setOpen] = useState(false);

	const formattedDate = useMemo(() => {
		return time ? localeDateFormatter(time, timeZone) : "";
	}, [time, timeZone]);

	const formattedTime = useMemo(() => {
		return time ? localeTimeFormatter(time, timeZone) : "";
	}, [time, timeZone]);

	return (
		<DropdownMenu open={open} onOpenChange={setOpen}>
			<DropdownMenuTrigger
				className={cn(
					"flex flex-col items-center rounded-lg px-3",
					"hover:bg-taskbar-icon-hover",
					open && "bg-taskbar-icon-pressed",
				)}
			>
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
