import { X, PinOffIcon, PinIcon } from "lucide-react";
import { TApp } from "../../types";
import Icon from "../Utils/Icon";
import { useAppDispatch } from "../../store/hooks";
import {
	closeApp,
	maximizeApp,
	openApp,
	pinApp,
	unpinApp,
} from "../../store/appsSlice";
import { useCallback, useEffect, useState } from "react";
import ContextMenu, { ContextMenuAction } from "./ContextMenu";

interface BottomBarAppsContextMenuProps {
	isOpen: boolean;
	onContextMenuClose: () => void;
	app: TApp | null;
	position: {
		x: number;
		y: number;
	};
}

export default function BottomBarAppsContextMenu({
	isOpen,
	onContextMenuClose,
	app,
	position,
}: BottomBarAppsContextMenuProps): JSX.Element {
	const dispatch = useAppDispatch();

	if (!isOpen || !app) return <></>;

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
			if (app.appState.isOpen && app.appState.isMinimized) {
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
		setContextMenuActions(actions);
	}, [app, onOpenApp, onCloseApp, onPinToTaskbar, onUnpinFromTaskbar]);

	return (
		<div
			className="fixed left-0 top-0 h-full w-full"
			onContextMenu={(e) => {
				e.preventDefault();
				onContextMenuClose();
			}}
		>
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
		</div>
	);
}
