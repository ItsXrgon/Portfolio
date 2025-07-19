import { motion } from "framer-motion";
import uniqolor from "uniqolor";

import { Flex, Label } from "@/components";
import { TGithubRepo } from "@/lib/apis/types";
import { useRepositoryLanguages } from "@/lib/apis/useRepositoryLanguages";

export default function RespositoryLanguages({ repo }: { repo: TGithubRepo }) {
	const { languages } = useRepositoryLanguages(repo);

	return (
		<Flex gap="2" align="center" isWrapped>
			{Object.keys(languages ?? {}).map((language, i) => (
				<motion.div
					className="flex items-center gap-1"
					key={language}
					initial={{ opacity: 0, y: 8 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: i * 0.05 }}
					whileHover={{
						scale: 1.1,
						filter: "drop-shadow(0 0 6px #0ff0fc)",
					}}
				>
					<div
						className="h-3 w-3 rounded-full"
						style={{
							background: uniqolor(languages?.[language] ?? 0)
								.color,
							boxShadow: "0 0 8px 2px #0ff0fc99",
						}}
					/>
					<Label className="text-[#0ff0fc] drop-shadow-cyberpunk">
						{language}
					</Label>
				</motion.div>
			))}
		</Flex>
	);
}
