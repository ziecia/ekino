type TComponentProps = {
	params: Promise<{
		type: string;
		id: string;
	}>;
};

export default async function MoviesAndSeriesPage({ params }: TComponentProps) {
	const { type, id } = await params;

	return (
		<article>
			<section>
				Typ: {type}
				<br />
				Id: {id}
			</section>
		</article>
	);
}
