import dayjs from "dayjs";
const numberRegex = /\.0+$|(\.[0-9]*[1-9])0+$/;

export const numberFormatter = (num: number, digits: number) => {
	const lookup = [
		{ value: 1, symbol: "" },
		{ value: 1e3, symbol: "k" },
		{ value: 1e6, symbol: "M" },
		{ value: 1e9, symbol: "G" },
		{ value: 1e12, symbol: "T" },
		{ value: 1e15, symbol: "P" },
		{ value: 1e18, symbol: "E" },
	];
	const item = lookup.reverse().find(function (item) {
		return num >= item.value;
	});
	return item
		? (num / item.value).toFixed(digits).replace(numberRegex, "$1") +
				item.symbol
		: "0";
};

export const localeTimeFormatter = (time: Date) => {
	return Intl.DateTimeFormat("default", {
		hour: "numeric",
		minute: "numeric",
		second: "numeric",
	}).format(time);
};

export const localeDateFormatter = (time: Date) => {
	return Intl.DateTimeFormat("default", {
		year: "numeric",
		month: "numeric",
		day: "numeric",
	}).format(time);
};

export const formatDate = (day: Date, format: string) => {
	return dayjs(day).format(format);
};
