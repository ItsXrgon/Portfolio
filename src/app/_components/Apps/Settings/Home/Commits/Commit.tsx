import Image from "next/image";

import { Flex, Label } from "@/components";
import { TGithubCommit } from "@/lib/apis/types";
import { formatLocaleDateTime } from "@/lib/formatting/date";

export default function Commit({ commit }: { commit: TGithubCommit }) {
	return (
		<Flex
			key={commit.sha}
			isColumn
			gap="2"
			className="rounded-lg bg-yellow-50 border border-dashed border-yellow-300 p-2 shadow"
		>
			<a
				href={commit.html_url}
				target="_blank"
				rel="noopener noreferrer"
				className="text-blue-900  hover:underline"
			>
				<Label size="lg" weight="Bold" className="text-blue-900">
					{commit.commit.message.split("\n")[0]}
				</Label>
			</a>
			<Flex gap="2">
				{commit.author?.avatar_url && (
					<Image
						src={commit.author?.avatar_url}
						alt="avatar"
						width={32}
						height={32}
						className="rounded-full border border-blue-300"
						unoptimized
					/>
				)}
				<Flex align="center" gap="2">
					<Label size="md" weight="SemiBold" className=" text-blue-700 ">
						{commit.commit.author.name || "Unknown"} —{" "}
					</Label>
					<Label size="md" weight="SemiBold" className=" text-blue-700 ">
						{commit.commit.author?.date
							? formatLocaleDateTime(commit.commit.author.date)
							: ""}
					</Label>
				</Flex>
			</Flex>
		</Flex>
	);
}
