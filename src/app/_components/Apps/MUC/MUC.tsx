import {
	JavascriptOriginal,
	JestPlain,
	NextjsOriginal,
	ReactOriginal,
	TailwindcssOriginal,
	TypescriptOriginal,
} from "devicons-react";

import { Flex, Image, Label } from "@/components";

export default function MUC() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-auto bg-white p-4"
		>
			<Flex gap="20" align="center">
				<a
					href="https://unitconverter.xrgon.com/"
					target="_blank"
					className="text-blue-500 underline"
				>
					<Image
						icon="multi_unit_converter_logo"
						width={200}
						height={200}
						alt=""
					/>
				</a>
			</Flex>
			<Flex isColumn gap="2">
				<Label>What is this?</Label>
				<Label>
					NPM library that you can find{" "}
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
					<br />
					Repo link for
					<a
						href="https://github.com/ItsXrgon/multi-unit-converter"
						target="_blank"
						className="text-blue-500 underline"
					>
						library
					</a>
					and
					<a
						href="https://github.com/ItsXrgon/multi-unit-converter-site"
						target="_blank"
						className="text-blue-500 underline"
					>
						website
					</a>
					.
				</Label>
			</Flex>
			<Flex isColumn gap="2">
				<Label>How does this work?</Label>
				<Label>
					Website is boring, let&apos;s talk about the library. The
					library works by parsing the input string and extracting the
					units and values, using a regex pattern that can detect
					units using their aliases to ensure no unit is missed.
					<br />
					The units are then converted to their respective selected
					output unit using conversion factors stored in the library.
				</Label>
			</Flex>
			<Flex isColumn gap="2">
				<Label>Tech stack</Label>
				<Flex isColumn gap="2">
					<Label>Library</Label>
					<Flex isWrapped gap="4">
						<Flex gap="1" align="center">
							<JavascriptOriginal size={48} />
							<Label>JavaScript</Label>
						</Flex>
						<Flex gap="1" align="center">
							<JestPlain size={48} />
							<Label>Jest</Label>
						</Flex>
					</Flex>
				</Flex>
				<Flex isColumn gap="2">
					<Label>Website</Label>
					<Flex isWrapped gap="4">
						<Flex gap="1" align="center">
							<TypescriptOriginal size={48} />
							<Label>TypeScript</Label>
						</Flex>
						<Flex gap="1" align="center">
							<NextjsOriginal size={48} />
							<Label>NEXT.js</Label>
						</Flex>
						<Flex gap="1" align="center">
							<ReactOriginal size={48} />
							<Label>React</Label>
						</Flex>
						<Flex gap="1" align="center" className="">
							<TailwindcssOriginal size={48} />
							<Label>Tailwind</Label>
						</Flex>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
