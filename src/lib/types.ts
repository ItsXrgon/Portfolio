import { ImageProps } from "next/image";

import { AppIcons } from "@/components/ui/Image";
import palette from "@/styles/palette";

/**
 * The theme interface
 * @param name - The name of the theme
 * @param theme - The theme
 * @param wallpaper - The wallpaper
 */
export interface TTheme {
	name: string;
	theme: typeof palette;
	wallpaper: string;
}

export interface IconProps extends Partial<ImageProps> {
	icon?: AppIcons;
}
