import Terminal from "../../apps/Terminal/Terminal";
import { TApp } from "../../types";
import Icon from "./Icon";
import { useAppDispatch } from "../../store/hooks";
import {
	closeApp,
	maximizeApp,
	minimizeApp,
	unMaximizeApp,
} from "../../store/appsSlice";
import { useDrag } from "react-dnd";

interface WindowProps {
	app: TApp;
}

export default function Window({ app }: WindowProps) {
	const dispatch = useAppDispatch();

	function renderApp() {
		switch (app.name) {
			case "Terminal":
				return <Terminal />;
			case "Github":
				return (
					<div className="bg-black">
						<div className="text-white">This is a Github page!</div>
					</div>
				);
			case "About":
				return (
					<div className="bg-black">
						<div className="text-white">This is an about page!</div>
					</div>
				);
			default:
				return (
					<div className="bg-black">
						<div className="text-white">
							This is a default page!
						</div>
					</div>
				);
		}
	}

	const [{}, drag] = useDrag(
		() => ({
			type: "WINDOW",
			item: {
				app: app,
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}),
		[app],
	);

	return (
		<div
			ref={drag}
			className="absolute border-2 border-gray-700 bg-black"
			style={{
				width: app.windowState?.isMaximized
					? `100%`
					: `${app.windowState!.size.width}px`,
				height: app.windowState?.isMaximized
					? `100%`
					: `${app.windowState!.size.height}px`,
				top: app.windowState?.isMaximized
					? `0px`
					: `${app.windowState!.position.y}px`,
				left: app.windowState?.isMaximized
					? `0px`
					: `${app.windowState!.position.x}px`,
			}}
		>
			<div className="bg-bottomBar flex flex-row items-center justify-between px-2 py-1">
				<div className="h-7 w-7">
					<Icon icon={app.icon} />
				</div>
				<div className="flex gap-2">
					<div
						className="h-4 w-4 cursor-pointer rounded-full bg-red-500"
						onClick={() => {
							dispatch(closeApp(app));
						}}
					/>
					<div
						className="h-4 w-4 cursor-pointer rounded-full bg-yellow-500"
						onClick={() => {
							dispatch(minimizeApp(app));
						}}
					/>
					<div
						className="h-4 w-4 cursor-pointer rounded-full bg-green-500 "
						onClick={() => {
							if (!app.windowState?.isMaximized) {
								dispatch(maximizeApp(app));
							} else {
								dispatch(unMaximizeApp(app));
							}
						}}
					/>
				</div>
			</div>
			<div className="h-full w-full">{renderApp()}</div>
		</div>
	);
}
