import { Rnd } from 'react-rnd';
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
} from '../../store/appsSlice';
import TopBarContextMenu from '../ContextMenus/TopBarContextMenu';

interface WindowProps {
	app: TWindow;
}

export default function Window({ app }: WindowProps) {
	const dispatch = useAppDispatch();

	function renderApp() {
		switch (app.name) {
			case 'Terminal':
				return <Terminal />;
			case 'Github':
				return (
					<div className="bg-black">
						<div className="text-white">This is a Github page!</div>
					</div>
				);
			case 'About':
				return (
					<div className="bg-black">
						<div className="text-white">This is an about page!</div>
					</div>
				);
			default:
				return (
					<div className="bg-black">
						<div className="text-white">This is a default page!</div>
					</div>
				);
		}
	}

	function onDragStop() {
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
	}

	return (
		<>
			<Rnd
				className={`fixed border-2 border-gray-700 bg-black`}
				minWidth={app.windowState.isMaximized ? '100%' : '400px'}
				minHeight={app.windowState.isMaximized ? '100%' : '400px'}
				position={{
					x: app.windowState.isMaximized ? 0 : app.windowState.position.x,
					y: app.windowState.isMaximized ? 0 : app.windowState.position.y,
				}}
				onDrag={(_, d) => {
					dispatch(
						relocateWindow({
							windowId: app.id,
							position: {
								x: d.x,
								y: d.y,
							},
						})
					);
				}}
				key={app.id}
				onDragStop={onDragStop}
				dragHandleClassName="dragHandle"
				enableResizing
				bounds={'parent'}
				onClick={() => {}}
			>
				<TopBarContextMenu appId={app.id}>
					<div className="dragHandle bg-TaskBar flex flex-row items-center justify-between px-2 py-[2px]">
						<div className="h-9 w-9">
							<Icon icon={app.icon} />
						</div>
						<div className="flex gap-2">
							<div
								className="h-4 w-4 cursor-pointer rounded-full bg-red-500"
								onClick={() => {
									dispatch(
										closeApp({
											id: app.id,
										})
									);
								}}
							/>
							<div
								className="h-4 w-4 cursor-pointer rounded-full bg-yellow-500"
								onClick={() => {
									dispatch(
										minimizeApp({
											id: app.id,
										})
									);
								}}
							/>
							<div
								className="h-4 w-4 cursor-pointer rounded-full bg-green-500 "
								onClick={() => {
									if (app.windowState.isMaximized) {
										dispatch(
											unMaximizeApp({
												id: app.id,
											})
										);
									} else {
										dispatch(
											maximizeApp({
												id: app.id,
											})
										);
									}
								}}
							/>
						</div>
					</div>
				</TopBarContextMenu>
				<div className="h-full w-full">{renderApp()}</div>
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
