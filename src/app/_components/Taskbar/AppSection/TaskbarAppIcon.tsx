import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { motion } from "framer-motion";
import { useCallback, useMemo } from "react";

import { Flex } from "@/components";
import { AppIcon } from "@/components/AppIcon";
import { useTaskbarApp, useWindow, useWindowManagement } from "@/store/hooks";

import { TaskbarAppContextMenu } from "./TaskbarAppContextMenu";
import { useTaskbarAppAnimation } from "./useTaskbarAppAnimation";

export function TaskbarAppIcon({
	appId,
	index,
}: {
	appId: string;
	index: number;
}) {
	const { openWindow, minimizeWindow, unMinimizeWindow } =
		useWindowManagement(appId);
	const window = useWindow(appId);
	const taskbarApp = useTaskbarApp(appId);
	const isWindowOpen = !!window;
	const isMinimized = !!window?.isMinimized;

	const animateProps = useTaskbarAppAnimation(isWindowOpen, isMinimized);

	const onAppIconClick = useCallback(() => {
		if (isWindowOpen) {
			if (isMinimized) {
				unMinimizeWindow();
			} else {
				minimizeWindow();
			}
		} else {
			openWindow();
		}
	}, [
		isWindowOpen,
		isMinimized,
		unMinimizeWindow,
		minimizeWindow,
		openWindow,
	]);

	const { attributes, listeners, setNodeRef, transform, transition } =
		useSortable({
			id: appId,
			attributes: {
				role: "taskbar-app",
				tabIndex: index,
			},
		});

	const style = useMemo(() => {
		return {
			transform: CSS.Transform.toString(transform),
			transition,
		};
	}, [transform, transition]);

	if (!taskbarApp) {
		return null;
	}

	return (
		<TaskbarAppContextMenu appId={appId}>
			<Flex
				key={appId}
				ref={setNodeRef}
				id={`taskbar-app-${appId}`}
				style={style}
				onClick={() => onAppIconClick()}
				isColumn
				align="center"
				gap="1"
				className="items-center py-2 px-1 rounded-sm relative overflow-hidden cursor-pointer"
				{...listeners}
				{...attributes}
			>
				{!isMinimized && isWindowOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.18 }}
						className="absolute inset-0 rounded-md bg-white/60 backdrop-blur-md border border-white/30 shadow-md z-0"
					/>
				)}
				<motion.div
					key={
						isWindowOpen && !isMinimized
							? `open-${appId}`
							: isMinimized
								? `minimized-${appId}`
								: `closed-${appId}`
					}
					initial={{ scale: 1, y: 0 }}
					animate={animateProps}
					transition={{
						duration: 0.38,
						times: [0, 0.3, 0.7, 1],
						type: "tween",
						ease: "easeInOut",
					}}
					style={{ display: "flex", zIndex: 10 }}
				>
					<AppIcon
						icon={taskbarApp.icon}
						width={40}
						height={40}
						alt={taskbarApp.name}
					/>
				</motion.div>
				{isWindowOpen && (
					<motion.div
						initial={false}
						animate={{
							width: isMinimized ? 12 : 24,
							backgroundColor: isMinimized
								? "var(--taskbar-indicator-minimised)"
								: "var(--taskbar-indicator-open)",
							opacity: 1,
						}}
						exit={{ opacity: 0 }}
						transition={{
							type: "spring",
							stiffness: 300,
							damping: 25,
						}}
						className="absolute left-1/2 -translate-x-1/2"
						style={{
							height: 4,
							borderRadius: 2,
							bottom: -2,
						}}
					/>
				)}
			</Flex>
		</TaskbarAppContextMenu>
	);
}
