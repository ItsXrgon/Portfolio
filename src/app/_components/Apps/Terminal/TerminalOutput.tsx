import { Flex, Label } from "@/components";

export default function TerminalOutput({ history }: { history: string[] }) {
	return (
		<Flex isColumn gap="1" className="overflow-y-auto mb-2 flex-1">
			{history.map((line, idx) => (
				<Label key={idx} className="whitespace-pre-wrap leading-6">
					{line}
				</Label>
			))}
		</Flex>
	);
}
