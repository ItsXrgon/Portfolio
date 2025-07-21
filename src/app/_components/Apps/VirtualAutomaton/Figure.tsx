import Image from "next/image";

export default function Figure({
	src,
	alt,
	label,
	number,
}: {
	src: string;
	alt: string;
	label?: string;
	number?: number;
}) {
	return (
		<figure className="text-center">
			<Image
				src={src}
				alt={alt}
				className="mx-auto rounded shadow inline-block w-full"
			/>
			<figcaption className="text-sm">
				Figure {number}: {label}
			</figcaption>
		</figure>
	);
}
