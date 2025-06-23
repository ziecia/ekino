import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'images.pexels.com',
				pathname: '/photos/**',
			},
		],
		deviceSizes: [640, 750, 828, 1080, 1200, 1920],
	}
};

export default nextConfig;
