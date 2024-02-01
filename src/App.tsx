import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import './App.css';
import TaskBar from './Components/TaskBar/TaskBar';
import { useSettingsDispatch, useSettingsSelector } from './store/hooks';
import { selectTheme } from './store/settingsSlice';
import applyDynamicStyles from './Utils/dynamicStyles';
import Desktop from './Components/Desktop/Desktop';

function App() {
	const settingsDispatch = useSettingsDispatch();
	const palette = useSettingsSelector(selectTheme);

	useEffect(() => {
		applyDynamicStyles(palette);
	}, [settingsDispatch, palette]);

	return (
		<DndProvider backend={HTML5Backend}>
			<div
				className="w-full h-full flex flex-col bg-primary"
				onContextMenu={(e) => {
					e.preventDefault();
				}}
			>
				<Desktop />
				<TaskBar />
			</div>
		</DndProvider>
	);
}

export default App;
