import { ReactNode } from 'react';
import {
	ContextMenu,
	ContextMenuCheckboxItem,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuLabel,
	ContextMenuRadioGroup,
	ContextMenuRadioItem,
	ContextMenuSeparator,
	ContextMenuShortcut,
	ContextMenuSub,
	ContextMenuSubContent,
	ContextMenuSubTrigger,
	ContextMenuTrigger,
} from '../../globalComponents/ContextMenu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
	closeApp,
	maximizeApp,
	minimizeApp,
	unMaximizeApp,
	getWindowById,
} from '../../store/appsSlice';

export default function DesktopContextMenu({
	children,
	extraOptions,
}: {
	children: ReactNode;
	extraOptions?: ReactNode;
}) {
	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				{extraOptions && <ContextMenuSeparator />}
				{extraOptions}
			</ContextMenuContent>
		</ContextMenu>
	);
}
