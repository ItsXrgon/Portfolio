"use client";

import Image from "next/image";
import github from "root/public/github.svg";
import settings from "root/public/settings.svg";
import terminal from "root/public/terminal.svg";

import { IconProps } from "@/app/types";

export const appIconsMap = {
	github,
	settings,
	terminal,
};
export type AppIcons = keyof typeof appIconsMap;

export default function Icon({
	icon,
	width,
	height,
	draggable = false,
}: IconProps) {
	return (
		<Image
			alt={icon}
			src={appIconsMap[icon]}
			draggable={draggable}
			width={width || 24}
			height={height || 24}
		/>
	);
}
