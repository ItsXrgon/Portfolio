import React from "react";

import { Flex, Label } from "@/components";

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
	return (
		<Flex
			isColumn
			gap="1"
			className="backdrop-blur-md rounded-lg p-4 shadow-lg"
		>
			<Label className="text-lg font-semibold mb-1 text-amber-900">
				{title}
			</Label>
			<div className="text-base text-gray-800">{children}</div>
		</Flex>
	);
}
