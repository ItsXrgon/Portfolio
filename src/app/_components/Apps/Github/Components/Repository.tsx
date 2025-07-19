import { motion } from "framer-motion";
import { BookMarked, GitFork, Star } from "lucide-react";

import { Flex, Label } from "@/components";
import { TGithubRepo } from "@/lib/apis/types";

import RespositoryLanguages from "./RespositoryLanguages";

export default function Repository({
	repository,
}: {
	repository: TGithubRepo;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 24, scale: 0.95 }}
			animate={{ opacity: 1, y: 0, scale: 1 }}
			exit={{ opacity: 0, y: 24, scale: 0.95 }}
			transition={{
				duration: 0.1,
				ease: "easeOut",
			}}
			whileHover={{
				boxShadow: "0 0 32px 4px #ff00cc99, 0 0 16px 2px #0ff0fc99",
				scale: 1.03,
				zIndex: 20,
			}}
			style={{
				willChange: "transform, box-shadow",
				overflow: "visible",
			}}
			className="min-h-44 w-full flex flex-col justify-between rounded-2xl border-2 border-[#0ff0fc] bg-[#0f0026]/70 backdrop-blur-md shadow-[0_0_24px_2px_#0ff0fc33] p-5 text-[#f8f8ff] font-cyberpunk transition-all duration-300 hover:shadow-[0_0_32px_8px_#ff00cc99] hover:border-[#ff00cc] will-change-[box-shadow,border-color] gap-4"
			key={repository?.node_id}
		>
			<Flex align="center" justify="between" gap="2" isWrapped>
				<Flex align="center" gap="2">
					<BookMarked
						width={22}
						height={22}
						className="text-[#0ff0fc] drop-shadow-cyberpunk"
					/>
					{repository?.html_url && (
						<a
							href={repository.html_url}
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#0ff0fc] text-lg font-bold font-cyberpunk hover:underline drop-shadow-cyberpunk"
						>
							{repository?.name}
						</a>
					)}
				</Flex>
				<Flex align="center" gap="4">
					<Flex align="center" gap="1">
						<Star width={18} height={18} color="#0ff0fc" />
						<span className="text-[#0ff0fc] font-cyberpunk text-sm">
							{repository?.stargazers_count}
						</span>
					</Flex>
					<Flex align="center" gap="1">
						<GitFork width={18} height={18} color="#ff00cc" />
						<Label
							size="sm"
							className="text-[#ff00cc] font-cyberpunk"
						>
							{repository?.forks_count}
						</Label>
					</Flex>
				</Flex>
			</Flex>
			{repository?.description && (
				<p className="text-[#f8f8ffcc] text-sm mb-2 line-clamp-2 font-cyberpunk drop-shadow-cyberpunk">
					{repository.description}
				</p>
			)}
			<RespositoryLanguages repo={repository} />
		</motion.div>
	);
}
