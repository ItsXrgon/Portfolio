"use client";

import { DndContext, DndContextProps } from "@dnd-kit/core";
import { PropsWithChildren } from "react";

const DragAndDropProvider = ({
	children,
	DndContextProps,
}: PropsWithChildren<{
	DndContextProps: DndContextProps;
}>) => {
	return <DndContext {...DndContextProps}>{children}</DndContext>;
};

export default DragAndDropProvider;
