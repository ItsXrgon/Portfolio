import { useEffect, useMemo } from "react";
import "./App.css";
import BottomBar from "./Components/BottomBar/BottomBar";
import DesktopGridSlot from "./Components/Desktop/DesktopGridSlot";
import {
	useAppSelector,
	useSettingsDispatch,
	useSettingsSelector,
} from "./store/hooks";
import { selectApps, selectOpenApps } from "./store/appsSlice";
import { TApp } from "./types";
import { selectTheme } from "./store/settingsSlice";
import applyDynamicStyles from "./Components/Utils/dynamicStyles";
import Window from "./Components/Window/Window";
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd";

function App() {
	const settingsDispatch = useSettingsDispatch();
	const palette = useSettingsSelector(selectTheme);

	useEffect(() => {
		applyDynamicStyles(palette);
	}, [settingsDispatch, palette]);

	const apps = useAppSelector(selectApps);
	const openApps = useAppSelector(selectOpenApps);

	// Grid for desktop apps
	// X is vertical, Y is horizontal
	const gridElements = useMemo(() => {
		return Array.from(Array(8).keys()).map((_, i) =>
			Array.from(Array(20).keys()).map((_, j) => (
				<DesktopGridSlot
					xCoordinate={i}
					yCoordinate={j}
					app={apps.find(
						(app: TApp) =>
							app.position.x === i && app.position.y === j,
					)}
				/>
			)),
		);
	}, [apps]);

	function onDragEnd(result: DropResult) {
		const { destination, source } = result;

		if (!destination) return;
	}

	return (
		<>
			<div className="bg-primary">
				<DragDropContext onDragEnd={onDragEnd}>
					<div className="grid grid-cols-20 gap-8 p-4">
						{...gridElements}
					</div>
				</DragDropContext>
				<DragDropContext onDragEnd={onDragEnd}>
					<Droppable droppableId="open-apps">
						{(provided) => (
							<div
								{...provided.droppableProps}
								ref={provided.innerRef}
								className=""
							>
								{openApps.map((app: TApp) => (
									<Window app={app} />
								))}
							</div>
						)}
					</Droppable>
				</DragDropContext>
			</div>
			<BottomBar />
		</>
	);
}

export default App;
