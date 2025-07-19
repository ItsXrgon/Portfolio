import { useQuery } from "@tanstack/react-query";

import { TGithubProfile } from "./types";

export function useProfile() {
	const {
		data: profile,
		isLoading: isProfileLoading,
		isError: isProfileError,
	} = useQuery({
		queryKey: ["profile_data"],
		queryFn: () =>
			fetch("https://api.github.com/users/itsXrgon").then((res) => {
				return res.ok
					? (res.json() as Promise<TGithubProfile>)
					: hardCodedProfile;
			}),
	});

	return {
		profile: profile || hardCodedProfile,
		isProfileLoading,
		isProfileError,
	};
}

const hardCodedProfile: TGithubProfile = {
	login: "ItsXrgon",
	id: 111145482,
	node_id: "U_kgDOBp_yCg",
	avatar_url: "https://avatars.githubusercontent.com/u/111145482?v=4",
	gravatar_id: "",
	url: "https://api.github.com/users/ItsXrgon",
	html_url: "https://github.com/ItsXrgon",
	followers_url: "https://api.github.com/users/ItsXrgon/followers",
	following_url:
		"https://api.github.com/users/ItsXrgon/following{/other_user}",
	gists_url: "https://api.github.com/users/ItsXrgon/gists{/gist_id}",
	starred_url: "https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
	subscriptions_url: "https://api.github.com/users/ItsXrgon/subscriptions",
	organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
	repos_url: "https://api.github.com/users/ItsXrgon/repos",
	events_url: "https://api.github.com/users/ItsXrgon/events{/privacy}",
	received_events_url:
		"https://api.github.com/users/ItsXrgon/received_events",
	type: "User",
	user_view_type: "public",
	site_admin: false,
	name: "Ali Koheil",
	company: "",
	blog: "https://xrgon.com",
	location: "Egypt",
	email: "",
	hireable: false,
	bio: "Whatever",
	twitter_username: "",
	public_repos: 19,
	public_gists: 0,
	followers: 22,
	following: 29,
	created_at: "2022-08-12T17:34:41Z",
	updated_at: "2025-07-11T12:37:52Z",
};
