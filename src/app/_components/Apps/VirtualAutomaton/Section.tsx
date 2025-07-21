import { ReactNode } from "react";

import { Flex, Label } from "@/components";

export default function Section({
	title,
	subtitle,
	children,
}: {
	title: string;
	subtitle: string;
	children: ReactNode;
}) {
	return (
		<Flex isColumn gap="0">
			<Flex className="h-10" align="end">
				<Label size="2xl" weight="Bold" className="text-black h-7">
					{title}
				</Label>
			</Flex>
			<Flex className="h-10" align="end">
				<Label size="xl" weight="Medium" className="text-black h-6">
					{subtitle}
				</Label>
			</Flex>
			<Flex
				className="leading-10 break-words whitespace-pre-line items-end pt-3 -mb-3"
				align="end"
			>
				{children}
			</Flex>
		</Flex>
	);
}
