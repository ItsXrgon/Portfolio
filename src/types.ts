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
	surface: {
		primary: string;
		secondary: string;
		tertiary: string;
		subdued: string;
		accent: string;
	};
	taskBar: {
		primary: string;
		subdued: string;
		accent: string;
		hover: string;
	};
	icon: {
		primary: string;
		interactive: string;
		hover: string;
		pressed: string;
	};
	label: {
		primary: string;
		secondary: string;
		tertiary: string;
		subdued: string;
	};
	wallpaper: string;
};
