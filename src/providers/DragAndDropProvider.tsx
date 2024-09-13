"use client";

import { DndContext, DndContextProps } from "@dnd-kit/core";
import React from "react";

const DragAndDropProvider = ({
	children,
	DndContextProps,
}: React.PropsWithChildren<{
	DndContextProps: DndContextProps;
}>) => {
	return <DndContext {...DndContextProps}>{children}</DndContext>;
};

export default DragAndDropProvider;
