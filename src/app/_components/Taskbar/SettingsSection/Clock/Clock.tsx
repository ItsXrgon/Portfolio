import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
	Label,
} from "@/components";
import { Button } from "@/components/ui/Button";
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
			<DropdownMenuTrigger asChild>
				<Button
					className={cn(
						"flex flex-col gap-0.5 h-full bg-transparent",
						"hover:bg-white/60 hover:backdrop-blur-md",
						open && "bg-white/60 backdrop-blur-md",
					)}
				>
					<Label
						size="md"
						weight="Medium"
						className="text-taskbar-text"
					>
						{formatLocaleTime(time)}
					</Label>
					<Label
						size="md"
						weight="Medium"
						className="text-taskbar-text"
					>
						{formatLocaleDate(time)}
					</Label>
				</Button>
			</DropdownMenuTrigger>
			<AnimatePresence>
				<DropdownMenuContent sideOffset={10} asChild>
					{open && (
						<motion.div
							initial={{ scaleY: 0, opacity: 0 }}
							animate={{ scaleY: 1, opacity: 1 }}
							exit={{ scaleY: 0, opacity: 0 }}
							transition={{
								type: "tween",
								duration: 0.15,
							}}
							className="origin-bottom h-[320px] w-[320px]"
						>
							<ClockPopup time={time} />
						</motion.div>
					)}
				</DropdownMenuContent>
			</AnimatePresence>
		</DropdownMenu>
	);
}
