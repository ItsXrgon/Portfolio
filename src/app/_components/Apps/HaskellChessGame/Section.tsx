import React from "react";

import { Flex, Label } from "@/components";

type SectionProps = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: SectionProps) {
	return (
		<Flex isColumn gap="1" className="mb-4">
			<Label className="text-lg font-semibold mb-1">{title}</Label>
			<div className="text-base text-gray-800">{children}</div>
		</Flex>
	);
}
