import ContextMenuButton from "./ContextMenuButton";

export interface ContextMenuAction {
	icon: JSX.Element;
	label: string;
	onClick: () => void;
}

export interface ContextMenuCategory {
	label: string;
	actions: ContextMenuAction[];
}

interface ContextMenuProps {
	position: {
		x: number;
		y: number;
	};
	onContextMenuClose: () => void;
	categories?: ContextMenuCategory[];
}

export default function ContextMenu({
	position,
	onContextMenuClose,
	categories,
}: ContextMenuProps) {
	return (
		<div
			className="fixed left-0 top-0 h-full w-full"
			onContextMenu={(e) => {
				e.preventDefault();
				onContextMenuClose();
			}}
			onClick={(e) => {
				e.preventDefault();
				onContextMenuClose();
			}}
		>
			<div
				className={`bg-secondary absolute flex w-56 translate-y-0 transform flex-col gap-1 rounded-md border border-solid border-black p-1 shadow-md`}
				style={{
					bottom: position.y,
					left: position.x,
				}}
			>
				{categories?.map((category) => (
					<div className="flex flex-col gap-1">
						<label className="text-button-header indent-1">
							{category.label}
						</label>
						{category.actions.map((action) => (
							<ContextMenuButton {...action} />
						))}
					</div>
				))}
			</div>
		</div>
	);
}
