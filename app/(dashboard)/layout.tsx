import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Moje konto',
};

export type TProps = {
	children: ReactNode;
};

export default function DashboardLayout({ children }: TProps) {
	return <div className="h-[100vh] bg-red-500">{children}</div>;
}
