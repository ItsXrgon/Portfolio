"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface IconProps extends React.HTMLAttributes<HTMLImageElement> {
	icon: string;
	width?: number;
	height?: number;
}

export default function Icon({
	icon,
	width,
	height,
	draggable = false,
}: IconProps) {
	const [iconUrl, setIconUrl] = useState<string>("");

	useEffect(() => {
		const loadImages = async () => {
			const { default: url } = await import(
				`../app/DesktopApps/icons/${icon}.svg`
			);

			setIconUrl(url);
		};

		loadImages();
	}, [icon]);

	return (
		<Image
			alt={icon}
			src={iconUrl}
			draggable={draggable}
			width={width}
			height={height}
		/>
	);
}
