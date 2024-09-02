const palette = {
	desktop: {
		background: "rgba(var(--desktop-background) / <alpha-value>)",
		app: {
			background: "rgba(var(--desktop-app-background) / <alpha-value>)",
			text: "rgba(var(--desktop-app-text) / <alpha-value>)",
			hover: {
				background:
					"rgba(var(--desktop-app-hover-background) / <alpha-value>)",
				text: "rgba(var(--desktop-app-hover-text) / <alpha-value>)",
			},
			drag: {
				background:
					"rgba(var(--desktop-app-drag-background) / <alpha-value>)",
				text: "rgba(var(--desktop-app-drag-text) / <alpha-value>)",
			},
		},
	},
	taskbar: {
		background: "rgba(var(--taskbar-background) / <alpha-value>)",
		border: "rgba(var(--taskbar-border) / <alpha-value>)",
		separator: "rgba(var(--taskbar-separator) / <alpha-value>)",
		app: {
			background: "rgba(var(--taskbar-app-background) / <alpha-value>)",
			open: {
				background:
					"rgba(var(--taskbar-app-open-background) / <alpha-value>)",
				indicator:
					"rgba(var(--taskbar-app-open-indicator) / <alpha-value>)",
			},
			drag: {
				background:
					"rgba(var(--taskbar-app-drag-background) / <alpha-value>)",
			},
		},
		text: "rgba(var(--taskbar-text) / <alpha-value>)",
		icon: "rgba(var(--taskbar-icon) / <alpha-value>)",
		clock: {
			background: "rgba(var(--taskbar-clock-background) / <alpha-value>)",
			foreground: "rgba(var(--taskbar-clock-foreground) / <alpha-value>)",
			hands: {
				hour: "rgba(var(--taskbar-clock-hands-hour) / <alpha-value>)",
				minute: "rgba(var(--taskbar-clock-hands-minute) / <alpha-value>)",
				second: "rgba(var(--taskbar-clock-hands-second) / <alpha-value>)",
			},
			number: "rgba(var(--taskbar-clock-number) / <alpha-value>)",
		},
	},
	window: {
		background: "rgba(var(--window-background) / <alpha-value>)",
		header: {
			background: "rgba(var(--window-header-background) / <alpha-value>)",
			text: "rgba(var(--window-header-text) / <alpha-value>)",
			icon: {
				default:
					"rgba(var(--window-header-icon-default) / <alpha-value>)",
				hovered:
					"rgba(var(--window-header-icon-hovered) / <alpha-value>)",
				pressed:
					"rgba(var(--window-header-icon-pressed) / <alpha-value>)",
			},
		},
	},
	button: {
		primary: {
			default: "rgba(var(--action-primary-default) / <alpha-value>)",
			hovered: "rgba(var(--action-primary-hovered) / <alpha-value>)",
			pressed: "rgba(var(--action-primary-pressed) / <alpha-value>)",
			disabled: "rgba(var(--action-primary-disabled) / <alpha-value>)",
			icon: {
				default:
					"rgba(var(--action-primary-icon-default) / <alpha-value>)",
				hovered:
					"rgba(var(--action-primary-icon-hovered) / <alpha-value>)",
				pressed:
					"rgba(var(--action-primary-icon-pressed) / <alpha-value>)",
				disabled:
					"rgba(var(--action-primary-icon-disabled) / <alpha-value>)",
			},
		},
		white: {
			default: "rgba(var(--action-white-default) / <alpha-value>)",
			hovered: "rgba(var(--action-white-hovered) / <alpha-value>)",
			pressed: "rgba(var(--action-white-pressed) / <alpha-value>)",
			disabled: "rgba(var(--action-white-disabled) / <alpha-value>)",
			icon: {
				default:
					"rgba(var(--action-white-icon-default) / <alpha-value>)",
				hovered:
					"rgba(var(--action-white-icon-hovered) / <alpha-value>)",
				pressed:
					"rgba(var(--action-white-icon-pressed) / <alpha-value>)",
				disabled:
					"rgba(var(--action-white-icon-disabled) / <alpha-value>)",
			},
		},
		success: {
			default: "rgba(var(--action-success-default) / <alpha-value>)",
			hovered: "rgba(var(--action-success-hovered) / <alpha-value>)",
			pressed: "rgba(var(--action-success-pressed) / <alpha-value>)",
			disabled: "rgba(var(--action-success-disabled) / <alpha-value>)",
			icon: {
				default:
					"rgba(var(--action-success-icon-default) / <alpha-value>)",
				hovered:
					"rgba(var(--action-success-icon-hovered) / <alpha-value>)",
				pressed:
					"rgba(var(--action-success-icon-pressed) / <alpha-value>)",
				disabled:
					"rgba(var(--action-success-icon-disabled) / <alpha-value>)",
			},
		},
		warning: {
			default: "rgba(var(--action-warning-default) / <alpha-value>)",
			hovered: "rgba(var(--action-warning-hovered) / <alpha-value>)",
			pressed: "rgba(var(--action-warning-pressed) / <alpha-value>)",
			disabled: "rgba(var(--action-warning-disabled) / <alpha-value>)",
			icon: {
				default:
					"rgba(var(--action-warning-icon-default) / <alpha-value>)",
				hovered:
					"rgba(var(--action-warning-icon-hovered) / <alpha-value>)",
				pressed:
					"rgba(var(--action-warning-icon-pressed) / <alpha-value>)",
				disabled:
					"rgba(var(--action-warning-icon-disabled) / <alpha-value>)",
			},
		},
		critical: {
			default: "rgba(var(--action-critical-default) / <alpha-value>)",
			hovered: "rgba(var(--action-critical-hovered) / <alpha-value>)",
			pressed: "rgba(var(--action-critical-pressed) / <alpha-value>)",
			disabled: "rgba(var(--action-critical-disabled) / <alpha-value>)",
			icon: {
				default:
					"rgba(var(--action-critical-icon-default) / <alpha-value>)",
				hovered:
					"rgba(var(--action-critical-icon-hovered) / <alpha-value>)",
				pressed:
					"rgba(var(--action-critical-icon-pressed) / <alpha-value>)",
				disabled:
					"rgba(var(--action-critical-icon-disabled) / <alpha-value>)",
			},
		},
	},
	shadow: {
		dim: {
			light: "rgba(var(--shadow-dim-light) / <alpha-value>)",
		},
		ambient: {
			light: "rgba(var(--shadow-ambient-light) / <alpha-value>)",
		},
		direct: {
			light: "rgba(var(--shadow-direct-light) / <alpha-value>)",
		},
	},
};

export default palette;
