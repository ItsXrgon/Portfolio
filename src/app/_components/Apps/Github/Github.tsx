import { Flex } from "@/components";

import Profile from "./Components/Profile";
import Respositories from "./Components/Respositories";
import "./index.css";

export default function Github() {
	return (
		<div className="cyberpunk-scrollbar rounded-lg relative w-full h-full overflow-hidden font-cyberpunk text-[#0ff0fc]">
			<div
				className="absolute inset-0 z-0 bg-gradient-to-br from-[#0f0026] via-[#1a0033] to-[#0ff0fc] bg-[length:400%_400%]"
				style={{ filter: "brightness(0.8)" }}
			/>
			<Flex className="relative w-full h-full">
				<Profile />
				<Respositories />
			</Flex>
		</div>
	);
}
