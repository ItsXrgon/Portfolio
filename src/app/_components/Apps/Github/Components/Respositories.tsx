import { AnimatePresence } from "framer-motion";

import { Flex, Label } from "@/components";
import { TGithubRepo } from "@/lib/apis/types";
import { useRepositories } from "@/lib/apis/useRepositories";

import Repository from "./Repository";

export default function Respositories() {
	const { repos } = useRepositories();

	return (
		<Flex isColumn className="w-full h-full">
			<div className="flex items-center justify-between sticky top-0 z-30 bg-[#0f0026]/90 backdrop-blur border-b-2 border-[#0ff0fc] p-4">
				<Label
					size="xl"
					weight="Bold"
					className="text-[#0ff0fc] font-cyberpunk drop-shadow-cyberpunk"
				>
					Repositories
				</Label>
				<Label className="text-[#ff00cc]">
					{repos?.length ?? 0} total
				</Label>
			</div>
			<div className="flex-1 overflow-x-visible overflow-y-auto p-4 pt-6">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
					<AnimatePresence>
						{repos?.map((repo: TGithubRepo) => (
							<Repository repository={repo} key={repo?.node_id} />
						))}
					</AnimatePresence>
				</div>
			</div>
		</Flex>
	);
}
