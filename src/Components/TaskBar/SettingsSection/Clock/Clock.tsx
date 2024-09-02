import { useState, useEffect, useMemo } from 'react';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuTrigger,
} from '../../../../globalComponents/DropDownMenu';
import { localiseNumber } from '../../../../i18n';
import './Clock.css';
import {
	formatDate,
	localeDateFormatter,
	localeTimeFormatter,
} from '../../../../utils/formatting';

export default function Clock() {
	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	const formattedDate = useMemo(() => {
		return localeDateFormatter(time);
	}, [formatDate(time, 'DD')]);

	return (
		<DropdownMenu>
			<DropdownMenuTrigger className="flex flex-col items-center rounded-lg px-3">
				<label className="text-sm select-none text-taskbar-text">
					{localeTimeFormatter(time)}
				</label>
				<label className="text-sm select-none text-taskbar-text">
					{formattedDate}
				</label>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-[320px] h-[320px]" sideOffset={15}>
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
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
