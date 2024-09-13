import Image from "next/image";
import curaflow from "root/public/assets/appicons/curaflow.png";
import github from "root/public/assets/appicons/github.svg";
import settings from "root/public/assets/appicons/settings.svg";
import terminal from "root/public/assets/appicons/terminal.svg";
import curaflow_hero_ar from "root/public/assets/curaflow/curaflow-ar-hero.png";
import curaflow_hero_en from "root/public/assets/curaflow/curaflow-en-hero.png";
import curaflow_title from "root/public/assets/curaflow/curaflow-logo.svg";

import { IconProps } from "@/app/types";

export const appIconsMap = {
	github,
	settings,
	terminal,
	curaflow,
	curaflow_title,
	curaflow_hero_ar,
	curaflow_hero_en,
};
export type AppIcons = keyof typeof appIconsMap;

export default function UIImage({
	icon,
	width,
	height,
	draggable = false,
	...rest
}: IconProps) {
	return (
		<Image
			alt={icon ?? ""}
			src={icon ? appIconsMap[icon] : rest.src}
			draggable={draggable}
			width={width || 24}
			height={height || 24}
			{...rest}
		/>
	);
}
