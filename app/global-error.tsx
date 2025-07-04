'use client';

import { Button } from '@/components/ui/button';

type TGlobalErrorProps = {
	error: Error & { digest?: string };
	reset: () => void;
};

export default function GlobalError({ error, reset }: TGlobalErrorProps) {
	return (
		<html>
			<body>
				<h2>Coś poszło nie tak!</h2>
				<Button onClick={reset}>Spróbuj ponownie</Button>
			</body>
		</html>
	);
}
