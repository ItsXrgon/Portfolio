import { useDrop } from 'react-dnd';
import { TApp } from '../../types';
import DesktopApp from './DesktopApp';
import { useAppDispatch } from '../../store/hooks';
import { relocateApp } from '../../store/appsSlice';
import DesktopContextMenu from '../ContextMenus/DesktopContextMenu';
import DesktopAppContextMenu from '../ContextMenus/DesktopAppContextMenu';

interface DesktopGridSlotProps {
	xCoordinate: number;
	yCoordinate: number;
	app?: TApp;
}

export default function DesktopGridSlot({
	xCoordinate,
	yCoordinate,
	app,
}: DesktopGridSlotProps): JSX.Element {
	const dispatch = useAppDispatch();

	const [, drop] = useDrop(
		() => ({
			accept: 'APP',
			drop(item: any) {
				if (
					(item.app?.position.x === xCoordinate &&
						item.app?.position.y === yCoordinate) ||
					!item.app
				) {
					return;
				}
				dispatch(
					relocateApp({
						app: item.app,
						position: {
							x: xCoordinate,
							y: yCoordinate,
						},
					})
				);
			},
		}),
		[]
	);

	if (!app) {
		return (
			<DesktopContextMenu key={`${xCoordinate}-${yCoordinate}`}>
				<div
					ref={drop}
					className="flex h-24 flex-col items-center justify-center"
				/>
			</DesktopContextMenu>
		);
	}

	return (
		<DesktopAppContextMenu appId={app.id}>
			<div className="flex h-24 flex-col items-center justify-center">
				{app && <DesktopApp index={0} app={app} />}
			</div>
		</DesktopAppContextMenu>
	);
}
