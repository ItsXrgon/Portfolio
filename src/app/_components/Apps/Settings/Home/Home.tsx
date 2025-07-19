import { Pin } from "lucide-react";

import { Flex, Label } from "@/components";

import Commits from "./Commits/Commits";

export default function Home() {
	return (
		<Flex isColumn gap="4" className="w-full">
			<div className="rounded-xl bg-yellow-100 border-2 border-dashed border-yellow-300 shadow-lg p-6 w-full relative">
				<div className="absolute -top-4 left-4 z-10 rotate-12">
					<Pin
						size={32}
						className="text-red-400 drop-shadow-md"
						fill="#f87171"
					/>
				</div>
				<Label
					size="xl"
					weight="Bold"
					className=" text-blue-900 mb-2 block"
				>
					Any issues or suggestions?
				</Label>
				<Label className="text-blue-900">
					Open an issue on the{" "}
					<a
						href="https://github.com/ItsXrgon/Portfolio/issues"
						target="_blank"
						className="text-blue-500 underline"
					>
						Github Repository
					</a>
				</Label>
				<div className="mt-4 flex gap-2">
					<a
						href="mailto:your@email.com?subject=Portfolio%20Feedback"
						className="rounded-lg bg-blue-200 px-4 py-2 font-bold text-blue-900 shadow hover:bg-blue-300 transition-colors border-2 border-blue-300 border-dashed "
					>
						Send Feedback
					</a>
				</div>
			</div>
			<div className="rounded-xl bg-yellow-100 border-2 border-dashed border-yellow-300 shadow-lg p-6 w-full">
				<Label
					size="xl"
					weight="Bold"
					className=" text-blue-900 mb-4 block"
				>
					Recent Commits
				</Label>
				<Commits />
			</div>
		</Flex>
	);
}
