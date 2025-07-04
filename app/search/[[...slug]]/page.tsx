import { Metadata } from 'next';
import { redirect } from 'next/navigation';

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

	if (slug !== undefined && slug.length > 1) {
		redirect('/');
	}

	return (
		<article>
			<section>Parametry: {slug?.toString()}</section>
		</article>
	);
}
