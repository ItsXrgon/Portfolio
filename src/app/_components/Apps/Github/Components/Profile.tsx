import { Flex, Image, Label } from "@/components";
import { useProfile } from "@/lib/apis/useProfile";

export default function Profile() {
	const { profile } = useProfile();

	return (
		<Flex
			isColumn
			gap="4"
			className="w-1/3 shrink-0 grow-0 overflow-y-auto h-full  p-6 bg-black/70 border-r-4 border-[#ff00cc] shadow-[0_0_24px_4px_#ff00cc99]"
		>
			<Flex
				isColumn
				gap="6"
				className="w-full"
				align="center"
				justify="center"
			>
				<Image
					src={profile?.avatar_url}
					alt="avatar"
					draggable={false}
					width={92}
					height={92}
					priority
					className="rounded-full outline-4 outline-[#0ff0fc] shadow-[0_0_32px_8px_#0ff0fc99]"
				/>
				<Flex isColumn gap="2" justify="center">
					<Label
						size="2xl"
						className="font-bold text-[#ff00cc] drop-shadow-cyberpunk text-center"
					>
						{profile?.html_url && (
							<a
								className="hover:underline"
								href={profile?.html_url}
								target="_blank"
							>
								{profile?.name || profile?.login}
							</a>
						)}
					</Label>
					{profile?.name && (
						<Label className="text-[#0ff0fc] opacity-80 text-center">
							{profile?.login}
						</Label>
					)}
					<Label className="text-[#f8f8ff] opacity-80 text-center">
						{profile?.bio}
					</Label>
				</Flex>
			</Flex>
			<div className="w-full border-b-2 border-dashed border-[#ff00cc]" />
			<Flex isColumn gap="2">
				<Image
					alt="github stats"
					className="rounded-lg"
					width={600}
					height={600}
					src="https://github-readme-stats.vercel.app/api?username=itsXrgon&theme=radical&show_icons=true&hide_border=true&count_private=true"
				/>
				<Image
					alt="github streak"
					className="rounded-lg"
					width={600}
					height={600}
					src="https://github-readme-stats.vercel.app/api/top-langs/?username=itsXrgon&theme=radical&show_icons=true&hide_border=true&layout=compact"
				/>
				<Image
					alt="github streak"
					className="rounded-lg"
					width={600}
					height={600}
					src="https://github-readme-streak-stats.herokuapp.com/?user=itsXrgon&theme=radical&hide_border=true"
				/>
			</Flex>
		</Flex>
	);
}
