import { Metadata } from 'next';

export const generateMetadata = async (
	{ params }: TComponentProps
): Promise<Metadata> => {
	const { type, id } = await params;

	return {
		title: `${type.toUpperCase()} ID: ${id}`,
	};
};

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
