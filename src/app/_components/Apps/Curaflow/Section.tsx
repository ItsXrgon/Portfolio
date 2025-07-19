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
			gap="3"
			className="mb-6 p-5 bg-white rounded-lg border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-200"
		>
			<Label className="text-lg font-semibold text-blue-700 border-b border-blue-100 pb-2 font-curaflow">
				{title}
			</Label>
			<div className="text-base text-gray-700 leading-relaxed">
				{children}
			</div>
		</Flex>
	);
}
