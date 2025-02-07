"use client";

import { useEffect } from "react";

import { updateTime } from "@/store/appsSlice";
import { useAppDispatch } from "@/store/hooks";

const ConfigProvider = ({ children }: { children: React.ReactNode }) => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(updateTime());
		}, 1000);
		return () => clearInterval(interval);
	}, [dispatch]);

	return (
		<div className="h-full" onContextMenu={(e) => e.preventDefault()}>
			{children}
		</div>
	);
};

export default ConfigProvider;
