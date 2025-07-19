import { useQuery } from "@tanstack/react-query";

import { TGithubRepo } from "./types";

export function useRepositories() {
	const {
		data: repos,
		isLoading: isReposLoading,
		isError: isReposError,
	} = useQuery({
		queryKey: ["repos_data"],
		queryFn: () =>
			fetch("https://api.github.com/users/itsXrgon/repos").then((res) => {
				return res.ok && res.status === 200
					? (res.json() as Promise<TGithubRepo[]>)
					: hardCodedRepos;
			}),
	});

	return {
		repos: repos || hardCodedRepos,
		isReposLoading,
		isReposError,
	};
}

const hardCodedRepos: TGithubRepo[] = [
	{
		id: 875327528,
		node_id: "R_kgDONCxwKA",
		name: "2D-Infinite-Runner",
		full_name: "ItsXrgon/2D-Infinite-Runner",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/2D-Infinite-Runner",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/2D-Infinite-Runner/deployments",
		created_at: "2024-10-19T17:23:14Z",
		updated_at: "2024-10-20T23:27:30Z",
		pushed_at: "2024-10-20T23:26:14Z",
		git_url: "git://github.com/ItsXrgon/2D-Infinite-Runner.git",
		ssh_url: "git@github.com:ItsXrgon/2D-Infinite-Runner.git",
		clone_url: "https://github.com/ItsXrgon/2D-Infinite-Runner.git",
		svn_url: "https://github.com/ItsXrgon/2D-Infinite-Runner",
		homepage: null,
		size: 6081,
		stargazers_count: 0,
		watchers_count: 0,
		language: "C++",
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
		id: 890078196,
		node_id: "R_kgDONQ2D9A",
		name: "3D-Olympic-Sport",
		full_name: "ItsXrgon/3D-Olympic-Sport",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/3D-Olympic-Sport",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/3D-Olympic-Sport/deployments",
		created_at: "2024-11-18T00:00:45Z",
		updated_at: "2024-11-18T00:03:37Z",
		pushed_at: "2024-11-18T00:03:34Z",
		git_url: "git://github.com/ItsXrgon/3D-Olympic-Sport.git",
		ssh_url: "git@github.com:ItsXrgon/3D-Olympic-Sport.git",
		clone_url: "https://github.com/ItsXrgon/3D-Olympic-Sport.git",
		svn_url: "https://github.com/ItsXrgon/3D-Olympic-Sport",
		homepage: null,
		size: 5522,
		stargazers_count: 0,
		watchers_count: 0,
		language: "C++",
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
		id: 898225357,
		node_id: "R_kgDONYnUzQ",
		name: "advent-of-code",
		full_name: "ItsXrgon/advent-of-code",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/advent-of-code",
		description: "Advent of code solutions in Python",
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/advent-of-code",
		forks_url: "https://api.github.com/repos/ItsXrgon/advent-of-code/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/ItsXrgon/advent-of-code/teams",
		hooks_url: "https://api.github.com/repos/ItsXrgon/advent-of-code/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/advent-of-code/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/advent-of-code/deployments",
		created_at: "2024-12-04T02:33:45Z",
		updated_at: "2024-12-26T00:36:18Z",
		pushed_at: "2024-12-26T00:32:20Z",
		git_url: "git://github.com/ItsXrgon/advent-of-code.git",
		ssh_url: "git@github.com:ItsXrgon/advent-of-code.git",
		clone_url: "https://github.com/ItsXrgon/advent-of-code.git",
		svn_url: "https://github.com/ItsXrgon/advent-of-code",
		homepage: "https://adventofcode.com/",
		size: 25,
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
		topics: ["advent-of-code", "advent-of-code-2024"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 935712967,
		node_id: "R_kgDON8XYxw",
		name: "AutomataSimulator",
		full_name: "ItsXrgon/AutomataSimulator",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/AutomataSimulator",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/AutomataSimulator",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulator/deployments",
		created_at: "2025-02-19T22:30:29Z",
		updated_at: "2025-06-13T18:31:03Z",
		pushed_at: "2025-06-13T18:30:59Z",
		git_url: "git://github.com/ItsXrgon/AutomataSimulator.git",
		ssh_url: "git@github.com:ItsXrgon/AutomataSimulator.git",
		clone_url: "https://github.com/ItsXrgon/AutomataSimulator.git",
		svn_url: "https://github.com/ItsXrgon/AutomataSimulator",
		homepage: null,
		size: 346,
		stargazers_count: 0,
		watchers_count: 0,
		language: "C++",
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
		topics: [],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 1001563146,
		node_id: "R_kgDOO7KkCg",
		name: "AutomataSimulatorVR",
		full_name: "ItsXrgon/AutomataSimulatorVR",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/AutomataSimulatorVR",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/AutomataSimulatorVR/deployments",
		created_at: "2025-06-13T15:41:42Z",
		updated_at: "2025-06-13T18:24:53Z",
		pushed_at: "2025-06-13T18:24:50Z",
		git_url: "git://github.com/ItsXrgon/AutomataSimulatorVR.git",
		ssh_url: "git@github.com:ItsXrgon/AutomataSimulatorVR.git",
		clone_url: "https://github.com/ItsXrgon/AutomataSimulatorVR.git",
		svn_url: "https://github.com/ItsXrgon/AutomataSimulatorVR",
		homepage: null,
		size: 81836,
		stargazers_count: 0,
		watchers_count: 0,
		language: "C#",
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
		id: 791769280,
		node_id: "R_kgDOLzFwwA",
		name: "c-computer-processor",
		full_name: "ItsXrgon/c-computer-processor",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/c-computer-processor",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/c-computer-processor",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/c-computer-processor/deployments",
		created_at: "2024-04-25T10:34:09Z",
		updated_at: "2024-09-20T10:18:45Z",
		pushed_at: "2024-05-17T20:10:10Z",
		git_url: "git://github.com/ItsXrgon/c-computer-processor.git",
		ssh_url: "git@github.com:ItsXrgon/c-computer-processor.git",
		clone_url: "https://github.com/ItsXrgon/c-computer-processor.git",
		svn_url: "https://github.com/ItsXrgon/c-computer-processor",
		homepage: null,
		size: 111,
		stargazers_count: 0,
		watchers_count: 0,
		language: "C",
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
			user_view_type: "public",
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
		updated_at: "2025-04-22T03:51:56Z",
		pushed_at: "2024-09-06T09:31:22Z",
		git_url: "git://github.com/ItsXrgon/Check-Calculator.git",
		ssh_url: "git@github.com:ItsXrgon/Check-Calculator.git",
		clone_url: "https://github.com/ItsXrgon/Check-Calculator.git",
		svn_url: "https://github.com/ItsXrgon/Check-Calculator",
		homepage: "https://check-calculator-da021.firebaseapp.com/#/",
		size: 382,
		stargazers_count: 1,
		watchers_count: 1,
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
		watchers: 1,
		default_branch: "master",
	},
	{
		id: 982279380,
		node_id: "R_kgDOOoxk1A",
		name: "eslint-seatbelt",
		full_name: "ItsXrgon/eslint-seatbelt",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/eslint-seatbelt",
		description: "Gradually tighten ESLint rules in your codebase",
		fork: true,
		url: "https://api.github.com/repos/ItsXrgon/eslint-seatbelt",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/eslint-seatbelt/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/eslint-seatbelt/deployments",
		created_at: "2025-05-12T16:32:59Z",
		updated_at: "2025-05-13T23:37:05Z",
		pushed_at: "2025-05-14T10:44:48Z",
		git_url: "git://github.com/ItsXrgon/eslint-seatbelt.git",
		ssh_url: "git@github.com:ItsXrgon/eslint-seatbelt.git",
		clone_url: "https://github.com/ItsXrgon/eslint-seatbelt.git",
		svn_url: "https://github.com/ItsXrgon/eslint-seatbelt",
		homepage: null,
		size: 1481,
		stargazers_count: 0,
		watchers_count: 0,
		language: "TypeScript",
		has_issues: false,
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
		topics: [],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
	},
	{
		id: 918204566,
		node_id: "R_kgDONrqwlg",
		name: "guc-empty-room-finder",
		full_name: "ItsXrgon/guc-empty-room-finder",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/guc-empty-room-finder",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/guc-empty-room-finder",
		forks_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/forks",
		keys_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/collaborators{/collaborator}",
		teams_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/teams",
		hooks_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/issues/events{/number}",
		events_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/branches{/branch}",
		tags_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/tags",
		blobs_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/git/refs{/sha}",
		trees_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/statuses/{sha}",
		languages_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/languages",
		stargazers_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/subscription",
		commits_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/compare/{base}...{head}",
		merges_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/{archive_format}{/ref}",
		downloads_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/issues{/number}",
		pulls_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/notifications{?since,all,participating}",
		labels_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/guc-empty-room-finder/deployments",
		created_at: "2025-01-17T13:07:31Z",
		updated_at: "2025-03-19T01:18:34Z",
		pushed_at: "2025-06-26T01:18:52Z",
		git_url: "git://github.com/ItsXrgon/guc-empty-room-finder.git",
		ssh_url: "git@github.com:ItsXrgon/guc-empty-room-finder.git",
		clone_url: "https://github.com/ItsXrgon/guc-empty-room-finder.git",
		svn_url: "https://github.com/ItsXrgon/guc-empty-room-finder",
		homepage: "https://gucroomfinder.xrgon.com/",
		size: 780,
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
		topics: ["nextjs", "prisma", "trpc", "webscraping"],
		visibility: "public",
		forks: 0,
		open_issues: 0,
		watchers: 0,
		default_branch: "main",
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
			user_view_type: "public",
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
			user_view_type: "public",
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
		updated_at: "2025-06-13T18:28:23Z",
		pushed_at: "2025-06-13T18:28:20Z",
		git_url: "git://github.com/ItsXrgon/ItsXrgon.git",
		ssh_url: "git@github.com:ItsXrgon/ItsXrgon.git",
		clone_url: "https://github.com/ItsXrgon/ItsXrgon.git",
		svn_url: "https://github.com/ItsXrgon/ItsXrgon",
		homepage: null,
		size: 17,
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
			user_view_type: "public",
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
			user_view_type: "public",
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
		updated_at: "2025-03-03T03:17:06Z",
		pushed_at: "2025-03-03T03:17:02Z",
		git_url: "git://github.com/ItsXrgon/multi-unit-converter.git",
		ssh_url: "git@github.com:ItsXrgon/multi-unit-converter.git",
		clone_url: "https://github.com/ItsXrgon/multi-unit-converter.git",
		svn_url: "https://github.com/ItsXrgon/multi-unit-converter",
		homepage: "",
		size: 262,
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
		default_branch: "main",
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
			user_view_type: "public",
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
		updated_at: "2024-09-07T17:26:34Z",
		pushed_at: "2024-09-07T17:26:31Z",
		git_url: "git://github.com/ItsXrgon/multi-unit-converter-site.git",
		ssh_url: "git@github.com:ItsXrgon/multi-unit-converter-site.git",
		clone_url: "https://github.com/ItsXrgon/multi-unit-converter-site.git",
		svn_url: "https://github.com/ItsXrgon/multi-unit-converter-site",
		homepage: "https://multi-unit-converter.vercel.app/",
		size: 723,
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
		id: 796395453,
		node_id: "R_kgDOL3gHvQ",
		name: "os_c",
		full_name: "ItsXrgon/os_c",
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
			user_view_type: "public",
			site_admin: false,
		},
		html_url: "https://github.com/ItsXrgon/os_c",
		description: null,
		fork: false,
		url: "https://api.github.com/repos/ItsXrgon/os_c",
		forks_url: "https://api.github.com/repos/ItsXrgon/os_c/forks",
		keys_url: "https://api.github.com/repos/ItsXrgon/os_c/keys{/key_id}",
		collaborators_url:
			"https://api.github.com/repos/ItsXrgon/os_c/collaborators{/collaborator}",
		teams_url: "https://api.github.com/repos/ItsXrgon/os_c/teams",
		hooks_url: "https://api.github.com/repos/ItsXrgon/os_c/hooks",
		issue_events_url:
			"https://api.github.com/repos/ItsXrgon/os_c/issues/events{/number}",
		events_url: "https://api.github.com/repos/ItsXrgon/os_c/events",
		assignees_url:
			"https://api.github.com/repos/ItsXrgon/os_c/assignees{/user}",
		branches_url:
			"https://api.github.com/repos/ItsXrgon/os_c/branches{/branch}",
		tags_url: "https://api.github.com/repos/ItsXrgon/os_c/tags",
		blobs_url: "https://api.github.com/repos/ItsXrgon/os_c/git/blobs{/sha}",
		git_tags_url:
			"https://api.github.com/repos/ItsXrgon/os_c/git/tags{/sha}",
		git_refs_url:
			"https://api.github.com/repos/ItsXrgon/os_c/git/refs{/sha}",
		trees_url: "https://api.github.com/repos/ItsXrgon/os_c/git/trees{/sha}",
		statuses_url:
			"https://api.github.com/repos/ItsXrgon/os_c/statuses/{sha}",
		languages_url: "https://api.github.com/repos/ItsXrgon/os_c/languages",
		stargazers_url: "https://api.github.com/repos/ItsXrgon/os_c/stargazers",
		contributors_url:
			"https://api.github.com/repos/ItsXrgon/os_c/contributors",
		subscribers_url:
			"https://api.github.com/repos/ItsXrgon/os_c/subscribers",
		subscription_url:
			"https://api.github.com/repos/ItsXrgon/os_c/subscription",
		commits_url: "https://api.github.com/repos/ItsXrgon/os_c/commits{/sha}",
		git_commits_url:
			"https://api.github.com/repos/ItsXrgon/os_c/git/commits{/sha}",
		comments_url:
			"https://api.github.com/repos/ItsXrgon/os_c/comments{/number}",
		issue_comment_url:
			"https://api.github.com/repos/ItsXrgon/os_c/issues/comments{/number}",
		contents_url:
			"https://api.github.com/repos/ItsXrgon/os_c/contents/{+path}",
		compare_url:
			"https://api.github.com/repos/ItsXrgon/os_c/compare/{base}...{head}",
		merges_url: "https://api.github.com/repos/ItsXrgon/os_c/merges",
		archive_url:
			"https://api.github.com/repos/ItsXrgon/os_c/{archive_format}{/ref}",
		downloads_url: "https://api.github.com/repos/ItsXrgon/os_c/downloads",
		issues_url:
			"https://api.github.com/repos/ItsXrgon/os_c/issues{/number}",
		pulls_url: "https://api.github.com/repos/ItsXrgon/os_c/pulls{/number}",
		milestones_url:
			"https://api.github.com/repos/ItsXrgon/os_c/milestones{/number}",
		notifications_url:
			"https://api.github.com/repos/ItsXrgon/os_c/notifications{?since,all,participating}",
		labels_url: "https://api.github.com/repos/ItsXrgon/os_c/labels{/name}",
		releases_url:
			"https://api.github.com/repos/ItsXrgon/os_c/releases{/id}",
		deployments_url:
			"https://api.github.com/repos/ItsXrgon/os_c/deployments",
		created_at: "2024-05-05T20:05:13Z",
		updated_at: "2024-10-20T23:28:54Z",
		pushed_at: "2024-05-21T20:37:57Z",
		git_url: "git://github.com/ItsXrgon/os_c.git",
		ssh_url: "git@github.com:ItsXrgon/os_c.git",
		clone_url: "https://github.com/ItsXrgon/os_c.git",
		svn_url: "https://github.com/ItsXrgon/os_c",
		homepage: null,
		size: 474,
		stargazers_count: 0,
		watchers_count: 0,
		language: "C",
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
			user_view_type: "public",
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
		updated_at: "2025-07-14T16:56:04Z",
		pushed_at: "2025-07-14T16:55:59Z",
		git_url: "git://github.com/ItsXrgon/Portfolio.git",
		ssh_url: "git@github.com:ItsXrgon/Portfolio.git",
		clone_url: "https://github.com/ItsXrgon/Portfolio.git",
		svn_url: "https://github.com/ItsXrgon/Portfolio",
		homepage: "https://xrgon.com",
		size: 3563,
		stargazers_count: 2,
		watchers_count: 2,
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
		watchers: 2,
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
			user_view_type: "public",
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
			user_view_type: "public",
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
			user_view_type: "public",
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
