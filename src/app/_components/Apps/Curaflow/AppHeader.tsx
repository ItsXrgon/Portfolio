import { Flex, Image, Label } from "@/components";

export default function AppHeader() {
	return (
		<Flex
			align="center"
			gap="4"
			className="mb-6 p-6 bg-gradient-to-r from-blue-50 to-sky-50 rounded-xl border border-blue-100 shadow-sm"
		>
			<Image icon="curaflow_title" width={200} height={200} alt="" />
			<Flex isColumn gap="2">
				<Label
					size="2xl"
					weight="Bold"
					className="text-blue-700 font-curaflow"
				>
					Customer Relation Management System
				</Label>
				<Label className="text-blue-600 text-sm">
					Comprehensive clinic management solution
				</Label>
			</Flex>
		</Flex>
	);
}
