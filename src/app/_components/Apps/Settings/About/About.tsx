import {
	NextjsOriginal,
	ReactOriginal,
	ReduxOriginal,
	TailwindcssOriginal,
	TypescriptOriginal,
	VercelOriginal,
} from "devicons-react";

import { Flex, Label } from "@/components";

export default function About() {
	return (
		<Flex isColumn gap="3">
			<Flex isColumn gap="1">
				<Label>Why I made this?</Label>
				<Label>
					I wanted to make a Portfolio site that was more than just a
					landing page with a few images and links. The &quot;I&apos;m
					not like other girls&quot; kind of Portfolio. <br />
					So I made this. A Desktop Environment that is a Portfolio
					site but also a bit more than that.
				</Label>
			</Flex>
			<Flex isColumn gap="2">
				<Flex isColumn gap="1">
					<Label>How I made this?</Label>
					<Label>
						To skip the explanation you can check out the source
						code{" "}
						<a
							href="https://github.com/itsXrgon/portfolio"
							target="_blank"
							className="text-blue-500 underline"
						>
							here
						</a>
						. But if you&apos;re interested in the details, here
						they are:
					</Label>
				</Flex>
				<Flex isColumn gap="1">
					<Label>General</Label>
					<Label>
						The app is made using Next.js and hosted on Vercel. The
						App also uses Redux to keep track of Apps, Windows, and
						Taskbar. The Redux store is persisted using Redux
						Persist to keep the state between refreshes.
					</Label>
				</Flex>
				<Flex isColumn gap="1">
					<Label>Apps</Label>
					<Label>
						Each App maintains its own position and size as an
						internal state but updates the global state after
						resizing or moving is completed. The Apps also never
						actually unmount unless closed, they just get hidden
						when they are minimized. This is to maintain the state
						of the App and not lose any data.
					</Label>
				</Flex>
				<Flex isColumn gap="1">
					<Label>Github</Label>
					<Label>
						The Github App uses the Github API to fetch the data and
						display it however because this can rate limit I have
						also hardcoded the data as backup... Not elegant but it
						works.
					</Label>
				</Flex>
				<Flex isColumn gap="1">
					<Label>Terminal</Label>
					<Label>
						The Terminal App is just a simple terminal emulator that
						uses a JSON object to store the commands and their
						outputs. You can add more commands by adding them to the
						object.
					</Label>
				</Flex>
				<Flex isColumn gap="1">
					<Label>Settings (You are here!)</Label>
					<Label>
						The Settings App&apos;s only interesting feature is the
						Theme update feature. For that I used tailwind config to
						read CSS variables that I can change on the fly. The
						theme inputs are dynamically generated from a palette
						JSON object which serves as the default theme so
						updating that auto updates the theme options. I just
						have to manually create a CSS variable for every
						palette.
					</Label>
				</Flex>
			</Flex>
			<Flex isColumn gap="2">
				<Label>Tech stack</Label>
				<Flex isWrapped gap="4">
					<Flex gap="1" align="center">
						<TypescriptOriginal size={48} />
						<Label>TypeScript</Label>
					</Flex>
					<Flex gap="1" align="center">
						<NextjsOriginal size={48} />
						<Label>NEXT.js</Label>
					</Flex>
					<Flex gap="1" align="center">
						<ReactOriginal size={48} />
						<Label>React</Label>
					</Flex>
					<Flex gap="1" align="center" className="">
						<TailwindcssOriginal size={48} />
						<Label>Tailwind</Label>
					</Flex>
					<Flex gap="1" align="center" className="">
						<ReduxOriginal size={48} />
						<Label>Redux</Label>
					</Flex>
					<Flex gap="1" align="center" className="">
						<VercelOriginal size={48} />
						<Label>Vercel</Label>
					</Flex>
				</Flex>
			</Flex>
			<Flex isColumn gap="1">
				<Label>Font</Label>
				<Label>
					The font used is Cairo, a Google Font. Not hard to guess why
					I chose it considering where I&apos;m from.
				</Label>
			</Flex>
		</Flex>
	);
}
