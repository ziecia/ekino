import { ReactNode } from 'react';

export type TProps = {
	children: ReactNode;
};

export default function BlogLayout({ children }: TProps) {
	return <div>{children}</div>;
}
