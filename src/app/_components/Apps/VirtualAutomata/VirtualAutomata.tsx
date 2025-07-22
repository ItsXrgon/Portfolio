import virtual_automaton from "@assets/VirtualAutomata/application_structure.png";

import { Flex } from "@/components";

import Figure from "./Figure";
import Section from "./Section";
import "./index.css";

export default function VirtualAutomata() {
	return (
		<div className="relative w-full h-full paper-bg rounded-lg font-automata automata-scrollbar">
			<Flex
				isColumn
				className="w-full h-full overflow-y-auto chessboard-scrollbar relative p-10 px-11 overflow-auto"
			>
				<Section
					title="Introduction"
					subtitle="Background and Motivation"
				>
					Lore ipsum dolor sit amet consectetur adipisicing elit. Lore
					ipsum dolor sit amet consectetur adipisicing elit. Lore
					ipsum dolor sit amet consectetur adipisicing elit. Lore
					ipsum dolor sit amet consectetur adipisicing elit.
				</Section>
				<Flex className="h-20 w-full" align="center">
					<hr className="border-black w-full" />
				</Flex>
				<Flex gap="5" justify="between">
					<Section
						title="Introduction"
						subtitle="Background and Motivation"
					>
						Lore ipsum dolor sit amet consectetur adipisicing elit.
						Lore ipsum dolor sit amet consectetur adipisicing elit.
					</Section>
					<Figure src={virtual_automaton} alt="Figure 1" />
				</Flex>
			</Flex>
		</div>
	);
}
