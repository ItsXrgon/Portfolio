import { useQuery } from "@tanstack/react-query";

import { TGithubRepo } from "@/app/types";

export function useRepositories() {
	const {
		data: repos,
		isLoading: isReposLoading,
		isError: isReposError,
	} = useQuery({
		queryKey: ["repos_data"],
		queryFn: () =>
			fetch("https://api.github.com/users/itsXrgon/repos").then((res) => {
				return res.ok
					? (res.json() as Promise<TGithubRepo[]>)
					: hardCodedRepos;
			}),
	});

	return {
		repos,
		isReposLoading,
		isReposError,
	};
}

const hardCodedRepos: TGithubRepo[] = [
	{
		id: 631571882,
		node_id: "R_kgDOJaUFqg",
		name: "Check-Calculator",
		full_name: "ItsXrgon/Check-Calculator",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/Check-Calculator",
		description:
			"App to calculate how much each person is supposed to pay from the check given the items each person ordered, tip, VAT & service tax",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/Check-Calculator",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/Check-Calculator/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/Check-Calculator/deployments",
		created_at: "2023-04-23T12:57:22Z",
		updated_at: "2024-09-06T09:31:26Z",
		pushed_at: "2024-09-06T09:31:22Z",
		git_url: "git://github.com/ItsXrgon/Check-Calculator.git",
		ssh_url: "git@github.com:ItsXrgon/Check-Calculator.git",
		clone_url: "https://github.com/ItsXrgon/Check-Calculator.git",
		svn_url: "https://github.com/ItsXrgon/Check-Calculator",
		homepage: "https://check-calculator-da021.firebaseapp.com/#/",
		size: 382,
		stargazers_count: 0,
		watchers_count: 0,
		language: "Dart",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: ["dart", "flutter"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "master",
	},
	{
		id: 644421251,
		node_id: "R_kgDOJmkWgw",
		name: "Haskell-Chess-Game",
		full_name: "ItsXrgon/Haskell-Chess-Game",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/Haskell-Chess-Game",
		description: "Playable chess game made with Haskell",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/Haskell-Chess-Game/deployments",
		created_at: "2023-05-23T13:35:07Z",
		updated_at: "2023-06-30T20:02:43Z",
		pushed_at: "2023-06-06T12:45:47Z",
		git_url: "git://github.com/ItsXrgon/Haskell-Chess-Game.git",
		ssh_url: "git@github.com:ItsXrgon/Haskell-Chess-Game.git",
		clone_url: "https://github.com/ItsXrgon/Haskell-Chess-Game.git",
		svn_url: "https://github.com/ItsXrgon/Haskell-Chess-Game",
		homepage: "",
		size: 7,
		stargazers_count: 1,
		watchers_count: 1,
		language: "Haskell",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: ["haskell"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 1,
		default_branch: "master",
	},
	{
		id: 635373107,
		node_id: "R_kgDOJd8GMw",
		name: "ItsXrgon",
		full_name: "ItsXrgon/ItsXrgon",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/ItsXrgon",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/ItsXrgon",
		forks_url: "https://api.github.com/repos/ItsXrgon/ItsXrgon/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/ItsXrgon/ItsXrgon/teams",
		hooks_url: "https://api.github.com/repos/ItsXrgon/ItsXrgon/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/issues/events{/number}",
		events_url: "https://api.github.com/repos/ItsXrgon/ItsXrgon/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/ItsXrgon/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/compare/{base}...{head}",
		merges_url: "https://api.github.com/repos/ItsXrgon/ItsXrgon/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/ItsXrgon/deployments",
		created_at: "2023-05-02T14:55:23Z",
		updated_at: "2024-06-08T02:22:16Z",
		pushed_at: "2024-06-08T02:22:13Z",
		git_url: "git://github.com/ItsXrgon/ItsXrgon.git",
		ssh_url: "git@github.com:ItsXrgon/ItsXrgon.git",
		clone_url: "https://github.com/ItsXrgon/ItsXrgon.git",
		svn_url: "https://github.com/ItsXrgon/ItsXrgon",
		homepage: null,
		size: 11,
		stargazers_count: 0,
		watchers_count: 0,
		language: null,
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 658190011,
		node_id: "R_kgDOJzsuuw",
		name: "Last-Of-Us-Legacy",
		full_name: "ItsXrgon/Last-Of-Us-Legacy",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/Last-Of-Us-Legacy",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/Last-Of-Us-Legacy/deployments",
		created_at: "2023-06-25T03:42:27Z",
		updated_at: "2023-06-25T03:42:40Z",
		pushed_at: "2023-06-25T03:42:34Z",
		git_url: "git://github.com/ItsXrgon/Last-Of-Us-Legacy.git",
		ssh_url: "git@github.com:ItsXrgon/Last-Of-Us-Legacy.git",
		clone_url: "https://github.com/ItsXrgon/Last-Of-Us-Legacy.git",
		svn_url: "https://github.com/ItsXrgon/Last-Of-Us-Legacy",
		homepage: null,
		size: 329,
		stargazers_count: 0,
		watchers_count: 0,
		language: "Java",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 559029855,
		node_id: "R_kgDOIVIeXw",
		name: "multi-unit-converter",
		full_name: "ItsXrgon/multi-unit-converter",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/multi-unit-converter",
		description:
			"JavaScript library that converts multiple values and their units in a string to specified units or SI units if unspecified ",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/multi-unit-converter",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter/deployments",
		created_at: "2022-10-28T21:35:29Z",
		updated_at: "2023-04-13T00:23:27Z",
		pushed_at: "2024-03-18T00:00:44Z",
		git_url: "git://github.com/ItsXrgon/multi-unit-converter.git",
		ssh_url: "git@github.com:ItsXrgon/multi-unit-converter.git",
		clone_url: "https://github.com/ItsXrgon/multi-unit-converter.git",
		svn_url: "https://github.com/ItsXrgon/multi-unit-converter",
		homepage: "",
		size: 806,
		stargazers_count: 1,
		watchers_count: 1,
		language: "JavaScript",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: {
			key: "mit",
			name: "MIT License",
			spdx_id: "MIT",
			url: "https://api.github.com/licenses/mit",
			node_id: "MDc6TGljZW5zZTEz",
		},
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [
			"conversion",
			"javascript-library",
			"multiple-units-conversion",
			"npm-package",
		],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 1,
		default_branch: "master",
	},
	{
		id: 624978523,
		node_id: "R_kgDOJUBqWw",
		name: "multi-unit-converter-site",
		full_name: "ItsXrgon/multi-unit-converter-site",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/multi-unit-converter-site",
		description:
			"React website to showcase the multi-unit-converter JS library",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/multi-unit-converter-site",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/multi-unit-converter-site/deployments",
		created_at: "2023-04-07T18:37:49Z",
		updated_at: "2023-04-23T00:53:47Z",
		pushed_at: "2024-01-27T12:29:04Z",
		git_url: "git://github.com/ItsXrgon/multi-unit-converter-site.git",
		ssh_url: "git@github.com:ItsXrgon/multi-unit-converter-site.git",
		clone_url: "https://github.com/ItsXrgon/multi-unit-converter-site.git",
		svn_url: "https://github.com/ItsXrgon/multi-unit-converter-site",
		homepage: "https://multiconverter.live/",
		size: 567,
		stargazers_count: 0,
		watchers_count: 0,
		language: "TypeScript",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: true,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: ["react", "unit-conversion"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "master",
	},
	{
		id: 729655147,
		node_id: "R_kgDOK32naw",
		name: "Portfolio",
		full_name: "ItsXrgon/Portfolio",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/Portfolio",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/Portfolio",
		forks_url: "https://api.github.com/repos/ItsXrgon/Portfolio/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/ItsXrgon/Portfolio/teams",
		hooks_url: "https://api.github.com/repos/ItsXrgon/Portfolio/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/issues/events{/number}",
		events_url: "https://api.github.com/repos/ItsXrgon/Portfolio/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/Portfolio/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/compare/{base}...{head}",
		merges_url: "https://api.github.com/repos/ItsXrgon/Portfolio/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/Portfolio/deployments",
		created_at: "2023-12-09T23:04:39Z",
		updated_at: "2024-09-06T10:32:09Z",
		pushed_at: "2024-09-06T10:32:05Z",
		git_url: "git://github.com/ItsXrgon/Portfolio.git",
		ssh_url: "git@github.com:ItsXrgon/Portfolio.git",
		clone_url: "https://github.com/ItsXrgon/Portfolio.git",
		svn_url: "https://github.com/ItsXrgon/Portfolio",
		homepage: "https://itsxrgon.vercel.app",
		size: 664,
		stargazers_count: 0,
		watchers_count: 0,
		language: "TypeScript",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 701754531,
		node_id: "R_kgDOKdPsow",
		name: "UniScripts",
		full_name: "ItsXrgon/UniScripts",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/UniScripts",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/UniScripts",
		forks_url: "https://api.github.com/repos/ItsXrgon/UniScripts/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/ItsXrgon/UniScripts/teams",
		hooks_url: "https://api.github.com/repos/ItsXrgon/UniScripts/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/issues/events{/number}",
		events_url: "https://api.github.com/repos/ItsXrgon/UniScripts/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/UniScripts/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/compare/{base}...{head}",
		merges_url: "https://api.github.com/repos/ItsXrgon/UniScripts/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/UniScripts/deployments",
		created_at: "2023-10-07T13:11:49Z",
		updated_at: "2023-10-07T13:12:31Z",
		pushed_at: "2023-10-07T13:12:28Z",
		git_url: "git://github.com/ItsXrgon/UniScripts.git",
		ssh_url: "git@github.com:ItsXrgon/UniScripts.git",
		clone_url: "https://github.com/ItsXrgon/UniScripts.git",
		svn_url: "https://github.com/ItsXrgon/UniScripts",
		homepage: null,
		size: 5,
		stargazers_count: 0,
		watchers_count: 0,
		language: "JavaScript",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: [],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 583140534,
		node_id: "R_kgDOIsIEtg",
		name: "UserPurge",
		full_name: "ItsXrgon/UserPurge",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/UserPurge",
		description: "Discord Bot to purge all messages of a user in a server",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/UserPurge",
		forks_url: "https://api.github.com/repos/ItsXrgon/UserPurge/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/ItsXrgon/UserPurge/teams",
		hooks_url: "https://api.github.com/repos/ItsXrgon/UserPurge/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/issues/events{/number}",
		events_url: "https://api.github.com/repos/ItsXrgon/UserPurge/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/UserPurge/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/compare/{base}...{head}",
		merges_url: "https://api.github.com/repos/ItsXrgon/UserPurge/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/UserPurge/deployments",
		created_at: "2022-12-28T22:18:55Z",
		updated_at: "2023-05-03T02:52:52Z",
		pushed_at: "2023-04-18T06:25:14Z",
		git_url: "git://github.com/ItsXrgon/UserPurge.git",
		ssh_url: "git@github.com:ItsXrgon/UserPurge.git",
		clone_url: "https://github.com/ItsXrgon/UserPurge.git",
		svn_url: "https://github.com/ItsXrgon/UserPurge",
		homepage: "",
		size: 2447,
		stargazers_count: 0,
		watchers_count: 0,
		language: "JavaScript",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: ["bot", "discord-bot", "discord-js"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "master",
	},
	{
		id: 524191624,
		node_id: "R_kgDOHz6HiA",
		name: "XrBot-DiscordBot",
		full_name: "ItsXrgon/XrBot-DiscordBot",
		private: false,
		owner: {
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
			starred_url:
				"https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}",
			subscriptions_url:
				"https://api.github.com/users/ItsXrgon/subscriptions",
			organizations_url: "https://api.github.com/users/ItsXrgon/orgs",
			repos_url: "https://api.github.com/users/ItsXrgon/repos",
			events_url:
				"https://api.github.com/users/ItsXrgon/events{/privacy}",
			received_events_url:
				"https://api.github.com/users/ItsXrgon/received_events",
			type: "User",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/XrBot-DiscordBot",
		description: "Discord bot with mini games and random commands",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/XrBot-DiscordBot/deployments",
		created_at: "2022-08-12T18:42:59Z",
		updated_at: "2024-04-14T12:21:44Z",
		pushed_at: "2024-04-14T12:21:20Z",
		git_url: "git://github.com/ItsXrgon/XrBot-DiscordBot.git",
		ssh_url: "git@github.com:ItsXrgon/XrBot-DiscordBot.git",
		clone_url: "https://github.com/ItsXrgon/XrBot-DiscordBot.git",
		svn_url: "https://github.com/ItsXrgon/XrBot-DiscordBot",
		homepage: "",
		size: 7222,
		stargazers_count: 0,
		watchers_count: 0,
		language: "Python",
		has_issues: true,
		has_projects: true,
		has_downloads: true,
		has_wiki: true,
		has_pages: false,
		has_discussions: false,
		forks_count: 0,
		mirror_url: null,
		archived: false,
		disabled: false,
		open_issues_count: 0,
		license: null,
		allow_forking: true,
		is_template: false,
		web_commit_signoff_required: false,
		topics: ["bot", "discord-bot", "discord-py"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
];
