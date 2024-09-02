import { TGithubRepo } from "../../types";
import Repository from "./Components/Repository";
import { useProfile } from "./Components/useProfile";
import { useRepositories } from "./Components/useRepositories";

export default function Github() {
	const { profile } = useProfile();

	const { repos } = useRepositories();

	return (
		<div className="flex w-full flex-col overflow-y-scroll bg-white">
			{repos?.map((repo: TGithubRepo) => (
				<Repository repository={repo} key={repo?.node_id} />
			))}
		</div>
	);
}
