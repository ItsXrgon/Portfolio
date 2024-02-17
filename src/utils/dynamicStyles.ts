import { TTheme } from '../types';

const applyDynamicStyles = (theme: TTheme) => {
	const dynamicStyles = `
    .bg-primary {
      background-color: ${theme.surface.primary};
    }
    .bg-primary-hover:hover {
      background-color: ${theme.surface.primary};
    }
    .bg-secondary {
      background-color: ${theme.surface.secondary};
    }
    .bg-secondary-hover:hover {
      background-color: ${theme.surface.secondary};
    }
    .bg-tertiary {
      background-color: ${theme.surface.tertiary};
    }
    .bg-tertiary-hover:hover {
      background-color: ${theme.surface.tertiary};
    }
    .bg-accent {
      background-color: ${theme.surface.accent};
    }
    .bg-accent-hover:hover {
      background-color: ${theme.surface.accent};
    }
    .bg-subdued {
      background-color: ${theme.surface.subdued};
    }
    .bg-subdued-hover:hover {
      background-color: ${theme.surface.subdued};
    }
    .tb-primary {
      background-color: ${theme.taskBar.primary};
    }
    .tb-primary-hover:hover {
      background-color: ${theme.taskBar.hover};
    }
    .tb-subdued {
      background-color: ${theme.taskBar.subdued};
    }
    .tb-subdued-hover:hover {
      background-color: ${theme.taskBar.hover};
    }
    .tb-accent {
      background-color: ${theme.taskBar.accent};
    }
    .tb-accent-hover:hover {
      background-color: ${theme.taskBar.hover};
    }
    .icon-primary {
      color: ${theme.icon.primary};
    }
    .icon-primary-hover:hover {
      color: ${theme.icon.primary};
    }
    .icon-interactive {
      color: ${theme.icon.interactive};
    }
    .icon-interactive-hover:hover {
      color: ${theme.icon.interactive};
    }
    .icon-hover:hover {
      color: ${theme.icon.hover};
    }
    .icon-hover:hover {
      color: ${theme.icon.hover};
    }
    .icon-pressed {
      color: ${theme.icon.pressed};
    }
    .icon-pressed:active {
      color: ${theme.icon.pressed};
    }
    .label-primary {
      color: ${theme.label.primary};
    }
    .label-primary-hover:hover {
      color: ${theme.label.primary};
    }
    .label-secondary {
      color: ${theme.label.secondary};
    }
    .label-secondary-hover:hover {
      color: ${theme.label.secondary};
    }
    .label-ternary {
      color: ${theme.label.tertiary};
    }
    .label-ternary-hover:hover {
      color: ${theme.label.tertiary};
    }
    .label-accent {
      color: ${theme.label.subdued};
    }
    .label-accent-hover:hover {
      color: ${theme.label.subdued};
    }
  `;

	const styleTag = document.createElement('style');
	styleTag.innerHTML = dynamicStyles;

	document.head.appendChild(styleTag);
};

export default applyDynamicStyles;
