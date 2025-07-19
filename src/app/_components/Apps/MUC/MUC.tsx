import {
	JavascriptOriginal,
	JestPlain,
	NextjsOriginal,
	ReactOriginal,
	TailwindcssOriginal,
	TypescriptOriginal,
} from "devicons-react";

import { Flex, Label } from "@/components";

import AppHeader from "./AppHeader";
import Section from "./Section";
import "./index.css";

export default function MUC() {
	return (
		<Flex className="h-full w-full rounded-lg muc-scrollbar font-muc overflow-hidden">
			<Flex
				isColumn
				gap="6"
				className="w-full h-full overflow-y-auto bg-gradient-to-br from-slate-50 to-indigo-400 p-6 rounded-xl shadow-lg border font-muc muc-scrollbar"
			>
				<AppHeader />
				<Section title="Project Overview">
					<Flex isColumn gap="4">
						<Label className="text-gray-700 leading-relaxed">
							NPM library that you can find{" "}
							<a
								href="https://www.npmjs.com/package/multi-unit-converter/"
								target="_blank"
								className="text-indigo-600 underline hover:text-indigo-800 font-medium transition-colors"
							>
								here
							</a>
							, and a website that you can find{" "}
							<a
								href="https://unitconverter.xrgon.com/"
								target="_blank"
								className="text-indigo-600 underline hover:text-indigo-800 font-medium transition-colors"
							>
								here
							</a>
							.
						</Label>
						<div className="bg-gradient-to-r from-cyan-50 to-indigo-50 p-4 rounded-lg border-l-4 border-cyan-500">
							<Label className="text-gray-700 leading-relaxed">
								The library was made to convert between
								different units to either SI units by default or
								user specified one. The catch? this is not like
								other libraries/converters that can only convert
								1 unit at a time, this can convert multiple
								units at the same time. For example you can
								paste in a recipe full of different units and it
								will convert all of them at once.
							</Label>
						</div>
						<Label className="text-gray-700 leading-relaxed">
							This was not previously possible with other
							libraries to my knowledge. The website was made to
							showcase the library and provide a user-friendly
							interface for people to use the library without
							having to install it.
						</Label>
						<div className="flex flex-wrap gap-2">
							<a
								href="https://github.com/ItsXrgon/multi-unit-converter"
								target="_blank"
								className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
							>
								<span>📦</span>
								Library Repository
							</a>
							<a
								href="https://github.com/ItsXrgon/multi-unit-converter-site"
								target="_blank"
								className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors font-medium"
							>
								<span>🌐</span>
								Website Repository
							</a>
						</div>
					</Flex>
				</Section>
				<Section title="How It Works">
					<Flex isColumn gap="4">
						<Label className="text-gray-700 leading-relaxed">
							The library works by parsing the input string and
							extracting the units and values, using a regex
							pattern that can detect units using their aliases to
							ensure no unit is missed.
						</Label>
						<div className="bg-gradient-to-r from-orange-50 to-amber-50 p-4 rounded-lg border-l-4 border-orange-500">
							<Label className="text-gray-700 leading-relaxed font-medium">
								The units are then converted to their respective
								selected output unit using conversion factors
								stored in the library.
							</Label>
						</div>
						<Flex isWrapped gap="4" className="mt-4">
							<Flex
								isColumn
								align="center"
								className="bg-white p-4 rounded-lg border border-indigo-200 min-w-[200px] flex-1"
							>
								<Label size="2xl" className="mb-2">
									🔍
								</Label>
								<Label
									size="lg"
									weight="SemiBold"
									className="text-indigo-700 text-center"
								>
									Parse Input
								</Label>
								<Label className="text-sm text-gray-600 text-center">
									Extract units & values
								</Label>
							</Flex>
							<Flex
								isColumn
								align="center"
								className="bg-white p-4 rounded-lg border border-cyan-200 min-w-[200px] flex-1"
							>
								<Label size="2xl" className="mb-2">
									⚙️
								</Label>
								<Label
									size="lg"
									weight="SemiBold"
									className="text-cyan-700 text-center"
								>
									Process Units
								</Label>
								<Label className="text-sm text-gray-600 text-center">
									Apply conversion factors
								</Label>
							</Flex>
							<Flex
								isColumn
								align="center"
								className="bg-white p-4 rounded-lg border border-orange-200 min-w-[200px] flex-1"
							>
								<Label size="2xl" className="mb-2">
									✨
								</Label>
								<Label
									size="lg"
									weight="SemiBold"
									className="text-orange-700 text-center"
								>
									Output Result
								</Label>
								<Label className="text-sm text-gray-600 text-center">
									Converted values
								</Label>
							</Flex>
						</Flex>
					</Flex>
				</Section>
				<Section title="Tech Stack">
					<Flex isColumn gap="6">
						<Flex isColumn gap="4">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-indigo-700 mb-4 flex items-center gap-2"
							>
								<span>📚</span>
								Library
							</Label>
							<Flex isWrapped gap="4">
								<div className="group">
									<Flex
										gap="3"
										align="center"
										className="bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
									>
										<JavascriptOriginal
											size={48}
											className="text-yellow-600"
										/>
										<Flex isColumn gap="1">
											<Label
												size="sm"
												weight="SemiBold"
												className="text-yellow-800"
											>
												JavaScript
											</Label>
											<Label
												size="sm"
												className="text-yellow-700"
											>
												Core Language
											</Label>
										</Flex>
									</Flex>
								</div>
								<div className="group">
									<Flex
										gap="3"
										align="center"
										className="bg-gradient-to-r from-red-50 to-pink-50 border border-red-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
									>
										<JestPlain
											size={48}
											className="text-red-600"
										/>
										<Flex isColumn gap="1">
											<Label
												size="sm"
												weight="SemiBold"
												className="text-red-800"
											>
												Jest
											</Label>
											<Label
												size="sm"
												className="text-red-700"
											>
												Testing Framework
											</Label>
										</Flex>
									</Flex>
								</div>
							</Flex>
						</Flex>
						<Flex isColumn gap="4">
							<Label
								size="lg"
								weight="SemiBold"
								className="text-cyan-700 mb-4 flex items-center gap-2"
							>
								<span>🌐</span>
								Website
							</Label>
							<Flex isWrapped gap="2">
								<Flex
									gap="3"
									align="center"
									className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
								>
									<TypescriptOriginal
										size={48}
										className="text-blue-600"
									/>
									<Flex isColumn gap="1">
										<Label
											size="sm"
											weight="SemiBold"
											className="text-blue-800"
										>
											TypeScript
										</Label>
										<Label
											size="sm"
											className="text-blue-700"
										>
											Type Safety
										</Label>
									</Flex>
								</Flex>
								<Flex
									gap="3"
									align="center"
									className="bg-gradient-to-r from-gray-50 to-slate-50 border border-gray-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
								>
									<NextjsOriginal
										size={48}
										className="text-gray-600"
									/>
									<Flex isColumn gap="1">
										<Label
											size="sm"
											weight="SemiBold"
											className="text-gray-800"
										>
											Next.js
										</Label>
										<Label
											size="sm"
											className="text-gray-700"
										>
											Framework
										</Label>
									</Flex>
								</Flex>
								<Flex
									gap="3"
									align="center"
									className="bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
								>
									<ReactOriginal
										size={48}
										className="text-cyan-600"
									/>
									<Flex isColumn gap="1">
										<Label
											size="sm"
											weight="SemiBold"
											className="text-cyan-800"
										>
											React
										</Label>
										<Label
											size="sm"
											className="text-cyan-700"
										>
											UI Library
										</Label>
									</Flex>
								</Flex>
								<Flex
									gap="3"
									align="center"
									className="bg-gradient-to-r from-teal-50 to-cyan-50 border border-teal-200 p-4 rounded-lg hover:shadow-lg transition-all duration-300 group-hover:scale-105"
								>
									<TailwindcssOriginal
										size={48}
										className="text-teal-600"
									/>
									<Flex isColumn gap="1">
										<Label
											size="sm"
											weight="SemiBold"
											className="text-teal-800"
										>
											Tailwind
										</Label>
										<Label
											size="sm"
											className="text-teal-700"
										>
											Styling
										</Label>
									</Flex>
								</Flex>
							</Flex>
						</Flex>
					</Flex>
				</Section>
			</Flex>
		</Flex>
	);
}
