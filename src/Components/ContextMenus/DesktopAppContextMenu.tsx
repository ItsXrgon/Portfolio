import { ReactNode, useCallback } from 'react';
import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from '../../globalComponents/ContextMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	closeApp,
	getWindowById,
	getTaskBarById,
	getAppById,
	openApp,
	pinApp,
	unpinApp,
} from '../../store/appsSlice';
import { PinOff, Pin, X } from 'lucide-react';
import Icon from '../../utils/Icon';

export default function DesktopAppContextMenu({
	children,
	appId,
	extraOptions,
}: {
	children: ReactNode;
	appId: string;
	extraOptions?: ReactNode;
}) {
	const dispatch = useAppDispatch();
	const window = useAppSelector((state) => getWindowById(state, appId));
	const app = useAppSelector((state) => getAppById(state, appId));
	const taskBarApp = useAppSelector((state) => getTaskBarById(state, appId));

	const handleUnpin = useCallback(() => {
		dispatch(
			unpinApp({
				id: appId,
			})
		);
	}, [dispatch, appId]);

	const handlePin = useCallback(() => {
		dispatch(
			pinApp({
				id: appId,
			})
		);
	}, [dispatch, appId]);

	const handleOpen = useCallback(() => {
		dispatch(
			openApp({
				id: appId,
			})
		);
	}, [dispatch, appId]);

	const handleClose = useCallback(() => {
		dispatch(
			closeApp({
				id: appId,
			})
		);
	}, [dispatch, appId]);

	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				{extraOptions && <ContextMenuSeparator />}
				{extraOptions}
				{taskBarApp?.pinned && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleUnpin}
					>
						<PinOff size={18} />
						Unpin from taskbar
					</ContextMenuItem>
				)}
				{!taskBarApp?.pinned && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handlePin}
					>
						<Pin size={18} />
						Pin to taskbar
					</ContextMenuItem>
				)}
				{!window && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleOpen}
					>
						<div className="h-5 w-5">
							<Icon icon={app?.icon ?? ''} />
						</div>
						Open {app?.name}
					</ContextMenuItem>
				)}
				{window && (
					<ContextMenuItem
						className="flex items-center gap-3"
						onClick={handleClose}
					>
						<X size={18} />
						Close {app?.name}
					</ContextMenuItem>
				)}
			</ContextMenuContent>
		</ContextMenu>
	);
}
