import { useEffect, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Label,
} from "@/components";
import { formatLocaleDate, formatLocaleTime } from "@/lib/formatting/date";
import { cn } from "@/lib/utils";

import ClockPopup from "./ClockPopup";

export default function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	const [open, setOpen] = useState(false);

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
					{formatLocaleTime(time)}
				</Label.Mid300>
				<Label.Mid300 className="text-taskbar-text">
					{formatLocaleDate(time)}
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
