import {
	FlaskOriginal,
	PandasOriginal,
	PythonOriginal,
	ReplitOriginal,
} from "devicons-react";
import React from "react";

import { Flex, Label } from "@/app/UIComponents";
import UIImage from "@/app/UIComponents/UIImage";

export default function Xrbot() {
	return (
		<Flex
			isColumn
			gap="3"
			className="w-full gap-4 overflow-y-scroll bg-white p-4"
		>
			<Flex isColumn gap="2">
				<Label.Big400>What is this?</Label.Big400>
				<Label.Mid300>
					Discord bot made using Discord.py. The bot has a
					lot of features and minigames that can be played with
					friends such as TicTacToe (vs the bot or a friend), Flag
					guesser, spin the bottle and more.
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
				</Label.Mid300>
			</Flex>
			<Flex gap="2" justify="around" align="center" isWrapped>
				<UIImage icon="xrbot_tic_tac_toe" width={500} height={500} />
				<UIImage icon="xrbot_flag_guesser" width={500} height={500} />
			</Flex>
			<Flex isColumn gap="1">
				<Label.Big400>Features</Label.Big400>
				<Label.Mid300>
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
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>How does this work?</Label.Big400>
				<Label.Mid300>
					The bot is hosted on Replit and is always online using the
					Replit's Uptime feature. The bot is made using Discord.py
					and is hosted on a Flask server to provide the uptime
					service.
					<br />
					The bot uses Channel IDs to identify the channels that the
					games are ongoing on, allowing multiple games to be played
					at the same time in different channels.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Label.Big400>Tech stack</Label.Big400>
				<Flex isWrapped gap="4">
					<Flex gap="1" align="center">
						<PythonOriginal size={48} />
						<Label.Mid400>Python</Label.Mid400>
					</Flex>
					<Flex gap="1" align="center">
						<ReplitOriginal size={48} />
						<Label.Mid400>Replit</Label.Mid400>
					</Flex>
					<Flex gap="1" align="center">
						<PythonOriginal size={48} />
						<Label.Mid400>Discord.py</Label.Mid400>
					</Flex>
					<Flex gap="1" align="center">
						<FlaskOriginal size={48} />
						<Label.Mid400>Flask</Label.Mid400>
					</Flex>
					<Flex gap="1" align="center">
						<PandasOriginal size={48} />
						<Label.Mid400>Pandas</Label.Mid400>
					</Flex>
				</Flex>
			</Flex>
		</Flex>
	);
}
