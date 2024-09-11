import { Flex, Label } from "@/app/UIComponents";

export default function About() {
	return (
		<Flex isColumn gap="3">
			<Flex isColumn gap="1">
				<Label.Big400>Why I made this?</Label.Big400>
				<Label.Mid300>
					I wanted to make a Portfolio site that was more than just a
					landing page with a few images and links. The "I'm not like
					other girls" kind of Portfolio. <br />
					So I made this. A Desktop Environment that is a Portfolio
					site but also a bit more than that.
				</Label.Mid300>
			</Flex>
			<Flex isColumn gap="2">
				<Flex isColumn gap="1">
					<Label.Big400>How I made this?</Label.Big400>
					<Label.Mid300>
						To skip the explanation you can check out the source
						code{" "}
						<a
							href="https://github.com/itsXrgon/portfolio"
							target="_blank"
							className="text-blue-500 underline"
						>
							here
						</a>
						. But if you're interested in the details, here they
						are:
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>General</Label.Big300>
					<Label.Mid300>
						The app is made using Next.js and hosted on Vercel. The
						App also uses Redux to keep track of Apps, Windows, and
						Taskbar. The Redux store is persisted using Redux
						Persist to keep the state between refreshes.
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Apps</Label.Big300>
					<Label.Mid300>
						Each App maintains its own position and size as an
						internal state but updates the global state after
						resizing or moving is completed. The Apps also never
						actually unmount unless closed, they just get hidden
						when they are minimized. This is to maintain the state
						of the App and not lose any data.
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Github</Label.Big300>
					<Label.Mid300>
						The Github App uses the Github API to fetch the data and
						display it however because this can rate limit I have
						also hardcoded the data as backup... Not elegant but it
						works.
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Terminal</Label.Big300>
					<Label.Mid300>
						The Terminal App is just a simple terminal emulator that
						uses a JSON object to store the commands and their
						outputs. You can add more commands by adding them to the
						object.
					</Label.Mid300>
				</Flex>
				<Flex isColumn gap="1">
					<Label.Big300>Settings (You are here!)</Label.Big300>
					<Label.Mid300>
						The Settings App's only interesting feature is the Theme
						update feature. For that I used tailwind config to read
						CSS variables that I can change on the fly. The theme
						accordions are dynamically generated from the Palette JS
						object that I have as the default theme so updating that
						auto updates the theme options. I just have to update
						the CSS variables to match any new ones added in the
						palette.
					</Label.Mid300>
				</Flex>
			</Flex>
			<Flex isColumn gap="1">
				<Label.Big400>Font</Label.Big400>
				<Label.Mid300>
					The font used is Cairo, a Google Font. Not hard to guess why
					I chose it considering where I'm from.
				</Label.Mid300>
			</Flex>
		</Flex>
	);
}
