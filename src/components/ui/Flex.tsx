import React, { forwardRef, memo } from "react";
import { twMerge } from "tailwind-merge";

const gapSizes = {
	"0": "gap-0",
	"1": "gap-1",
	"2": "gap-2",
	"3": "gap-3",
	"4": "gap-4",
	"5": "gap-5",
	"6": "gap-6",
	"7": "gap-7",
	"8": "gap-8",
	"9": "gap-9",
	"10": "gap-10",
	"11": "gap-11",
	"12": "gap-12",
	"14": "gap-14",
	"16": "gap-16",
	"20": "gap-20",
};

const alignStyles = {
	start: "items-start",
	end: "items-end",
	center: "items-center",
	stretch: "items-stretch",
	baseline: "items-baseline",
};

const justifyStyles = {
	start: "justify-start",
	end: "justify-end",
	center: "justify-center",
	between: "justify-between",
	around: "justify-around",
};

type FlexGapSizes = keyof typeof gapSizes;
type FlexAlignStyles = keyof typeof alignStyles;
type FlexJustifyStyles = keyof typeof justifyStyles;

interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
	children: React.ReactNode;
	isWrapped?: boolean;
	isColumn?: boolean;
	gap?: FlexGapSizes;
	align?: FlexAlignStyles;
	justify?: FlexJustifyStyles;
}

export const Flex = memo(
	forwardRef<HTMLDivElement, FlexProps>(function Flex(
		{
			children,
			isWrapped = false,
			isColumn = false,
			gap = "0",
			align = "stretch",
			justify = "start",
			className,
			...rest
		},
		ref,
	) {
		const mergedClassName = twMerge(
			"flex",
			isColumn && "flex-col",
			gapSizes[gap],
			isWrapped && "flex-wrap",
			alignStyles[align],
			justifyStyles[justify],
			className,
		);
		return (
			<div ref={ref} className={mergedClassName} {...rest}>
				{children}
			</div>
		);
	}),
);

Flex.displayName = "Flex";
