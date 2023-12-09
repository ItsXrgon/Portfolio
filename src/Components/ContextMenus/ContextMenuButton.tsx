interface ContextMenuButtonProps {
	icon: JSX.Element;
	label: string;
	onClick: () => void;
	className?: string;
}

export default function ContextMenuButton({
	icon,
	label,
	onClick,
	className,
}: ContextMenuButtonProps) {
	return (
		<div
			className={`bg-ternary-hover flex items-center gap-2 rounded-md px-2 py-1 ${className}`}
			onClick={onClick}
		>
			<div className="h-6 w-6">{icon}</div>
			<label className="text-button">{label}</label>
		</div>
	);
}
