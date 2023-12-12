export type TApp = {
	id: string;
	name: string;
	icon: string;
	type: "app" | "folder";
	position: {
		x: number;
		y: number;
	};
	appState: {
		isOpen: boolean;
		isPinned: boolean;
		isSelected: boolean;
	};
	windowState?: {
		isMinimized: boolean;
		isMaximized: boolean;
		position: {
			x: number;
			y: number;
		};
		size: {
			width: number;
			height: number;
		};
	};
};

export type TFolder = TApp & {
	type: "folder";
	children: TApp[];
};

export type TTheme = {
	name: string;
	colors: {
		primary: string;
		primary_accent: string;
		secondary: string;
		secondary_accent: string;
		ternary: string;
		ternary_accent: string;
		bottomBar: string;
	};
	text: {
		primary: string;
		secondary: string;
		ternary: string;
		accent: string;
	};
};
