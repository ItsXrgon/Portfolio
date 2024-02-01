import { TTheme } from '../types';

const applyDynamicStyles = (theme: TTheme) => {
	const dynamicStyles = `
    .bg-primary {
      background-color: ${theme.colors.primary};
    }
    .bg-primary-accent {
      background-color: ${theme.colors.primary_accent};
    }
    .bg-primary-hover:hover {
      background-color: ${theme.colors.primary_accent};
    }
    .bg-secondary {
      background-color: ${theme.colors.secondary};
    }
    .bg-secondary-accent {
      background-color: ${theme.colors.secondary_accent};
    }
    .bg-secondary-hover:hover {
      background-color: ${theme.colors.secondary_accent};
    }
    .bg-ternary {
      background-color: ${theme.colors.ternary};
    }
    .bg-ternary-accent {
      background-color: ${theme.colors.ternary_accent};
    }
    .bg-ternary-hover:hover {
      background-color: ${theme.colors.ternary_accent};
    }
    .bg-TaskBar-hover:hover {
      background-color: ${theme.colors.TaskBar};
    }
    .bg-TaskBar {
      background-color: ${theme.colors.TaskBar};
    }
    .text-primary {
      color: ${theme.colors.primary};
    }
    .text-secondary {
      color: ${theme.colors.secondary};
    }
    .text-ternary {
      color: ${theme.colors.ternary};
    }
    .text-accent {
      color: ${theme.text.accent};
    }

  `;

	const styleTag = document.createElement('style');
	styleTag.innerHTML = dynamicStyles;

	document.head.appendChild(styleTag);
};

export default applyDynamicStyles;
