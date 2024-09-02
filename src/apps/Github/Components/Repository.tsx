import uniqolor from "uniqolor";
import { TGithubRepo } from "../../../types";
import Icon from "../../../utils/Icon";
import { numberFormatter } from "../../../utils/formatting";
import { useRepositoryLanguages } from "./useRepositoryLanguages";

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
		<div>
			<div className="border-border-default dark:border-border-dark bg-canvas-default dark:bg-canvas-dark flex h-44 w-full flex-col justify-between rounded-md border-[1px] p-4">
				<div>
					<div className="flex items-center gap-2">
						<Icon icon="repo" width={20} height={20} />
						<a
							href={repository?.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-accent-default dark:text-accent-dark text-sm font-semibold hover:underline"
							title={repository?.url}
						>
							<p className="leading-5">{repository?.name}</p>
						</a>
						<span className="border-border-default dark:border-border-dark text-muted-default dark:text-muted-dark rounded-full border-[1px] px-2 py-0.5 text-xs font-medium">
							{getType()}
						</span>
					</div>
					<p className="text-muted-default dark:text-muted-dark mt-2 text-xs leading-5">
						{repository?.description}
					</p>
				</div>
				<p className="flex flex-wrap items-center justify-between">
					<div className="flex w-80 flex-wrap items-center gap-2">
						{Object.keys(languages ?? {}).map((language) => (
							<div className="flex items-center gap-1">
								<span
									className="h-3 w-3 rounded-full"
									style={{
										background: uniqolor(
											languages?.[language],
										).color,
									}}
								/>
								<span className="text-muted-default dark:text-muted-dark text-xs">
									{language}
								</span>
							</div>
						))}
					</div>
					<div className="flex items-center gap-2">
						<div className="flex items-center gap-1">
							<Icon icon="star" width={20} height={20} />
							<span className="text-muted-default dark:text-muted-dark text-xs leading-5">
								{numberFormatter(
									repository?.stargazers_count,
									1,
								)}
							</span>
						</div>
						<a
							href={repository?.forks_url}
							className="flex items-center gap-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Icon icon="fork" width={20} height={20} />
							<span className="text-muted-default dark:text-muted-dark text-xs leading-5">
								{numberFormatter(repository?.forks_count, 1)}
							</span>
						</a>
					</div>
				</p>
			</div>
		</div>
	);
}
