import NextImage, { ImageProps } from "next/image";

export const appIconsMap = {
	github: "/assets/appicons/github.svg",
	settings: "/assets/appicons/settings.svg",
	terminal: "/assets/appicons/terminal.svg",
	multi_unit_converter: "/assets/appicons/multi-unit-converter.svg",
	curaflow: "/assets/appicons/curaflow.png",
	xrbot: "/assets/appicons/xrbot.png",
	haskell_chess_game: "/assets/appicons/haskell-chess-game.png",
	virtual_automata: "/assets/appicons/virtual-automata.png",
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
