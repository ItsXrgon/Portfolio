const palette = {
	desktop: {
		background: "var(--desktop-background)",
		app: {
			background: "var(--desktop-app-background)",
			text: "var(--desktop-app-text)",
			hover: {
				background: "var(--desktop-app-hover-background)",
				text: "var(--desktop-app-hover-text)",
			},
			drag: {
				background: "var(--desktop-app-drag-background)",
				text: "var(--desktop-app-drag-text)",
			},
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
	button: {
		primary: {
			default: "var(--action-primary-default)",
			hovered: "var(--action-primary-hovered)",
			pressed: "var(--action-primary-pressed)",
			disabled: "var(--action-primary-disabled)",
			icon: {
				default: "var(--action-primary-icon-default)",
				hovered: "var(--action-primary-icon-hovered)",
				pressed: "var(--action-primary-icon-pressed)",
				disabled: "var(--action-primary-icon-disabled)",
			},
		},
		white: {
			default: "var(--action-white-default)",
			hovered: "var(--action-white-hovered)",
			pressed: "var(--action-white-pressed)",
			disabled: "var(--action-white-disabled)",
			icon: {
				default: "var(--action-white-icon-default)",
				hovered: "var(--action-white-icon-hovered)",
				pressed: "var(--action-white-icon-pressed)",
				disabled: "var(--action-white-icon-disabled)",
			},
		},
		success: {
			default: "var(--action-success-default)",
			hovered: "var(--action-success-hovered)",
			pressed: "var(--action-success-pressed)",
			disabled: "var(--action-success-disabled)",
			icon: {
				default: "var(--action-success-icon-default)",
				hovered: "var(--action-success-icon-hovered)",
				pressed: "var(--action-success-icon-pressed)",
				disabled: "var(--action-success-icon-disabled)",
			},
		},
		warning: {
			default: "var(--action-warning-default)",
			hovered: "var(--action-warning-hovered)",
			pressed: "var(--action-warning-pressed)",
			disabled: "var(--action-warning-disabled)",
			icon: {
				default: "var(--action-warning-icon-default)",
				hovered: "var(--action-warning-icon-hovered)",
				pressed: "var(--action-warning-icon-pressed)",
				disabled: "var(--action-warning-icon-disabled)",
			},
		},
		critical: {
			default: "var(--action-critical-default)",
			hovered: "var(--action-critical-hovered)",
			pressed: "var(--action-critical-pressed)",
			disabled: "var(--action-critical-disabled)",
			icon: {
				default: "var(--action-critical-icon-default)",
				hovered: "var(--action-critical-icon-hovered)",
				pressed: "var(--action-critical-icon-pressed)",
				disabled: "var(--action-critical-icon-disabled)",
			},
		},
	},
	shadow: {
		dim: {
			light: "var(--shadow-dim-light)",
		},
		ambient: {
			light: "var(--shadow-ambient-light)",
		},
		direct: {
			light: "var(--shadow-direct-light)",
		},
	},
};

export default palette;
