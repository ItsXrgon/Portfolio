import { Github, Settings } from "lucide-react";
import React from "react";

import About from "@/app/_components/Apps/About/About";
import CheckCalculator from "@/app/_components/Apps/CheckCalculator/CheckCalculator";
import Curaflow from "@/app/_components/Apps/Curaflow/Curaflow";
import HaskellChessGame from "@/app/_components/Apps/HaskellChessGame/HaskellChessGame";
import MUC from "@/app/_components/Apps/MUC/MUC";
import Xrbot from "@/app/_components/Apps/Xrbot/Xrbot";
import { useWindow } from "@/store";

const AppsMap = {
	About,
	Curaflow,
	Github,
	Settings,
	MUC,
	"Xrbot - Discord Bot": Xrbot,
	"Haskell Chess Game": HaskellChessGame,
	"Check Calculator": CheckCalculator,
};

export default function Content({ windowId }: { windowId: string }) {
	const window = useWindow(windowId)!;

	if (AppsMap[window.name as keyof typeof AppsMap]) {
		const Component = AppsMap[window.name as keyof typeof AppsMap];
		return <Component />;
	}

	return (
		<div className="bg-black w-full">
			<div className="text-white">This is a default page!</div>
		</div>
	);
}
