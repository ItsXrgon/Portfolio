import { createRef, useCallback } from 'react';
import {
	reOrderApps,
	isAppOpen,
	getTaskBar,
	handleTaskBarAppClick,
} from '../../store/appsSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import { TTaskBar } from '../../types';
import Icon from '../../utils/Icon';
import { useDrag, useDrop } from 'react-dnd';
import { RootState } from '../../store/store';
import TaskBarAppContextMenu from '../ContextMenus/TaskBarAppContextMenu';

export default function AppSection() {
	const apps = useAppSelector(getTaskBar);
	const dispatch = useAppDispatch();

	const appIconRefs = apps.map(() => createRef<HTMLDivElement>());

	const onAppIconClick = useCallback(
		(app: TTaskBar) => {
			dispatch(handleTaskBarAppClick(app));
		},
		[dispatch]
	);

	const [, drop] = useDrop(() => ({ accept: 'APPICON' }));

	function TaskBarAppIcon({ app, index }: { app: TTaskBar; index: number }) {
		const dispatch = useAppDispatch();
		const [{}, drag] = useDrag(() => ({
			type: 'APPICON',
			item: {
				app: app,
				index: index,
			},
			collect: (monitor) => ({
				isDragging: monitor.isDragging(),
			}),
		}));

		const [, drop] = useDrop(
			() => ({
				accept: 'APPICON',
				hover(item: any) {
					if (item.app.id !== app.id) {
						dispatch(
							reOrderApps({
								oldIndex: item.index,
								newIndex: index,
							})
						);
					}
				},
			}),
			[]
		);

		return (
			<TaskBarAppContextMenu
				appId={app.id}
				onClick={() => {
					onAppIconClick(app);
				}}
			>
				<div
					ref={(node) => drag(drop(node))}
					className={`flex flex-col items-center justify-center rounded-sm p-1 hover:bg-slate-50 hover:bg-opacity-60
					${
						useAppSelector((state: RootState) => isAppOpen(state, app.id)) &&
						'border-b-2 border-solid border-gray-500	shadow-lg'
					}`}
					key={app.id}
				>
					<div className="h-10 w-10" ref={appIconRefs[index]}>
						<Icon icon={app.icon} />
					</div>
				</div>
			</TaskBarAppContextMenu>
		);
	}

	return (
		<>
			<div ref={drop} className="flex flex-row gap-8">
				{apps.map((app, index) => (
					<TaskBarAppIcon app={app} index={index} key={app.id} />
				))}
			</div>
		</>
	);
}
