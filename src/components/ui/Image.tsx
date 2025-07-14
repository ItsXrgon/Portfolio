import check_calculator from "@assets/appicons/check_calculator.svg";
import curaflow from "@assets/appicons/curaflow.png";
import github from "@assets/appicons/github.svg";
import haskell_chess_game from "@assets/appicons/haskell_chess_game.svg";
import multi_unit_converter from "@assets/appicons/multi-unit-converter.svg";
import settings from "@assets/appicons/settings.svg";
import terminal from "@assets/appicons/terminal.svg";
import user_purge from "@assets/appicons/user_purge.png";
import xrbot from "@assets/appicons/xrbot.png";
import curaflow_hero_ar from "@assets/curaflow/curaflow-ar-hero.png";
import curaflow_hero_en from "@assets/curaflow/curaflow-en-hero.png";
import curaflow_title from "@assets/curaflow/curaflow-logo.svg";
import multi_unit_converter_logo from "@assets/multiunitconverter/multi-unit-converter_logo.svg";
import xrbot_flag_guesser from "@assets/xrbot/xrbot_flag_guesser.png";
import xrbot_tic_tac_toe from "@assets/xrbot/xrbot_tic_tac_toe.png";
import NextImage from "next/image";

import { IconProps } from "@/lib/types";

export const appIconsMap = {
	github,
	settings,
	terminal,
	multi_unit_converter,
	multi_unit_converter_logo,
	curaflow,
	curaflow_title,
	curaflow_hero_ar,
	curaflow_hero_en,
	xrbot,
	user_purge,
	xrbot_flag_guesser,
	xrbot_tic_tac_toe,
	haskell_chess_game,
	check_calculator,
};
export type AppIcons = keyof typeof appIconsMap;

export function Image({
	icon,
	width,
	height,
	draggable = false,
	...rest
}: IconProps) {
	return (
		<NextImage
			alt={icon ?? ""}
			src={icon ? appIconsMap[icon] : rest.src}
			draggable={draggable}
			width={width || 24}
			height={height || 24}
			{...rest}
		/>
	);
}
