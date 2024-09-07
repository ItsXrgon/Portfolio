import React from "react";

import { localiseNumber } from "@/app/i18n";

import "./Clock.css";

export default function ClockPopup({ time }: { time?: Date }) {
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
			<span className="twelve">{localiseNumber(12)}</span>
			<span className="one">{localiseNumber(1)}</span>
			<span className="two">{localiseNumber(2)}</span>
			<span className="three">{localiseNumber(3)}</span>
			<span className="four">{localiseNumber(4)}</span>
			<span className="five">{localiseNumber(5)}</span>
			<span className="six">{localiseNumber(6)}</span>
			<span className="seven">{localiseNumber(7)}</span>
			<span className="eight">{localiseNumber(8)}</span>
			<span className="nine">{localiseNumber(9)}</span>
			<span className="ten">1{localiseNumber(0)}</span>
			<span className="eleven">1{localiseNumber(1)}</span>
		</div>
	);
}
