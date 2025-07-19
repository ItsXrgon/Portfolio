import { HaskellOriginal } from "devicons-react";

import { Flex, Label } from "@/components";

export default function AppHeader() {
	return (
		<Flex align="center" gap="3" className="mb-4">
			<span style={{ fontSize: 40 }} role="img" aria-label="chess knight">
				♞
			</span>
			<HaskellOriginal size={40} />
			<Label className="text-2xl font-bold" style={{ color: "#5e5086" }}>
				Haskell Chess Engine: A Functional Approach to Chess AI
			</Label>
		</Flex>
	);
}
