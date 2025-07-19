import { useQuery } from "@tanstack/react-query";

import { TGithubCommit } from "./types";

export function useCommits() {
	const {
		data: commits,
		isLoading: isCommitsLoading,
		isError: isCommitsError,
	} = useQuery({
		queryKey: ["commits_data"],
		queryFn: () =>
			fetch(
				"https://api.github.com/repos/itsXrgon/portfolio/commits",
			).then((res) => {
				return res.ok ? (res.json() as Promise<TGithubCommit[]>) : [];
			}),
	});

	return {
		commits,
		isCommitsLoading,
		isCommitsError,
	};
}
