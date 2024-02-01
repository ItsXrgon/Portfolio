import { useMemo } from 'react';
import { getApps, getShownWindows } from '../../store/appsSlice';
import { useAppSelector } from '../../store/hooks';
import { TApp, TWindow } from '../../types';
import DesktopGridSlot from './DesktopGridSlot';
import Window from './Window';

export default function Desktop() {
	const apps = useAppSelector(getApps);
	const windows = useAppSelector(getShownWindows);

	// Grid for desktop apps
	// X is vertical, Y is horizontal
	const gridElements = useMemo(() => {
		return Array.from(Array(8).keys()).map((_, i) =>
			Array.from(Array(20).keys()).map((_, j) => (
				<DesktopGridSlot
					xCoordinate={i}
					yCoordinate={j}
					app={
						(apps.find(
							(app: TApp) => app.position.x === i && app.position.y === j
						) as TApp) ?? undefined
					}
					key={`${i}-${j}`}
				/>
			))
		);
	}, [apps]);

	return (
		<div
			className="h-[93%] w-full relative bg-transparent bg-black"
			onSelectCapture={(e) => e.stopPropagation()}
		>
			<div className="grid grid-cols-20">{...gridElements}</div>
			{windows.map((app: TWindow, index: number) => (
				<Window app={app} key={index} />
			))}
		</div>
	);
}
