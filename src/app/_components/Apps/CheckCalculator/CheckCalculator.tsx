import { DartOriginal, FlutterOriginal } from "devicons-react";

import { Flex, Label } from "@/components";

export default function CheckCalculator() {
	return (
		<Flex className="w-full gap-4 overflow-y-auto bg-white p-4 overflow-x-hidden">
			<Flex
				isColumn
				gap="3"
				className="w-full gap-4 overflow-y-auto bg-white p-4 overflow-x-hidden"
			>
				<Flex isColumn gap="2">
					<Label>What is this?</Label>
					<Label>
						Mobile application made using Flutter to make splitting
						the bill easier by calculation how much each person
						should pay, simply add a person and each item they
						ordered with its price as well as the VAT and Service
						tax of the restaurant the the prices will be calculated
						for you. Find it here{" "}
						<a
							href="https://github.com/ItsXrgon/check-calculator"
							target="_blank"
							className="text-blue-500 underline"
						>
							here
						</a>
						.
					</Label>
				</Flex>
				<Flex isColumn gap="2">
					<Label>How does this work?</Label>
					<Label>
						The app uses a list of objects to store the items each
						person ordered, the app then calculates the total price
						of the order adding onto it the VAT and the service tax.
						Then it outputs the price each person should pay next to
						their name in the list.
					</Label>
				</Flex>
				<Flex isColumn gap="2">
					<Label>Tech stack</Label>
					<Flex isWrapped gap="4">
						<Flex gap="1" align="center">
							<DartOriginal size={48} />
							<Label>Dart</Label>
						</Flex>
						<Flex gap="1" align="center">
							<FlutterOriginal size={48} />
							<Label>Flutter</Label>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
