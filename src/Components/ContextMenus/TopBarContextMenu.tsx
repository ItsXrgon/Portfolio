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
	maximizeApp,
	minimizeApp,
	unMaximizeApp,
	getWindowById,
} from '../../store/appsSlice';
import { Maximize, Minimize, Minus, X } from 'lucide-react';

export default function TopBarContextMenu({
	children,
	extraOptions,
	appId,
}: {
	children: ReactNode;
	extraOptions?: ReactNode;
	appId: string;
}) {
	const dispatch = useAppDispatch();
	const app = useAppSelector((state) => getWindowById(state, appId));

	const handleMaximize = useCallback(() => {
		dispatch(
			maximizeApp({
				id: appId,
			})
		);
	}, [dispatch, appId]);

	const handleRestore = useCallback(() => {
		dispatch(
			unMaximizeApp({
				id: appId,
			})
		);
	}, [dispatch, appId]);

	const handleMinimize = useCallback(() => {
		dispatch(
			minimizeApp({
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
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleMaximize}
					disabled={app?.windowState?.isMaximized}
				>
					<Maximize size={18} />
					Maximize
				</ContextMenuItem>
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleRestore}
					disabled={!app?.windowState?.isMaximized}
				>
					<Minimize size={18} />
					Restore
				</ContextMenuItem>
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleMinimize}
					disabled={app?.windowState?.isMinimized}
				>
					<Minus size={18} />
					Minimize
				</ContextMenuItem>
				{extraOptions && <ContextMenuSeparator />}
				{extraOptions}
				<ContextMenuSeparator />
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleClose}
				>
					<X size={18} />
					Close
				</ContextMenuItem>
			</ContextMenuContent>
		</ContextMenu>
	);
}