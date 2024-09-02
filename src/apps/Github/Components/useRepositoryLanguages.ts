import { useQuery } from "react-query";
import { TGithubRepo, TGithubRepoLanguages } from "../../../types";

export function useRepositoryLanguages(repository: TGithubRepo) {
	const {
		data,
		isLoading: isLanguagesLoading,
		error: isLanguagesError,
	} = useQuery(`repos_languages_${repository?.node_id}`, () =>
		fetch(repository?.languages_url).then(
			(res) => res.json() as Promise<TGithubRepoLanguages>,
		),
	);

	const languages =
		isLanguagesError || isLanguagesLoading || !data
			? hardCodedLanguages[repository.node_id]
			: data;

	return {
		languages,
		isLanguagesLoading,
		isLanguagesError,
	};
}

const hardCodedLanguages: Record<string, TGithubRepoLanguages> = {
	R_kgDOJaUFqg: {
		Dart: 47677,
		CMake: 8752,
		"C++": 4069,
		HTML: 3063,
		Swift: 1158,
		C: 691,
		Kotlin: 254,
		"Objective-C": 38,
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
