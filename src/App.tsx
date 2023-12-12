import { useEffect } from "react";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import "./App.css";
import BottomBar from "./Components/BottomBar/BottomBar";
import { useSettingsDispatch, useSettingsSelector } from "./store/hooks";
import { selectTheme } from "./store/settingsSlice";
import applyDynamicStyles from "./Components/Utils/dynamicStyles";
import Desktop from "./Components/Desktop/Desktop";

function App() {
	const settingsDispatch = useSettingsDispatch();
	const palette = useSettingsSelector(selectTheme);

	useEffect(() => {
		applyDynamicStyles(palette);
	}, [settingsDispatch, palette]);

	return (
		<>
			<div
				className="bg-primary"
				onContextMenu={(e) => {
					e.preventDefault();
				}}
			>
				<DndProvider backend={HTML5Backend}>
					<Desktop />
				</DndProvider>
			</div>
			<DndProvider backend={HTML5Backend}>
				<BottomBar />
			</DndProvider>
		</>
	);
}

export default App;
