const palette = {
	desktop: {
		background: "var(--desktop-background)",
		text: "var(--desktop-text)",
	},
	taskbar: {
		background: "var(--taskbar-background)",
		border: "var(--taskbar-border)",
		indicator: {
			open: "var(--taskbar-app-indicator-open)",
			minimised: "var(--taskbar-app-indicator-minimised)",
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
		frame: "var(--window-frame)",
		header: {
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
