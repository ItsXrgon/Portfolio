import curaflow from "@assets/appicons/curaflow.png";
import github from "@assets/appicons/github.svg";
import haskell_chess_game from "@assets/appicons/haskell_chess_game.svg";
import multi_unit_converter from "@assets/appicons/multi-unit-converter.svg";
import settings from "@assets/appicons/settings.svg";
import terminal from "@assets/appicons/terminal.svg";
import xrbot from "@assets/appicons/xrbot.png";
import NextImage, { ImageProps } from "next/image";

export const appIconsMap = {
	github,
	settings,
	terminal,
	multi_unit_converter,
	curaflow,
	xrbot,
	haskell_chess_game,
};
export type AppIcons = keyof typeof appIconsMap;

export interface AppIconProps extends Omit<ImageProps, "src"> {
	icon: AppIcons;
}

export function AppIcon({
	icon,
	width,
	height,
	draggable = false,
	...rest
}: AppIconProps) {
	return (
		<NextImage
			{...rest}
			src={appIconsMap[icon]}
			draggable={draggable}
			width={width || 24}
			height={height || 24}
		/>
	);
}
