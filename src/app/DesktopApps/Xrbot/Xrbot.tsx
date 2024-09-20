import React from "react";

import { Flex, Label } from "@/app/UIComponents";
import UIImage from "@/utils/UIImage";

export default function Xrbot() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-scroll bg-white p-4"
		>
			<Flex gap="20" align="center">
				<a
					href="https://unitconverter.xrgon.com/"
					target="_blank"
					className="text-blue-500 underline"
				>
					<UIImage
						icon="multi_unit_converter_logo"
						width={200}
						height={200}
					/>
				</a>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>What is this?</Label.Big400>
				<Label.Mid300>
					This is 2 things, an NPM library that you can find{" "}
					<a
						href="https://www.npmjs.com/package/multi-unit-converter/"
						target="_blank"
						className="text-blue-500 underline"
					>
						here
					</a>
					, and a website that you can find{" "}
					<a
						href="https://unitconverter.xrgon.com/"
						target="_blank"
						className="text-blue-500 underline"
					>
						here
					</a>
					.
					<br />
					The library was made to convert between different units to
					either SI units by default or user specified one. The catch?
					this is not like other libaries/converters that can only
					convert 1 unit at a time, this can convert multiple units at
					the same time. For example you can paste in a recipe full of
					different units and it will convert all of them at once.
					<br />
					This was not previously possible with other libraries to my
					knowledge. The website was made to showcase the library and
					provide a user-friendly interface for people to use the
					library without having to install it.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>How does this work?</Label.Big400>
				<Label.Mid300>
					Website is boring, let's talk about the library. The library
					works by parsing the input string and extracting the units
					and values, using a regex pattern that can detect units
					using their aliases to ensure no unit is missed.
					<br />
					The units are then converted to their respective selected
					output unit using conversion factors stored in the library.
				</Label.Mid300>
			</Flex>
		</Flex>
	);
}
