import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import Desktop from "./Components/Desktop/Desktop";
import Taskbar from "./Components/Taskbar/Taskbar";
import "./i18n";

function App() {
	return (
		<DndProvider backend={HTML5Backend}>
			<div className="h-full" onContextMenu={(e) => e.preventDefault()}>
				<Desktop />
				<Taskbar />
			</div>
		</DndProvider>
	);
}

export default App;
