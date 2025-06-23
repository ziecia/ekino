import { ReactNode } from 'react';
import { Metadata } from "next";

export const metadata: Metadata = {
	title: 'Blog'
}

export type TProps = {
	children: ReactNode;
};

export default function BlogLayout({ children }: TProps) {
	return <div>{children}</div>;
}
