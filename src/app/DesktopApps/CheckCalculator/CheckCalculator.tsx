import { DartOriginal, FlutterOriginal } from "devicons-react";
import React from "react";

import { Flex, Label } from "@/app/UIComponents";

export default function CheckCalculator() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-scroll bg-white p-4"
		>
			<Flex isColumn gap="2">
				<Label.Big400>What is this?</Label.Big400>
				<Label.Mid300>
					Mobile application made using Flutter to make splitting the
					bill easier by calculation how much each person should pay,
					simply add a person and each item they ordered with its
					price as well as the VAT and Service tax of the restaurant
					the the prices will be calculated for you. Find it here{" "}
					<a
						href="https://github.com/ItsXrgon/check-calculator"
						target="_blank"
						className="text-blue-500 underline"
					>
						here
					</a>
					.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>How does this work?</Label.Big400>
				<Label.Mid300>
					The app uses a list of objects to store the items each
					person ordered, the app then calculates the total price of
					the order adding onto it the VAT and the service tax. Then
					it outputs the price each person should pay next to their
					name in the list.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>Tech stack</Label.Big400>
				<Flex isWrapped gap="4">
					<Flex gap="1" align="center">
						<DartOriginal size={48} />
						<Label.Mid400>Dart</Label.Mid400>
					</Flex>
					<Flex gap="1" align="center">
						<FlutterOriginal size={48} />
						<Label.Mid400>Flutter</Label.Mid400>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
