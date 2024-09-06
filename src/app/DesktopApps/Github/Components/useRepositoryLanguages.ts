import { useQuery } from "@tanstack/react-query";

import { TGithubRepo, TGithubRepoLanguages } from "@/app/types";

export function useRepositoryLanguages(repository: TGithubRepo) {
	const {
		data: languages,
		isLoading: isLanguagesLoading,
		isError: isLanguagesError,
	} = useQuery({
		queryKey: ["repos_data", repository?.node_id],
		queryFn: () =>
			fetch(repository?.languages_url).then((res) => {
				return res.ok
					? (res.json() as Promise<TGithubRepoLanguages>)
					: hardCodedLanguages[repository.node_id];
			}),
	});

	return {
		languages: languages || hardCodedLanguages[repository.node_id],
		isLanguagesLoading,
		isLanguagesError,
	};
}

const hardCodedLanguages: Record<string, TGithubRepoLanguages> = {
	R_kgDOJaUFqg: {
		Dart: 47677,
		HTML: 3063,
	},
	R_kgDOK32naw: {
		TypeScript: 150773,
		CSS: 8102,
		JavaScript: 2623,
		HTML: 982,
	},
	R_kgDOJmkWgw: {
		Haskell: 14699,
	},
	R_kgDOJd8GMw: {},
	R_kgDOJzsuuw: {
		Java: 290423,
		CSS: 4254,
	},
	R_kgDOIVIeXw: {
		JavaScript: 56441,
		HTML: 186,
	},
	R_kgDOJUBqWw: {
		TypeScript: 16462,
		CSS: 8206,
		HTML: 797,
	},
	R_kgDOKdPsow: {
		JavaScript: 6476,
		HTML: 4134,
	},
	R_kgDOIsIEtg: {
		JavaScript: 6649,
	},
	R_kgDOHz6HiA: {
		Python: 90252,
	},
};
