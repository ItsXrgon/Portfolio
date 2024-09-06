import { useEffect, useState } from "react";
import Flex from "../../globalComponents/Flex";
import Label from "../../globalComponents/Label";
import { TGithubRepo } from "../../types";
import Repository from "./Components/Repository";
import { useProfile } from "./Components/useProfile";
import { useRepositories } from "./Components/useRepositories";
import { Clock, Mail, MapPin } from "lucide-react";
import { localeTimeFormatter } from "../../utils/formatting";

export default function Github() {
	const { profile } = useProfile();

	const { repos } = useRepositories();

	const [time, setTime] = useState(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	return (
		<Flex gap="1" className="w-full overflow-y-scroll bg-black text-white">
			<Flex
				isColumn
				gap="3"
				className="w-48 shrink-0 grow-0 overflow-y-scroll p-4"
			>
				<Flex isColumn gap="1" align="center">
					<img
						src={profile?.avatar_url}
						alt="avatar"
						draggable={false}
						className="h-28 w-28 rounded-full outline outline-white"
					/>
					<Label.Big500>
						<a
							className="hover:underline"
							href={profile?.html_url}
							target="_blank"
						>
							{profile?.name || profile?.login}
						</a>
					</Label.Big500>
					{profile?.name && (
						<Label.Big300>{profile?.login}</Label.Big300>
					)}
					<Label.Mid200>{profile?.bio}</Label.Mid200>
				</Flex>
				<Flex gap="1" align="center" className="flex-wrap">
					<Label.Thin200>
						{profile?.followers} Followers
					</Label.Thin200>
					<div className="h-1 w-1 rounded-full bg-white" />
					<Label.Thin200>
						{profile?.following} Following
					</Label.Thin200>
				</Flex>
				<Flex
					gap="2"
					isColumn
					align="start"
					justify="start"
					className="flex-wrap"
				>
					{profile?.location && (
						<Flex gap="3" align="center" className="flex-wrap">
							<MapPin width={18} height={18} strokeWidth={2} />
							<Label.Thin200>{profile?.location}</Label.Thin200>
						</Flex>
					)}
					<Flex gap="3" align="center" className="flex-wrap">
						<Clock width={18} height={18} strokeWidth={2} />
						<Label.Thin200>
							{`${localeTimeFormatter(time, profile?.location)} 
								(${
									new Intl.DateTimeFormat("en-US", {
										timeZone: profile?.location,
										timeZoneName: "short",
									})
										.format(new Date())
										.split(" ")[1]
								})
							`}
						</Label.Thin200>
						<Label.Thin200></Label.Thin200>
					</Flex>
					{profile?.email && (
						<Flex gap="3" align="center" className="flex-wrap">
							<Mail width={18} height={18} strokeWidth={2} />
							<Label.Thin200 className="select-all">
								{profile?.email}
							</Label.Thin200>
						</Flex>
					)}
				</Flex>
			</Flex>
			<div className="h-full w-px bg-white" />
			<Flex isColumn gap="4" className="w-full overflow-y-scroll p-1">
				{repos?.map((repo: TGithubRepo) => (
					<Repository repository={repo} key={repo?.node_id} />
				))}
			</Flex>
		</Flex>
	);
}
