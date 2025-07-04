import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
	return (
		<div className="flex w-[100%] flex-col items-center gap-5 text-white">
			<div className="text-9xl">404</div>
			<div className="text-2xl">Nie znaleziono podanej strony</div>
			<Link href={'/'}>
				<Button>Wróć na stronę główną</Button>
			</Link>
		</div>
	);
}
