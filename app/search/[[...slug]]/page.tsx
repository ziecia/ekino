type TComponentProps = {
	params: Promise<{
		slug?: string[];
	}>;
};

export default async function SearchPage({ params }: TComponentProps) {
	const { slug } = await params;

	return (
		<article>
			<section>Parametry: {slug?.toString()}</section>
		</article>
	);
}
