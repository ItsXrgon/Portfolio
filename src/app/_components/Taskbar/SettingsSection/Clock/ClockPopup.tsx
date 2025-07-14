import React from "react";

import { useFormatNumber } from "@/lib/formatting/number";

import "./Clock.css";

export default function ClockPopup({ time }: { time?: Date }) {
	const { formatNumber } = useFormatNumber();
	if (!time) return <></>;

	return (
		<div className="clock">
			<div
				className="hour"
				style={{
					transform: `rotateZ(${time.getHours() * 30}deg)`,
				}}
			/>
			<div
				className="minute"
				style={{
					transform: `rotateZ(${time.getMinutes() * 6}deg)`,
				}}
			/>
			<div
				className="second"
				style={{
					transform: `rotateZ(${time.getSeconds() * 6}deg)`,
				}}
			/>
			<span className="twelve">{formatNumber(12)}</span>
			<span className="one">{formatNumber(1)}</span>
			<span className="two">{formatNumber(2)}</span>
			<span className="three">{formatNumber(3)}</span>
			<span className="four">{formatNumber(4)}</span>
			<span className="five">{formatNumber(5)}</span>
			<span className="six">{formatNumber(6)}</span>
			<span className="seven">{formatNumber(7)}</span>
			<span className="eight">{formatNumber(8)}</span>
			<span className="nine">{formatNumber(9)}</span>
			<span className="ten">1{formatNumber(0)}</span>
			<span className="eleven">1{formatNumber(1)}</span>
		</div>
	);
}
