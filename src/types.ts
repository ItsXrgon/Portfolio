export type TApp = {
	id: string;
	name: string;
	icon: string;
	type: 'app' | 'folder';
	position: {
		x: number;
		y: number;
	};
};

export type TWindow = {
	id: string;
	name: string;
	icon: string;
	type: 'app' | 'folder';
	windowState: {
		isMinimized: boolean;
		isMaximized: boolean;
		zIndex: number;
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

export type TTaskBar = {
	id: string;
	name: string;
	icon: string;
	pinned: boolean;
};

export type TFolder = TApp & {
	type: 'folder';
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
		TaskBar: string;
	};
	text: {
		primary: string;
		secondary: string;
		ternary: string;
		accent: string;
	};
};
