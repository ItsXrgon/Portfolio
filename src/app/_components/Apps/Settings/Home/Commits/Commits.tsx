import { Flex } from "@/components";
import { useCommits } from "@/lib/apis/useCommits";

import Commit from "./Commit";
import CommitsEmpty from "./CommitsEmpty";
import CommitsError from "./CommitsError";
import CommitsLoading from "./CommitsLoading";

export default function Commits() {
	const { commits, isCommitsLoading, isCommitsError } = useCommits();

	if (isCommitsLoading) {
		return <CommitsLoading />;
	}

	if (isCommitsError) {
		return <CommitsError />;
	}

	if (!commits) {
		return <CommitsEmpty />;
	}

	return (
		<Flex isColumn gap="2" className="h-[500px] overflow-y-auto p-2">
			{commits?.map((commit) => (
				<Commit commit={commit} key={commit?.sha} />
			))}
		</Flex>
	);
}
