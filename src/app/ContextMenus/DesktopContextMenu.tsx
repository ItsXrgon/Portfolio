import { RefreshCcw } from "lucide-react";
import { ReactNode, useCallback } from "react";
import { useTranslation } from "react-i18next";

import {
	ContextMenu,
	ContextMenuContent,
	ContextMenuItem,
	ContextMenuSeparator,
	ContextMenuTrigger,
} from "@/app/UIComponents/ContextMenu";

export function DesktopContextMenu({
	children,
	extraOptions,
}: {
	children: ReactNode;
	extraOptions?: ReactNode;
}) {
	const { t } = useTranslation();

	const handleRefreshClick = useCallback(() => {
		window.location.reload();
	}, []);

	return (
		<ContextMenu>
			<ContextMenuTrigger>{children}</ContextMenuTrigger>
			<ContextMenuContent className="w-64">
				<ContextMenuItem
					className="flex items-center gap-3"
					onClick={handleRefreshClick}
				>
					<RefreshCcw size={18} />
					{t("context_menu.refresh")}
				</ContextMenuItem>
				{extraOptions && (
					<>
						{extraOptions}
						<ContextMenuSeparator />
					</>
				)}
			</ContextMenuContent>
		</ContextMenu>
	);
}
