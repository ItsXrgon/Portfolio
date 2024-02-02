import { Position, ResizableDelta, Rnd, DraggableData } from 'react-rnd';
import { useCallback, useState } from 'react';
import Terminal from '../../apps/Terminal/Terminal';
import { TWindow } from '../../types';
import Icon from '../../utils/Icon';
import { useAppDispatch } from '../../store/hooks';
import {
	closeApp,
	maximizeApp,
	minimizeApp,
	unMaximizeApp,
	relocateWindow,
	pushToFront,
} from '../../store/appsSlice';
import TopBarContextMenu from '../ContextMenus/TopBarContextMenu';
import { Maximize, Minimize, Minus, X } from 'lucide-react';
import Settings from '../../apps/Settings/Settings';
import Github from '../../apps/Github/Github';
import About from '../../apps/About/About';

interface WindowProps {
	app: TWindow;
	zIndex: number;
}

export default function Window({ app, zIndex }: WindowProps) {
	const dispatch = useAppDispatch();

	const [dragging, setDragging] = useState(false);

	function renderApp() {
		switch (app.name) {
			case 'Terminal':
				return <Terminal app={app} />;
			case 'Settings':
				return <Settings app={app} />;
			case 'Github':
				return <Github app={app} />;
			case 'About':
				return <About app={app} />;
			default:
				return (
					<div className="bg-black">
						<div className="text-white">This is a default page!</div>
					</div>
				);
		}
	}

	const onDragStart = useCallback(
		(_: any, {}: DraggableData) => {
			setDragging(true);
		},
		[app.id, dispatch]
	);

	const onDrag = useCallback(
		(_: any, { x, y }: DraggableData) => {
			dispatch(
				relocateWindow({
					windowId: app.id,
					position: {
						x: x,
						y: y,
					},
				})
			);
		},
		[app.id, dispatch]
	);

	const onDragStop = useCallback(
		(_: any, {}: DraggableData) => {
			dispatch(
				pushToFront({
					id: app.id,
				})
			);
			setDragging(false);
			if (app.windowState.position.x === 0) {
				dispatch(
					relocateWindow({
						windowId: app.id,
						position: {
							x: 1,
							y: app.windowState.position.y,
						},
						size: {
							width: 400,
							height: app.windowState.size.height,
						},
					})
				);
			}
			if (app.windowState.position.y === 0) {
				dispatch(
					relocateWindow({
						windowId: app.id,
						position: {
							x: app.windowState.position.x,
							y: 1,
						},
						size: {
							width: app.windowState.size.width,
							height: 400,
						},
					})
				);
			}
			if (app.windowState.position.x === window.innerWidth - 400) {
				dispatch(
					relocateWindow({
						windowId: app.id,
						position: {
							x: window.innerWidth - 401,
							y: app.windowState.position.y,
						},
						size: {
							width: 400,
							height: app.windowState.size.height,
						},
					})
				);
			}
		},
		[
			app.id,
			app.windowState.position.x,
			app.windowState.position.y,
			app.windowState.size.height,
			app.windowState.size.width,
			dispatch,
		]
	);

	const onResize = useCallback(
		(
			_: MouseEvent | TouchEvent,
			__: any,
			ref: HTMLElement,
			___: ResizableDelta,
			position: Position
		) => {
			dispatch(
				relocateWindow({
					windowId: app.id,
					position: {
						x: position.x,
						y: position.y,
					},
					size: {
						width: ref.offsetWidth,
						height: ref.offsetHeight,
					},
				})
			);
		},
		[app.id, dispatch]
	);

	const handleMaximize = useCallback(() => {
		dispatch(
			maximizeApp({
				id: app.id,
			})
		);
	}, [dispatch, app]);

	const handleRestore = useCallback(() => {
		dispatch(
			unMaximizeApp({
				id: app.id,
			})
		);
	}, [dispatch, app]);

	const handleMinimize = useCallback(() => {
		dispatch(
			minimizeApp({
				id: app.id,
			})
		);
	}, [dispatch, app]);

	const handleClose = useCallback(() => {
		dispatch(
			closeApp({
				id: app.id,
			})
		);
	}, [dispatch, app]);

	return (
		<>
			<Rnd
				className={`fixed border-2 border-gray-700 bg-black ${
					!app.windowState.isMaximized && 'rounded-md'
				}`}
				style={{ zIndex: dragging ? 999 : zIndex }}
				minWidth={app.windowState.isMaximized ? '100%' : '500px'}
				minHeight={app.windowState.isMaximized ? '100%' : '500px'}
				position={{
					x: app.windowState.isMaximized ? 0 : app.windowState.position.x,
					y: app.windowState.isMaximized ? 0 : app.windowState.position.y,
				}}
				onDragStart={onDragStart}
				onDrag={onDrag}
				onDragStop={onDragStop}
				dragHandleClassName="dragHandle"
				enableResizing={!app.windowState.isMaximized}
				bounds={'parent'}
				onResize={onResize}
				key={app.id}
			>
				<TopBarContextMenu appId={app.id}>
					<div
						className={`dragHandle bg-TaskBar flex flex-row items-center justify-between px-2 py-[2px] ${
							!app.windowState.isMaximized && 'rounded-t-md'
						}`}
					>
						<div className="h-9 w-9">
							<Icon icon={app.icon} />
						</div>
						<div className="flex gap-2">
							<div className="cursor-pointer py-2">
								<Minus size={24} onClick={handleMinimize} />
							</div>
							<div
								className="cursor-pointer py-2"
								onClick={() => {
									app?.windowState?.isMaximized
										? handleRestore()
										: handleMaximize();
								}}
							>
								{app?.windowState?.isMaximized ? (
									<Minimize size={24} />
								) : (
									<Maximize size={24} />
								)}
							</div>
							<div className="cursor-pointer py-2" onClick={handleClose}>
								<X size={24} />
							</div>
						</div>
					</div>
				</TopBarContextMenu>
				{renderApp()}
			</Rnd>
			{/*app.windowState.position.x === 0 && (
				<div className="w-[49%] absolute left-[1%] top-[1%] rounded-lg bg-gray-400 opacity-50 h-[98%]" />
			)}
			{app.windowState.position.y === 0 && (
				<div className="w-[98%] absolute left-[1%] top-[1%] rounded-lg bg-gray-400 opacity-50 h-[98%]" />
			)}
			{app.windowState.position.x === window.innerWidth - 400 && (
				<div className="w-[49%] absolute right-[1%] top-[1%] rounded-lg bg-gray-400 opacity-50 h-[98%]" />
			)*/}
		</>
	);
}
