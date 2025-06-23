import { Metadata } from 'next';

export const generateMetadata = async ({
	params,
}: TComponentProps): Promise<Metadata> => {
	const { slug } = await params;

	return {
		title: slug ? `Szukaj: ${slug}` : 'Szukaj filmu lub serialu',
	};
};

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
