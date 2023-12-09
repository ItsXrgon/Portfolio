import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { TApp } from "../../types";
import DesktopApp from "./DesktopApp";

interface DesktopGridSlotProps {
	xCoordinate: number;
	yCoordinate: number;
	app?: TApp;
}

export default function DesktopGridSlot({
	xCoordinate,
	yCoordinate,
	app,
}: DesktopGridSlotProps): JSX.Element {
	return (
		<Droppable
			droppableId={`${xCoordinate}-${yCoordinate}`}
			key={`${xCoordinate}-${yCoordinate}`}
		>
			{(provided) => (
				<div
					{...provided.droppableProps}
					ref={provided.innerRef}
					className="h-20 w-20"
				>
					{app && <DesktopApp index={0} app={app} />}
				</div>
			)}
		</Droppable>
	);
}
