"use client";

const CustomBehaviourProvider = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<div className="h-full" onContextMenu={(e) => e.preventDefault()}>
			{children}
		</div>
	);
};

export default CustomBehaviourProvider;
