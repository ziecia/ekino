'use client';

import { useEffect } from 'react';

import { Button } from '@/components/ui/button';

type TErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function Error({ error, reset }: TErrorProps) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex w-[100%] flex-col items-center gap-5 text-white">
			<h2>Coś poszło nie tak!</h2>
			<Button onClick={reset}>Spróbuj ponownie</Button>
		</div>
	);
}
