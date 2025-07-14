import Desktop from "@/app/_components/Desktop/Desktop";

export function generateStaticParams() {
	return [{ slug: [""] }];
}

export default function Page() {
	return <Desktop />;
}
