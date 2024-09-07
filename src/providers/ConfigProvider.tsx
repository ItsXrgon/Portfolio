"use client";

import { useEffect } from "react";

import { updateTime } from "@/app/stores/appsSlice";
import { useAppDispatch } from "@/app/stores/hooks";

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(updateTime());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="h-full" onContextMenu={(e) => e.preventDefault()}>
			{children}
		</div>
	);
};

export default ConfigProvider;
