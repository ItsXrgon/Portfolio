import { Draggable } from "react-beautiful-dnd";
import { TApp } from "../../types";
import Icon from "../Utils/Icon";
import { useAppDispatch } from "../../store/hooks";
import { openApp } from "../../store/appsSlice";

interface AppProps {
	index: number;
	app: TApp;
}

export default function DesktopApp({ index, app }: AppProps): JSX.Element {
	const dispatch = useAppDispatch();

	return (
		<Draggable draggableId={app.name} key={app.name} index={index}>
			{(provided) => (
				<div
					{...provided.draggableProps}
					onDoubleClick={() => {
						dispatch(openApp(app));
					}}
					onContextMenu={(e) => {
						e.preventDefault();
					}}
					ref={provided.innerRef}
					className="flex h-20 w-16 flex-col items-center justify-center gap-1 text-white hover:bg-slate-50 hover:text-black"
				>
					<div {...provided.dragHandleProps} className="h-12 w-12">
						<Icon icon={app.icon} />
					</div>
					<label className="text-md select-none">{app.name}</label>
				</div>
			)}
		</Draggable>
	);
}
