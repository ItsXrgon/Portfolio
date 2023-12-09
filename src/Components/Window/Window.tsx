import { Draggable } from "react-beautiful-dnd";
import Terminal from "../../apps/Terminal/Terminal";
import { TApp } from "../../types";
import Icon from "../Utils/Icon";
import { useAppDispatch } from "../../store/hooks";
import { closeApp, maximizeApp, minimizeApp } from "../../store/appsSlice";

interface WindowProps {
	app: TApp;
}

export default function Window({ app }: WindowProps) {
	const dispatch = useAppDispatch();

	function renderApp() {
		switch (app.name) {
			case "Terminal":
				return <Terminal />;
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

	console.log(app.windowState?.position);

	return (
		<Draggable draggableId={`${app.name}`} index={parseInt(app.id)}>
			{(provided) => (
				<div
					ref={provided.innerRef}
					{...provided.draggableProps}
					className="fixed"
					style={{
						width: `${app.windowState!.size.width}px`,
						height: `${app.windowState!.size.height}px`,
						top: `${app.windowState!.position.y}px`,
						left: `${app.windowState!.position.x}px`,
					}}
				>
					<div
						className="bg-bottomBar flex flex-row items-center justify-between px-2 py-1"
						{...provided.dragHandleProps}
					>
						<div className="h-7 w-7">
							<Icon icon={app.icon} />
						</div>
						<div className="flex gap-2">
							<div
								className="h-4 w-4 rounded-full bg-red-500"
								onClick={() => {
									dispatch(closeApp(app));
								}}
							/>
							<div
								className="h-4 w-4 rounded-full bg-yellow-500"
								onClick={() => {
									dispatch(minimizeApp(app));
								}}
							/>
							<div
								className="h-4 w-4 rounded-full bg-green-500"
								onClick={() => {
									dispatch(maximizeApp(app));
								}}
							/>
						</div>
					</div>
					<div className="h-full w-full">{renderApp()}</div>
				</div>
			)}
		</Draggable>
	);
}
