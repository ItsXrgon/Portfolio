import React, { createRef, useCallback, useState } from "react";
import {
	DropResult,
	DragDropContext,
	Droppable,
	Draggable,
} from "react-beautiful-dnd";
import { reOrderApps, selectedPinnedorOpenApps } from "../../store/appsSlice";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { TApp } from "../../types";
import Icon from "../Utils/Icon";
import BottomBarAppsContextMenu from "../ContextMenus/BottomBarAppsContextMenu";
import { maximizeApp, minimizeApp, openApp } from "../../store/appsSlice";

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
					x: ref?.offsetLeft ?? e.clientX,
					y: contextMenu.position.y,
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
				y: 70,
			},
		});
	}, [contextMenu, appIconRefs]);

	const onAppIconClick = useCallback(
		(app: TApp) => {
			if (app.appState.isOpen && app.appState.isMinimized) {
				dispatch(maximizeApp(app));
				return;
			}
			if (app.appState.isOpen && !app.appState.isMinimized) {
				dispatch(minimizeApp(app));
				return;
			}
			if (!app.appState.isOpen) {
				dispatch(openApp(app));
			}
		},
		[dispatch],
	);

	function onDragEnd(result: DropResult) {
		const { destination, source } = result;

		if (!destination || destination.index === source.index) return;

		dispatch(
			reOrderApps({
				oldIndex: source.index,
				newIndex: destination.index,
			}),
		);
	}

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="bottombar" direction="horizontal">
					{(provided) => (
						<div
							ref={provided.innerRef}
							className="flex flex-row gap-8"
							{...provided.droppableProps}
						>
							{apps.map((app, index) => (
								<Draggable
									key={app.id}
									draggableId={app.id}
									index={index}
								>
									{(provided) => (
										<div
											ref={provided.innerRef}
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											className={
												`flex flex-col items-center justify-center rounded-sm p-1 hover:bg-slate-50 hover:bg-opacity-60` +
												` ${
													contextMenu.app?.id ===
													app.id
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
												onContextMenu(
													e,
													app,
													appIconRefs[index].current!,
												);
											}}
											onClick={() => {
												onAppIconClick(app);
											}}
										>
											<div
												className="h-10 w-10"
												ref={appIconRefs[index]}
											>
												<Icon icon={app.icon} />
											</div>
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			<BottomBarAppsContextMenu
				onContextMenuClose={onContextMenuClose}
				{...contextMenu}
			/>
		</>
	);
}
