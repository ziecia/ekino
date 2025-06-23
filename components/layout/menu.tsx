'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname, useSelectedLayoutSegment } from 'next/navigation';
import { cn } from '@/utils/lib/tailwind';

import { navConfig } from '@/config/nav-config';

import { Icons } from '../icons/icons';
import { Button } from '../ui/button';
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';

export default function Menu() {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const selectedLayoutSegment = useSelectedLayoutSegment();
	const pathname = usePathname();

	const menuItems = navConfig.map(x => {
		const Icon = Icons[x.icon];

		return (
			<Link
				key={x.label}
				href={x.slug}
				className={cn(
					'flex gap-2 hover:text-primary [&:hover>svg]:fill-primary',
					x.slug === pathname ||
						x.layoutSegment === selectedLayoutSegment
						? 'text-primary [&>svg]:fill-primary'
						: '',
				)}>
				<Icon /> {x.label}
			</Link>
		);
	});

	return (
		<>
			<Button
				variant={'outline'}
				size={'icon'}
				className="xl:hidden"
				onClick={() => setIsOpen(true)}>
				<Icons.menu />
			</Button>
			<nav className="hidden gap-5 text-white xl:flex">{menuItems}</nav>
			<Dialog open={isOpen} onOpenChange={setIsOpen}>
				<DialogContent
					className={
						'rounded-lg bg-foreground [&>button>svg]:stroke-white'
					}>
					<DialogTitle
						className={
							'text-xl font-medium tracking-wide text-white sm:text-center'
						}>
						Menu główne
					</DialogTitle>
					<div className="mx-auto max-w-[400px]">
						<nav
							className="space-y-5 text-center text-white [&_a]:text-xl"
							onClick={() => setIsOpen(false)}>
							{menuItems}
						</nav>
					</div>
				</DialogContent>
			</Dialog>
		</>
	);
}
