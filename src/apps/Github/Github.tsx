import { TGithubRepo } from "../../types";
import Repository from "./Components/Repository";
import { useProfile } from "./Components/useProfile";
import { useRepositories } from "./Components/useRepositories";

export default function Github() {
	const { profile } = useProfile();

	const { repos } = useRepositories();

	return (
		<div className="flex overflow-y-scroll bg-white">
			<div className="flex w-72 flex-col overflow-y-scroll">
				<img
					src={profile?.avatar_url}
					alt="avatar"
					className="h-20 w-20 rounded-full"
				/>
			</div>
			<div className="flex flex-col overflow-y-scroll">
				{repos?.map((repo: TGithubRepo) => (
					<Repository repository={repo} key={repo?.node_id} />
				))}
			</div>
		</div>
	);
}
