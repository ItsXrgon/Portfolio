import { Flex, Label } from "@/components/ui";
import { selectApps } from "@/store/appsSlice";
import { useAppSelector } from "@/store/hooks";

import { useTerminal } from "../useTerminal";

export function LS() {
	const { path } = useTerminal();
	const allApps = useAppSelector(selectApps);

	const apps = allApps.filter((app) => app.parentDirectory === path);

	return (
		<Flex isColumn gap="1">
			{apps.map((app) => {
				const isFolder = app.type === "directory";
				return (
					<Flex key={app.id} gap="1">
						<Label.Mid200
							variant={isFolder ? "primary" : "default"}
						>
							{app.name}
						</Label.Mid200>
						<Label.Mid200
							variant={isFolder ? "primary" : "default"}
						>
							{isFolder ? "/" : "*"}
						</Label.Mid200>
					</Flex>
				);
			})}
		</Flex>
	);
}
