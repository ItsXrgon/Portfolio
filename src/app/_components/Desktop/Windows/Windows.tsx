import { useVisibleWindowsIds } from "@/store";

import Window from "./Window";

export default function Windows() {
	const windowsIds = useVisibleWindowsIds();

	return windowsIds.map((windowId) => (
		<Window windowId={windowId} key={windowId} />
	));
}
