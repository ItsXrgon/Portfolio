import { Flex, Label } from "@/app/UIComponents";

export default function General() {
	return (
		<Flex isColumn gap="3">
			<Flex isColumn gap="1">
				<Label.Big400>Any issues or suggestions?</Label.Big400>
				<Label.Mid300>
					Please feel free to open an issue on the{" "}
					<a
						href="https://github.com/ItsXrgon/Portfolio/issues"
						target="_blank"
						className="text-blue-500 underline"
					>
						Github Repository
					</a>
					. I`m always looking to improve and fix any issues that may
					arise.
				</Label.Mid300>
			</Flex>
		</Flex>
	);
}
