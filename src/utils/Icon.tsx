import { useEffect, useState } from "react";

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
	icon: string;
	width?: number;
	height?: number;
}

export default function Icon({ icon, width, height, draggable }: IconProps) {
	const [iconUrl, setIconUrl] = useState<string>("");

	useEffect(() => {
		const loadImages = async () => {
			const { default: url } = await import(`../apps/icons/${icon}.svg`);

			setIconUrl(url);
		};

		loadImages();
	}, [icon]);

	return (
		<img
			src={iconUrl}
			draggable={draggable}
			width={width}
			height={height}
		/>
	);
}
