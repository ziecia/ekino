import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { cn } from '@/utils/lib/tailwind';
import Header from '@/components/layout/header';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: {
		absolute: 'E-Kino',
		template: '%s | E-Kino',
	},
	description: 'Platforma do oceny oraz zakupu filmów i seriali.',
	keywords: ['Wypożyczalnia filmów', 'Wypożyczalnia seriali', 'VOD'],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="pl">
			<body
				className={cn(
					geistSans.variable,
					geistMono.variable,
					'bg-foreground antialiased',
				)}>
				<Header />
				<main>{children}</main>
			</body>
		</html>
	);
}
