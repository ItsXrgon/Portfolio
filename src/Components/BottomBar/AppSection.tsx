import React, { createRef, useCallback, useState } from "react";
import {
	reOrderApps,
	selectedPinnedorOpenApps,
	unMinimizeApp,
} from "../../store/appsSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { TApp } from "../../types";
import Icon from "../Desktop/Icon";
import BottomBarAppContextMenu from "../ContextMenus/BottomBarAppContextMenu";
import { maximizeApp, minimizeApp, openApp } from "../../store/appsSlice";
import { useDrag, useDrop } from "react-dnd";

export default function AppSection() {
	const apps = useAppSelector(selectedPinnedorOpenApps);
	const dispatch = useAppDispatch();

	const [contextMenu, setContextMenu] = useState<{
		position: {
			x: number;
			y: number;
		};
		isOpen: boolean;
		app: TApp | null;
	}>({
		position: {
			x: 0,
			y: 70,
		},
		isOpen: false,
		app: null,
	});

	const appIconRefs = apps.map(() => createRef<HTMLDivElement>());

	const onContextMenu = useCallback(
		(
			e: React.MouseEvent<HTMLDivElement>,
			app: TApp,
			ref: HTMLDivElement,
		) => {
			setContextMenu({
				isOpen: true,
				position: {
					x: ref?.offsetLeft - 80 ?? e.clientX,
					y: ref.offsetTop + 70,
				},
				app,
			});
		},
		[contextMenu, appIconRefs],
	);

	const onContextMenuClose = useCallback(() => {
		setContextMenu({
			isOpen: false,
			app: null,
			position: {
				x: 0,
				y: 0,
			},
		});
	}, [contextMenu, appIconRefs]);

	const onAppIconClick = useCallback(
		(app: TApp) => {
			if (app.appState.isOpen && app.windowState?.isMinimized) {
				dispatch(unMinimizeApp(app));
				return;
			}
			if (app.appState.isOpen && !app.windowState?.isMinimized) {
				dispatch(minimizeApp(app));
				return;
			}
			if (!app.appState.isOpen) {
				dispatch(openApp(app));
			}
		},
		[dispatch],
	);

	const [, drop] = useDrop(() => ({ accept: "APPICON" }));

	function BottomBarAppIcon({ app, index }: { app: TApp; index: number }) {
		const dispatch = useAppDispatch();
		const [{}, drag] = useDrag(() => ({
			type: "APPICON",
			item: {
				app: app,
				index: index,
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}));

		const [, drop] = useDrop(
			() => ({
				accept: "APPICON",
				hover(item: any) {
					if (item.app.id !== app.id) {
						dispatch(
							reOrderApps({
								oldIndex: item.index,
								newIndex: index,
							}),
						);
					}
				},
			}),
			[],
		);

		return (
			<div
				ref={(node) => drag(drop(node))}
				className={
					`flex flex-col items-center justify-center rounded-sm p-1 hover:bg-slate-50 hover:bg-opacity-60` +
					` ${
						contextMenu.app?.id === app.id
							? "bg-slate-50 bg-opacity-60"
							: ""
					} ${
						app.appState.isOpen
							? "border-b-2 border-solid border-gray-500	"
							: ``
					}`
				}
				onContextMenu={(e) => {
					e.preventDefault();
					onContextMenu(e, app, appIconRefs[index].current!);
				}}
				onClick={() => {
					onAppIconClick(app);
				}}
				key={app.id}
			>
				<div className="h-10 w-10" ref={appIconRefs[index]}>
					<Icon icon={app.icon} />
				</div>
			</div>
		);
	}

	return (
		<>
			<div ref={drop} className="flex flex-row gap-8">
				{apps.map((app, index) => (
					<BottomBarAppIcon app={app} index={index} key={app.id} />
				))}
			</div>
			<BottomBarAppContextMenu
				onContextMenuClose={onContextMenuClose}
				{...contextMenu}
			/>
		</>
	);
}
