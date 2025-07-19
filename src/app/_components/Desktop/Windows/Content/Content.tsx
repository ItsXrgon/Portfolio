// import About from "@/app/_components/Apps/About/About";
import Curaflow from "@/app/_components/Apps/Curaflow/Curaflow";
import Github from "@/app/_components/Apps/Github/Github";
import HaskellChessGame from "@/app/_components/Apps/HaskellChessGame/HaskellChessGame";
import MUC from "@/app/_components/Apps/MUC/MUC";
import Settings from "@/app/_components/Apps/Settings/Settings";
import Terminal from "@/app/_components/Apps/Terminal/Terminal";
import Xrbot from "@/app/_components/Apps/Xrbot/Xrbot";
import { useWindow } from "@/store";

const AppsMap = {
	// About,
	Curaflow,
	Github,
	Settings,
	"Multi Unit Converter": MUC,
	"Xrbot - Discord Bot": Xrbot,
	"Haskell Chess Game": HaskellChessGame,
	Terminal,
};

export default function Content({ windowId }: { windowId: string }) {
	const window = useWindow(windowId)!;

	if (AppsMap[window.name as keyof typeof AppsMap]) {
		const Component = AppsMap[window.name as keyof typeof AppsMap];
		return <Component />;
	}

	return <div className="text-white">This is a default page!</div>;
}
