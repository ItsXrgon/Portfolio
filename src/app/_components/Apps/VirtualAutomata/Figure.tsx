import Image, { StaticImageData } from "next/image";

import { Flex } from "@/components";

export default function Figure({
	src,
	alt,
}: {
	src: StaticImageData;
	alt: string;
}) {
	return (
		<Flex
			isColumn
			align="center"
			justify="center"
			className="relative h-[320px] w-[320px]"
		>
			<div className="relative h-[300px] w-[300px]">
				<Image
					src={src}
					alt={alt}
					width={300}
					height={300}
					className="h-full w-full rounded-lg shadow-lg shadow-black/30 ring-2 ring-black/10"
				/>
				<div className="absolute top-2 right-2 w-7 h-3 flex items-center justify-center z-10">
					<svg
						width="28"
						height="8"
						viewBox="0 0 28 8"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<rect
							x="0"
							y="2"
							width="28"
							height="4"
							rx="2"
							fill="#888"
						/>
						<rect
							x="2"
							y="3"
							width="24"
							height="2"
							rx="1"
							fill="#bbb"
						/>
					</svg>
				</div>
			</div>
		</Flex>
	);
}
