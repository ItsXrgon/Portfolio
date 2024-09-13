"use client";

import { SortableContext, SortableContextProps } from "@dnd-kit/sortable";
import React from "react";

const SortableContextProvider = ({
	children,
	SortableContextProps,
}: React.PropsWithChildren<{
	SortableContextProps: Omit<SortableContextProps, "children">;
}>) => {
	return (
		<SortableContext {...SortableContextProps}>{children}</SortableContext>
	);
};

export default SortableContextProvider;
