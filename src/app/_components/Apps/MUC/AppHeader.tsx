import { Flex, Image, Label } from "@/components";

export default function AppHeader() {
	return (
		<Flex
			isColumn
			align="center"
			gap="4"
			className="p-6 bg-gradient-to-br from-indigo-50 to-cyan-50 rounded-xl border border-indigo-200 shadow-lg"
		>
			<Flex align="center" gap="4">
				<Image
					src="/assets/appicons/multi-unit-converter.svg"
					width={80}
					height={80}
					alt="Multi Unit Converter Logo"
					className="drop-shadow-lg"
				/>
				<Flex isColumn>
					<Label className="text-2xl font-bold text-indigo-700 mb-1">
						Multi Unit Converter
					</Label>
					<Label className="text-sm text-indigo-600 font-medium">
						Unit Conversion Library & Web Tool
					</Label>
				</Flex>
			</Flex>
			<Flex align="center" gap="2" className="text-indigo-600">
				<span className="text-lg">∑</span>
				<Label className="text-sm font-medium">
					Convert multiple units simultaneously
				</Label>
				<span className="text-lg">∫</span>
			</Flex>
		</Flex>
	);
}
