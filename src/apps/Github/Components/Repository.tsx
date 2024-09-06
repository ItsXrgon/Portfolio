import uniqolor from "uniqolor";
import { TGithubRepo } from "../../../types";
import Icon from "../../../utils/Icon";
import { numberFormatter } from "../../../utils/formatting";
import { useRepositoryLanguages } from "./useRepositoryLanguages";
import Label from "../../../globalComponents/Label";
import Flex from "../../../globalComponents/Flex";
import { BookMarked, GitFork, Star } from "lucide-react";

export default function Repository({
	repository,
}: {
	repository: TGithubRepo;
}) {
	const { languages } = useRepositoryLanguages(repository);

	const getType = () => {
		if (!repository?.private && repository?.is_template) {
			return "Public template";
		} else if (repository?.private && repository?.is_template) {
			return "Private template";
		} else if (repository?.private) {
			return "Private";
		} else if (!repository?.private) {
			return "Public";
		} else if (repository?.fork) {
			return "Forked";
		}
	};

	return (
		<Flex
			isColumn
			gap="10"
			className="border-border-default min-h-44 w-full justify-between rounded-md border-[1px] p-4 text-white"
		>
			<Flex isColumn gap="1">
				<Flex align="center" gap="2">
					<BookMarked width={20} height={20} />
					<a
						href={repository?.html_url}
						target="_blank"
						rel="noopener noreferrer"
						className="text-accent-default text-sm font-semibold hover:underline"
						title={repository?.url}
					>
						<Label.Mid400 className="leading-5" variant="primary">
							{repository?.name}
						</Label.Mid400>
					</a>
					<span className="border-border-default text-muted-default rounded-full border-[1px] px-2 py-0.5 text-xs font-medium">
						{getType()}
					</span>
				</Flex>
				<p className="text-muted-default mt-2 text-xs leading-5">
					{repository?.description}
				</p>
			</Flex>
			<Flex
				align="center"
				justify="between"
				gap="4"
				className="flex-wrap"
			>
				<Flex gap="2" align="center" className="w-1/2 flex-wrap">
					{Object.keys(languages ?? {}).map((language) => (
						<div className="flex items-center gap-1">
							<div
								className="h-3 w-3 rounded-full"
								style={{
									background: uniqolor(languages?.[language])
										.color,
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
