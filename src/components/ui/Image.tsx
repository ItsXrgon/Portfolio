import NextImage, { ImageProps } from "next/image";

export function Image({
	width,
	height,
	draggable = false,
	...rest
}: ImageProps) {
	return (
		<NextImage
			draggable={draggable}
			width={width}
			height={height}
			{...rest}
		/>
	);
}
