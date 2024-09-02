import { useQuery } from 'react-query';
import { TGithubError, TGithubProfile } from '../../../types';

export function useProfile() {
	const {
		data,
		isLoading: isProfileLoading,
		error: isProfileError,
	} = useQuery('profile_data', () =>
		fetch('https://api.github.com/users/itsXrgon').then(
			(res) => res.json() as Promise<TGithubProfile | TGithubError>
		)
	);

	const profile =
		isProfileError || isProfileLoading || !data ? hardCodedProfile : data;

	return {
		profile,
		isProfileLoading,
		isProfileError,
	};
}

const hardCodedProfile: TGithubProfile = {
	login: 'ItsXrgon',
	id: 111145482,
	node_id: 'U_kgDOBp_yCg',
	avatar_url: 'https://avatars.githubusercontent.com/u/111145482?v=4',
	gravatar_id: '',
	url: 'https://api.github.com/users/ItsXrgon',
	html_url: 'https://github.com/ItsXrgon',
	followers_url: 'https://api.github.com/users/ItsXrgon/followers',
	following_url: 'https://api.github.com/users/ItsXrgon/following{/other_user}',
	gists_url: 'https://api.github.com/users/ItsXrgon/gists{/gist_id}',
	starred_url: 'https://api.github.com/users/ItsXrgon/starred{/owner}{/repo}',
	subscriptions_url: 'https://api.github.com/users/ItsXrgon/subscriptions',
	organizations_url: 'https://api.github.com/users/ItsXrgon/orgs',
	repos_url: 'https://api.github.com/users/ItsXrgon/repos',
	events_url: 'https://api.github.com/users/ItsXrgon/events{/privacy}',
	received_events_url: 'https://api.github.com/users/ItsXrgon/received_events',
	type: 'User',
	site_admin: false,
	name: '',
	company: '',
	blog: '',
	location: 'Egypt',
	email: '',
	hireable: false,
	bio: 'Whatever',
	twitter_username: '',
	public_repos: 9,
	public_gists: 0,
	followers: 19,
	following: 25,
	created_at: '2022-08-12T17:34:41Z',
	updated_at: '2024-08-11T12:28:41Z',
};
