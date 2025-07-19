import { Flex, Skeleton } from "@/components";

export default function CommitsLoading() {
	return (
		<Flex isColumn gap="2">
			{Array.from({ length: 5 }).map((_, i) => (
				<Flex
					key={i}
					isColumn
					gap="2"
					className="rounded-lg bg-yellow-50 border border-dashed border-yellow-300 p-2 shadow"
				>
					<Skeleton className="h-[25px] bg-yellow-200 rounded" />
					<Flex gap="2">
						<Skeleton className="w-8 h-8 bg-yellow-200 rounded-full" />
						<Skeleton className="h-6 bg-yellow-200 rounded w-32" />
					</Flex>
				</Flex>
			))}
		</Flex>
	);
}
