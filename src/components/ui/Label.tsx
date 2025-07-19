import React from "react";
import { twMerge } from "tailwind-merge";

const labelVariants = {
	primary: "text-text-primary-default",
	default: "text-text-default",
	subdued: "text-text-subdued",
	disabled: "text-text-disabled",
	critical: "text-text-critical",
	warning: "text-text-warning",
	success: "text-text-success",
	interactive: "text-text-interactive",
};

const labelSizes = {
	xs: "text-xs",
	sm: "text-sm",
	md: "text-md",
	lg: "text-lg",
	xl: "text-xl",
	"2xl": "text-2xl",
	"3xl": "text-3xl",
	"4xl": "text-4xl",
	"5xl": "text-5xl",
	"6xl": "text-6xl",
	"7xl": "text-7xl",
	"8xl": "text-8xl",
	"9xl": "text-9xl",
};

const labelWeights = {
	Thin: "font-thin",
	ExtraLight: "font-extralight",
	Light: "font-light",
	Normal: "font-normal",
	Medium: "font-medium",
	SemiBold: "font-semibold",
	Bold: "font-bold",
	ExtraBold: "font-extrabold",
	Black: "font-black",
};

const labelLetterSpacing = {
	xs: "tracking-tight", // -0.02em
	sm: "tracking-tight", // -0.02em
	md: "tracking-normal", // 0em
	lg: "tracking-normal", // 0em
	xl: "tracking-wide", // 0.02em
	"2xl": "tracking-wider", // 0.04em
	"3xl": "tracking-wider", // 0.04em
	"4xl": "tracking-widest", // 0.1em
	"5xl": "tracking-widest", // 0.1em
	"6xl": "tracking-widest", // 0.1em
	"7xl": "tracking-widest", // 0.1em
	"8xl": "tracking-widest", // 0.1em
	"9xl": "tracking-widest", // 0.1em
};

type LabelVariantsEnum = keyof typeof labelVariants;
type LabelWeightsEnum = keyof typeof labelWeights;
type LabelTypographyEnum = keyof typeof labelSizes;

interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
	variant?: LabelVariantsEnum;
	size?: LabelTypographyEnum;
	weight?: LabelWeightsEnum;
}

export const Label: React.FC<LabelProps> = ({
	children,
	variant = "default",
	size = "md",
	weight = "Normal",
	className,
	...rest
}) => {
	const mergedClassName = twMerge(
		labelVariants[variant],
		labelSizes[size],
		labelWeights[weight],
		labelLetterSpacing[size],
		className,
	);
	return (
		<label className={mergedClassName} {...rest}>
			{children}
		</label>
	);
};
