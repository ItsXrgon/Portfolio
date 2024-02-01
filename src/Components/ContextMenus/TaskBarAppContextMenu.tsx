import { ReactNode, useCallback, useState } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '../../globalComponents/DropDownMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	closeApp,
	pinApp,
	unpinApp,
	openApp,
	getWindowById,
	getTaskBarById,
} from '../../store/appsSlice';
import { Pin, PinOff, X } from 'lucide-react';
import Icon from '../../utils/Icon';

export default function TaskBarAppContextMenu({
	children,
	onClick,
	extraOptions,
	appId,
}: {
	children: ReactNode;
	onClick?: () => void;
	extraOptions?: ReactNode;
	appId: string;
}) {
	const dispatch = useAppDispatch();
	const window = useAppSelector((state) => getWindowById(state, appId));
	const app = useAppSelector((state) => getTaskBarById(state, appId));
	const [isOpen, setOpen] = useState(false);

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
		<DropdownMenu
			open={isOpen}
			onOpenChange={() => {
				setOpen(false);
			}}
		>
			<DropdownMenuTrigger
				onContextMenu={(e) => {
					e.preventDefault();
					setOpen(true);
				}}
				onClick={onClick}
			>
				{children}
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-56">
				{extraOptions && <DropdownMenuSeparator />}
				{app?.pinned && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleUnpin}
					>
						<PinOff size={18} />
						Unpin from taskbar
					</DropdownMenuItem>
				)}
				{!app?.pinned && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handlePin}
					>
						<Pin size={18} />
						Pin to taskbar
					</DropdownMenuItem>
				)}
				{!window && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleOpen}
					>
						<div className="h-5 w-5">
							<Icon icon={app?.icon ?? ''} />
						</div>
						Open {app?.name}
					</DropdownMenuItem>
				)}
				{window && (
					<DropdownMenuItem
						className="flex items-center gap-3"
						onClick={handleClose}
					>
						<X size={18} />
						Close {app?.name}
					</DropdownMenuItem>
				)}
			</DropdownMenuContent>
		</DropdownMenu>
	);
}