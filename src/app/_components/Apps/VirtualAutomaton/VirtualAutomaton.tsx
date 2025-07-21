import { Flex } from "@/components";

import Section from "./Section";
import "./index.css";

export default function VirtualAutomaton() {
	return (
		<div className="relative w-full h-full paper-bg rounded-lg font-automaton automaton-scrollbar">
			<Flex
				isColumn
				className="w-full h-full overflow-y-auto chessboard-scrollbar relative p-10 overflow-auto"
			>
				<Section
					title="Introduction"
					subtitle="Background and Motivation"
				>
					Virtual Automaton is a tool that allows you to create and
					simulate automata in a virtual environment. It is a project
					that I developed for my bachelor thesis.
				</Section>
				<Flex className="h-20 w-full" align="center">
					<hr className="border-black w-full" />
				</Flex>
				<Section
					title="Introduction"
					subtitle="Background and Motivation"
				>
					Virtual Automaton is a tool that allows you to create and
					simulate automata in a virtual environment. It is a project
					that I developed for my bachelor thesis.
				</Section>
			</Flex>
		</div>
	);
}
