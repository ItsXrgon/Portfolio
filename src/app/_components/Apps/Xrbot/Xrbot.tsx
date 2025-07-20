import xrbot_flag_guesser from "@assets/xrbot/xrbot_flag_guesser.png";
import xrbot_tic_tac_toe from "@assets/xrbot/xrbot_tic_tac_toe.png";
import {
	FlaskOriginal,
	PandasOriginal,
	PythonOriginal,
	ReplitOriginal,
} from "devicons-react";

import { Flex, Image, Label } from "@/components";

import "./index.css";

export default function Xrbot() {
	return (
		<Flex className="h-full w-full rounded-lg xrbot-scrollbar font-xrbot overflow-hidden">
			<Flex
				isColumn
				gap="6"
				className="w-full h-full overflow-y-auto bg-gradient-to-br from-[#2C2F33] to-[#23272A] p-6 rounded-xl shadow-2xl border border-[#5865F2]/20 font-xrbot xrbot-scrollbar"
			>
				<Flex isColumn gap="4" className="text-center">
					<Flex align="center" justify="center" gap="3">
						<div className="w-12 h-12 bg-gradient-to-br from-[#5865F2] to-[#57F287] rounded-full flex items-center justify-center">
							<span className="text-white text-xl font-bold">
								🤖
							</span>
						</div>
						<div>
							<Label
								size="2xl"
								weight="Bold"
								className="text-white"
							>
								Xrbot
							</Label>
							<Flex align="center" gap="2" justify="center">
								<div className="w-2 h-2 bg-[#57F287] rounded-full animate-pulse"></div>
								<Label className="text-[#99AAB5] text-sm">
									Online
								</Label>
							</Flex>
						</div>
					</Flex>
					<Label className="text-[#99AAB5] leading-relaxed max-w-2xl mx-auto">
						Discord bot made using Discord.py. The bot has a lot of
						features and minigames that can be played with friends
						such as TicTacToe (vs the bot or a friend), Flag
						guesser, spin the bottle and more.
					</Label>
					<a
						href="https://github.com/ItsXrgon/XrBot-DiscordBot"
						target="_blank"
						className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] text-white rounded-lg hover:bg-[#4752C4] transition-colors font-medium"
					>
						<span>🔗</span>
						View on GitHub
					</a>
				</Flex>

				{/* Screenshots Section */}
				<Flex isColumn gap="4">
					<Label
						size="lg"
						weight="Bold"
						className="text-white flex items-center gap-2"
					>
						<span>🎮</span>
						Game Screenshots
					</Label>
					<Flex
						gap="4"
						justify="around"
						align="center"
						isWrapped
						className="bg-[#23272A]/50 p-4 rounded-lg border border-[#5865F2]/20"
					>
						<div className="group">
							<Image
								src={xrbot_tic_tac_toe}
								width={400}
								height={400}
								alt="Xrbot Tic Tac Toe"
								className="rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-[#5865F2]/30"
							/>
							<Label className="text-center text-[#99AAB5] mt-2 block">
								Tic Tac Toe
							</Label>
						</div>
						<div className="group">
							<Image
								src={xrbot_flag_guesser}
								width={400}
								height={400}
								alt="Xrbot Flag Guesser"
								className="rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 group-hover:scale-105 border-2 border-[#57F287]/30"
							/>
							<Label className="text-center text-[#99AAB5] mt-2 block">
								Flag Guesser
							</Label>
						</div>
					</Flex>
				</Flex>
				<Flex isColumn gap="4">
					<Label
						size="lg"
						weight="Bold"
						className="text-white flex items-center gap-2"
					>
						<span>⚡</span>
						Features
					</Label>
					<Flex isWrapped gap="3">
						<div className="bg-[#23272A] p-3 rounded-lg border border-[#5865F2]/30 hover:border-[#5865F2] transition-colors flex-1 min-w-[200px]">
							<Label className="text-[#FEE75C] font-semibold mb-2 block">
								📝 Memos
							</Label>
							<Label className="text-[#99AAB5] text-sm">
								Keeping track of memos and notes
							</Label>
						</div>
						<div className="bg-[#23272A] p-3 rounded-lg border border-[#57F287]/30 hover:border-[#57F287] transition-colors flex-1 min-w-[200px]">
							<Label className="text-[#FEE75C] font-semibold mb-2 block">
								🎯 Tic Tac Toe
							</Label>
							<Label className="text-[#99AAB5] text-sm">
								Play against the bot or a friend
							</Label>
						</div>
						<div className="bg-[#23272A] p-3 rounded-lg border border-[#FEE75C]/30 hover:border-[#FEE75C] transition-colors flex-1 min-w-[200px]">
							<Label className="text-[#FEE75C] font-semibold mb-2 block">
								🏁 Flag Guesser
							</Label>
							<Label className="text-[#99AAB5] text-sm">
								Test your geography knowledge
							</Label>
						</div>
						<div className="bg-[#23272A] p-3 rounded-lg border border-[#5865F2]/30 hover:border-[#5865F2] transition-colors flex-1 min-w-[200px]">
							<Label className="text-[#FEE75C] font-semibold mb-2 block">
								🎲 Random Games
							</Label>
							<Label className="text-[#99AAB5] text-sm">
								Coinflip, spin the bottle, random numbers
							</Label>
						</div>
						<div className="bg-[#23272A] p-3 rounded-lg border border-[#57F287]/30 hover:border-[#57F287] transition-colors flex-1 min-w-[200px]">
							<Label className="text-[#FEE75C] font-semibold mb-2 block">
								📤 Message Management
							</Label>
							<Label className="text-[#99AAB5] text-sm">
								Move messages between channels
							</Label>
						</div>
					</Flex>
				</Flex>
				<Flex isColumn gap="4">
					<Label
						size="lg"
						weight="Bold"
						className="text-white flex items-center gap-2"
					>
						<span>🔧</span>
						How It Works
					</Label>
					<div className="bg-gradient-to-r from-[#23272A] to-[#2C2F33] p-4 rounded-lg border-l-4 border-[#5865F2]">
						<Label className="text-[#99AAB5] leading-relaxed">
							The bot is hosted on{" "}
							<span className="text-[#FEE75C] font-semibold">
								Replit
							</span>{" "}
							and is always online using the Replit&apos;s Uptime
							feature. The bot is made using{" "}
							<span className="text-[#FEE75C] font-semibold">
								Discord.py
							</span>{" "}
							and is hosted on a{" "}
							<span className="text-[#FEE75C] font-semibold">
								Flask
							</span>{" "}
							server to provide the uptime service.
							<br />
							<br />
							The bot uses{" "}
							<span className="text-[#57F287] font-semibold">
								Channel IDs
							</span>{" "}
							to identify the channels that the games are ongoing
							on, allowing multiple games to be played at the same
							time in different channels.
						</Label>
					</div>
				</Flex>
				<Flex isColumn gap="4">
					<Label
						size="lg"
						weight="Bold"
						className="text-white flex items-center gap-2"
					>
						<span>💻</span>
						Tech Stack
					</Label>
					<Flex
						isWrapped
						gap="4"
						className="bg-[#23272A]/50 p-4 rounded-lg border border-[#5865F2]/20"
					>
						<div className="group">
							<Flex
								gap="3"
								align="center"
								className="bg-[#23272A] p-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-[#5865F2]/30"
							>
								<PythonOriginal
									size={48}
									className="text-[#3776AB]"
								/>
								<Flex isColumn gap="1">
									<Label className="text-sm font-semibold text-white">
										Python
									</Label>
									<Label className="text-xs text-[#99AAB5]">
										Core Language
									</Label>
								</Flex>
							</Flex>
						</div>
						<div className="group">
							<Flex
								gap="3"
								align="center"
								className="bg-[#23272A] p-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-[#5865F2]/30"
							>
								<ReplitOriginal
									size={48}
									className="text-[#F26207]"
								/>
								<Flex isColumn gap="1">
									<Label className="text-sm font-semibold text-white">
										Replit
									</Label>
									<Label className="text-xs text-[#99AAB5]">
										Hosting Platform
									</Label>
								</Flex>
							</Flex>
						</div>
						<div className="group">
							<Flex
								gap="3"
								align="center"
								className="bg-[#23272A] p-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-[#57F287]/30"
							>
								<PythonOriginal
									size={48}
									className="text-[#5865F2]"
								/>
								<Flex isColumn gap="1">
									<Label className="text-sm font-semibold text-white">
										Discord.py
									</Label>
									<Label className="text-xs text-[#99AAB5]">
										Bot Framework
									</Label>
								</Flex>
							</Flex>
						</div>
						<div className="group">
							<Flex
								gap="3"
								align="center"
								className="bg-[#23272A] p-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-[#FEE75C]/30"
							>
								<FlaskOriginal
									size={48}
									className="text-[#000000]"
								/>
								<Flex isColumn gap="1">
									<Label className="text-sm font-semibold text-white">
										Flask
									</Label>
									<Label className="text-xs text-[#99AAB5]">
										Web Framework
									</Label>
								</Flex>
							</Flex>
						</div>
						<div className="group">
							<Flex
								gap="3"
								align="center"
								className="bg-[#23272A] p-3 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105 border border-[#57F287]/30"
							>
								<PandasOriginal
									size={48}
									className="text-[#130654]"
								/>
								<Flex isColumn gap="1">
									<Label className="text-sm font-semibold text-white">
										Pandas
									</Label>
									<Label className="text-xs text-[#99AAB5]">
										Data Processing
									</Label>
								</Flex>
							</Flex>
						</div>
					</Flex>
				</Flex>
				<Flex isColumn gap="4">
					<Label
						size="lg"
						weight="Bold"
						className="text-white flex items-center gap-2"
					>
						<span>📊</span>
						Project Status
					</Label>
					<div className="bg-gradient-to-r from-[#57F287]/10 to-[#5865F2]/10 p-4 rounded-lg border border-[#57F287]/30">
						<Label className="text-[#99AAB5] leading-relaxed">
							This was my{" "}
							<span className="text-[#FEE75C] font-semibold">
								first project ever
							</span>{" "}
							and serves as a foundation for my development
							journey. The bot is currently active and being used
							by Discord communities, demonstrating the practical
							application of Python and Discord API integration.
						</Label>
					</div>
				</Flex>
			</Flex>
		</Flex>
	);
}
