import { BookMarked, GitFork, Star } from "lucide-react";
import uniqolor from "uniqolor";

import { Flex, Label } from "@/app/UIComponents";
import { TGithubRepo } from "@/app/types";
import { numberFormatter } from "@/utils/formatting";

import { useRepositoryLanguages } from "./useRepositoryLanguages";

export default function Repository({
	repository,
}: {
	repository: TGithubRepo;
}) {
	const { languages } = useRepositoryLanguages(repository);

	return (
		<Flex
			isColumn
			gap="10"
			className="border-border-default min-h-44 w-full justify-between rounded-md border-[1px] p-4 text-white"
			key={repository?.node_id}
		>
			<Flex isColumn gap="2">
				<Flex align="center" gap="2">
					<BookMarked width={20} height={20} />
					<a
						href={repository?.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent-default text-sm font-semibold hover:underline"
					>
						<Label.Mid400 className="leading-5" variant="primary">
							{repository?.name}
						</Label.Mid400>
					</a>
				</Flex>
				<Label.Thin200>{repository?.description}</Label.Thin200>
			</Flex>
			<Flex align="center" justify="between" gap="4" isWrapped>
				<Flex gap="2" align="center" isWrapped className="w-1/2">
					{Object.keys(languages ?? {}).map((language) => (
						<div className="flex items-center gap-1" key={language}>
							<div
								className="h-3 w-3 rounded-full"
								style={{
									background: uniqolor(
										languages?.[language] ?? 0,
									).color,
								}}
							/>
							<Label.Thin100>{language}</Label.Thin100>
						</div>
					))}
				</Flex>
				<Flex gap="2" align="center">
					<Flex gap="1" align="center">
						<Star width={18} height={18} color="#FFFFFF" />
						<Label.Mid300>
							{numberFormatter(repository?.stargazers_count, 1)}
						</Label.Mid300>
					</Flex>
					<Flex gap="1" align="center">
						<GitFork width={18} height={18} color="#FFFFFF" />
						<Label.Mid300>
							{numberFormatter(repository?.forks_count, 1)}
						</Label.Mid300>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
