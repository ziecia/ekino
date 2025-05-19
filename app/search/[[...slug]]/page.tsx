type TComponentProps = {
	params: {
		slug?: string[];
	};
};

export default function SearchPage({ params: { slug } }: TComponentProps) {
	return (
		<article>
			<section>Parametry: {slug?.toString()}</section>
		</article>
	);
}
