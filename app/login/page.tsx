import Image from 'next/image';
import BannerEkino from '@/public/banner_ekino.jpg';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Logowanie'
}

export default function LoginPage() {
	return (
		<article>
			<section>Login</section>
			<div className="grid xl:grid-cols-2">
				<Image
					src={BannerEkino}
					alt=""
					sizes="(max-width: 1200px) 50vw, 100vw"
				/>
				<Image
					src={BannerEkino}
					alt=""
					sizes="(max-width: 1200px) 50vw, 100vw"
				/>
			</div>
		</article>
	);
}
