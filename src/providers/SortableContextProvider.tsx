"use client";

import { SortableContext, SortableContextProps } from "@dnd-kit/sortable";
import { PropsWithChildren } from "react";

const SortableContextProvider = ({
	children,
	SortableContextProps,
}: PropsWithChildren<{
	SortableContextProps: Omit<SortableContextProps, "children">;
}>) => {
	return (
		<SortableContext {...SortableContextProps}>{children}</SortableContext>
	);
};

export default SortableContextProvider;
