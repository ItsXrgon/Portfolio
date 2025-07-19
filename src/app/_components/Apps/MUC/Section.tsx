import { Flex, Label } from "@/components";

interface SectionProps {
	title: string;
	children: React.ReactNode;
}

export default function Section({ title, children }: SectionProps) {
	return (
		<Flex
			isColumn
			gap="2"
			className="bg-white rounded-xl border border-indigo-200 shadow-md"
		>
			<Flex
				align="center"
				gap="2"
				className="bg-gradient-to-r from-indigo-600 to-cyan-600 p-3 rounded-t-xl"
			>
				<Label size="lg" weight="Bold" className="text-white">
					<span className="text-orange-300">⚡</span>
					{title}
				</Label>
			</Flex>
			<Flex className="p-6">{children}</Flex>
		</Flex>
	);
}
