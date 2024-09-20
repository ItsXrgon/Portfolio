import { DiscordjsOriginal, JavascriptOriginal } from "devicons-react";
import React from "react";

import { Flex, Label } from "@/app/UIComponents";

export default function UserPurge() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-scroll bg-white p-4"
		>
			<Flex isColumn gap="2">
				<Label.Big400>What is this?</Label.Big400>
				<Label.Mid300>
					Discord bot made using Discord.js that uses the
					discord API to delete all of the messages of a user in a
					server. Find it here{" "}
					<a
						href="https://github.com/ItsXrgon/UserPurge"
						target="_blank"
						className="text-blue-500 underline"
					>
						here
					</a>
					.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>How does this work?</Label.Big400>
				<Label.Mid300>
					The bot uses a recursive function with a timeout to fetch
					and delete 100 messages at a time, going on timeout whenever
					it is rate limited by the Discord api.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>Tech stack</Label.Big400>
				<Flex isWrapped gap="4">
					<Flex gap="1" align="center">
						<JavascriptOriginal size={48} />
						<Label.Mid400>JavaScript</Label.Mid400>
					</Flex>
					<Flex gap="1" align="center">
						<DiscordjsOriginal size={48} />
						<Label.Mid400>Disccord.js</Label.Mid400>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
