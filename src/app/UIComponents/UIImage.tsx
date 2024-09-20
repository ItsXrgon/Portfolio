import Image from "next/image";
import check_calculator from "root/public/assets/appicons/check_calculator.svg";
import curaflow from "root/public/assets/appicons/curaflow.png";
import github from "root/public/assets/appicons/github.svg";
import haskell_chess_game from "root/public/assets/appicons/haskell_chess_game.svg";
import multi_unit_converter from "root/public/assets/appicons/multi-unit-converter.svg";
import settings from "root/public/assets/appicons/settings.svg";
import terminal from "root/public/assets/appicons/terminal.svg";
import user_purge from "root/public/assets/appicons/user_purge.png";
import xrbot from "root/public/assets/appicons/xrbot.png";
import curaflow_hero_ar from "root/public/assets/curaflow/curaflow-ar-hero.png";
import curaflow_hero_en from "root/public/assets/curaflow/curaflow-en-hero.png";
import curaflow_title from "root/public/assets/curaflow/curaflow-logo.svg";
import multi_unit_converter_logo from "root/public/assets/multiunitconverter/multi-unit-converter_logo.svg";
import xrbot_flag_guesser from "root/public/assets/xrbot/xrbot_flag_guesser.png";
import xrbot_tic_tac_toe from "root/public/assets/xrbot/xrbot_tic_tac_toe.png";

import { IconProps } from "@/app/types";

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
