import { useState, useCallback, useEffect } from "react";
import {
	pinApp,
	unpinApp,
	maximizeApp,
	openApp,
	closeApp,
} from "../../store/appsSlice";
import { useAppDispatch } from "../../store/hooks";
import { TApp } from "../../types";
import ContextMenu, { ContextMenuAction } from "./ContextMenu";
import { PinOffIcon, PinIcon, X } from "lucide-react";
import Icon from "../Desktop/Icon";

interface DesktopContextMenuProps {
	isOpen: boolean;
	onContextMenuClose: () => void;
	app: TApp | null;
	position: {
		x: number;
		y: number;
	};
}

export default function DesktopContextMenu({
	isOpen,
	onContextMenuClose,
	app,
	position,
}: DesktopContextMenuProps): JSX.Element {
	if (!isOpen) return <></>;
	const dispatch = useAppDispatch();

	const [ContextMenuActions, setContextMenuActions] = useState<
		ContextMenuAction[]
	>([]);

	const onPinToTaskbar = useCallback(
		(app: TApp) => {
			dispatch(pinApp(app));
			onContextMenuClose();
		},
		[app, dispatch, onContextMenuClose],
	);

	const onUnpinFromTaskbar = useCallback(
		(app: TApp) => {
			dispatch(unpinApp(app));
			onContextMenuClose();
		},
		[app, dispatch, onContextMenuClose],
	);

	const onOpenApp = useCallback(
		(app: TApp) => {
			if (app.appState.isOpen && app.windowState?.isMinimized) {
				dispatch(maximizeApp(app));
			} else if (!app.appState.isOpen) {
				dispatch(openApp(app));
			}
			onContextMenuClose();
		},
		[app, dispatch, onContextMenuClose],
	);

	const onCloseApp = useCallback(
		(app: TApp) => {
			dispatch(closeApp(app));
			onContextMenuClose();
		},
		[app, dispatch, onContextMenuClose],
	);

	useEffect(() => {
		const actions: ContextMenuAction[] = [];
		if (app) {
			if (app.appState.isPinned) {
				actions.push({
					icon: <PinOffIcon />,
					label: "Unpin from Taskbar",
					onClick: () => onUnpinFromTaskbar(app),
				});
			} else {
				actions.push({
					icon: <PinIcon />,
					label: "Pin to Taskbar",
					onClick: () => onPinToTaskbar(app),
				});
			}
			if (app.appState.isOpen) {
				actions.push({
					icon: <X />,
					label: "Close",
					onClick: () => onCloseApp(app),
				});
			} else {
				actions.push({
					icon: <Icon icon={app.icon} />,
					label: "Open",
					onClick: () => onOpenApp(app),
				});
			}
		}
		setContextMenuActions(actions);
	}, [app, onOpenApp, onCloseApp, onPinToTaskbar, onUnpinFromTaskbar]);

	return (
		<ContextMenu
			categories={[
				{
					label: "Actions",
					actions: ContextMenuActions,
				},
			]}
			position={{
				x: position.x,
				y: position.y,
			}}
			onContextMenuClose={onContextMenuClose}
		/>
	);
}
