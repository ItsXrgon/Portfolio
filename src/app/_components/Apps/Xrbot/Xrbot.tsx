import {
	FlaskOriginal,
	PandasOriginal,
	PythonOriginal,
	ReplitOriginal,
} from "devicons-react";

import { Flex, Image, Label } from "@/components";

export default function Xrbot() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full h-full gap-4 bg-white p-4 overflow-y-auto"
		>
			<Flex isColumn gap="2">
				<Label>What is this?</Label>
				<Label>
					Discord bot made using Discord.py. The bot has a lot of
					features and minigames that can be played with friends such
					as TicTacToe (vs the bot or a friend), Flag guesser, spin
					the bottle and more.
					<br />
					This was also my first project ever. Find it here{" "}
					<a
						href="https://github.com/ItsXrgon/XrBot-DiscordBot"
						target="_blank"
						className="text-blue-500 underline"
					>
						here
					</a>
					.
				</Label>
			</Flex>
			<Flex gap="2" justify="around" align="center" isWrapped>
				<Image
					icon="xrbot_tic_tac_toe"
					width={500}
					height={500}
					alt=""
				/>
				<Image
					icon="xrbot_flag_guesser"
					width={500}
					height={500}
					alt=""
				/>
			</Flex>
			<Flex isColumn gap="1">
				<Label>Features</Label>
				<Label>
					- Keeping track of memos.
					<br />
					- Playing TicTacToe with the bot or a friend.
					<br />
					- Playing Flag guesser.
					<br />
					- Coinflip, spinning the bottle generating random numbers
					between a range.
					<br />
					- Moving messages to a specific channel, perserving the
					attachments and the sender of the messages.
					<br />
				</Label>
			</Flex>
			<Flex isColumn gap="2">
				<Label>How does this work?</Label>
				<Label>
					The bot is hosted on Replit and is always online using the
					Replit&apos;s Uptime feature. The bot is made using
					Discord.py and is hosted on a Flask server to provide the
					uptime service.
					<br />
					The bot uses Channel IDs to identify the channels that the
					games are ongoing on, allowing multiple games to be played
					at the same time in different channels.
				</Label>
			</Flex>
			<Flex isColumn gap="2">
				<Label>Tech stack</Label>
				<Flex isWrapped gap="4">
					<Flex gap="1" align="center">
						<PythonOriginal size={48} />
						<Label>Python</Label>
					</Flex>
					<Flex gap="1" align="center">
						<ReplitOriginal size={48} />
						<Label>Replit</Label>
					</Flex>
					<Flex gap="1" align="center">
						<PythonOriginal size={48} />
						<Label>Discord.py</Label>
					</Flex>
					<Flex gap="1" align="center">
						<FlaskOriginal size={48} />
						<Label>Flask</Label>
					</Flex>
					<Flex gap="1" align="center">
						<PandasOriginal size={48} />
						<Label>Pandas</Label>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
