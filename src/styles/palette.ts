const palette = {
	desktop: {
		background: "var(--desktop-background)",
		app: {
			background: "var(--desktop-app-background)",
			text: "var(--desktop-app-text)",
		},
	},
	taskbar: {
		background: "var(--taskbar-background)",
		border: "var(--taskbar-border)",
		separator: "var(--taskbar-separator)",
		app: {
			background: "var(--taskbar-app-background)",
			open: {
				background: "var(--taskbar-app-open-background)",
				indicator: "var(--taskbar-app-open-indicator)",
			},
			drag: {
				background: "var(--taskbar-app-drag-background)",
			},
		},
		text: "var(--taskbar-text)",
		icon: {
			default: "var(--taskbar-icon-default)",
			hover: "var(--taskbar-icon-hover)",
			pressed: "var(--taskbar-icon-pressed)",
		},
		clock: {
			background: "var(--taskbar-clock-background)",
			foreground: "var(--taskbar-clock-foreground)",
			hands: {
				hour: "var(--taskbar-clock-hands-hour)",
				minute: "var(--taskbar-clock-hands-minute)",
				second: "var(--taskbar-clock-hands-second)",
			},
			number: "var(--taskbar-clock-number)",
		},
	},
	window: {
		background: "var(--window-background)",
		header: {
			background: "var(--window-header-background)",
			text: "var(--window-header-text)",
			icon: {
				default: "var(--window-header-icon-default)",
				hovered: "var(--window-header-icon-hovered)",
				pressed: "var(--window-header-icon-pressed)",
			},
		},
	},
};

export default palette;
