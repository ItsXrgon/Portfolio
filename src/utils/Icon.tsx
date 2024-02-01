import { useEffect, useState } from 'react';

export default function Icon({ icon }: { icon: string }) {
	const [iconUrl, setIconUrl] = useState<string>('');

	useEffect(() => {
		const loadImages = async () => {
			const { default: url } = await import(`../apps/icons/${icon}.svg`);

			setIconUrl(url);
		};

		loadImages();
	}, [icon]);

	return <img src={iconUrl} draggable={false} />;
}
