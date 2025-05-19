type TComponentProps = {
	params: {
		type: string;
		id: string;
	};
};

export default function MoviesAndSeriesPage({
	params: { type, id },
}: TComponentProps) {
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
