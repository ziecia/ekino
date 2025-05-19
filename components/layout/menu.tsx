import Link from 'next/link';

import { navConfig } from '@/config/nav-config';

import { Icons } from '../icons/icons';

export default function Menu() {
	const menuItems = navConfig.map(x => {
		const Icon = Icons[x.icon];

		return (
			<Link
				key={x.label}
				href={x.slug}
				className="flex gap-2 hover:text-primary [&:hover>svg]:fill-primary">
				<Icon /> {x.label}
			</Link>
		);
	});

	return <nav className='text-white gap-5 xl:flex hidden'>{menuItems}</nav>;
}
