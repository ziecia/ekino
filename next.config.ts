import type { NextConfig } from 'next';
import nextMDX from '@next/mdx';

const withMDX = nextMDX(
	{
		options: {
		}
	}
)

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
	},
	pageExtensions: ['mdx', 'ts', 'tsx'],
	experimental: {
		mdxRs: true
	},
	async redirects() {
		return [
			{
				source: '/movies-and-series',
				destination: '/search',
				permanent: false
			},
			{
				source: '/movies-and-series/:type',
				destination: '/search',
				permanent: false
			},
			{
				source: '/movies-and-series/:type/:id/:rest+',
				destination: '/search',
				permanent: false
			}
		]
	}
};

export default withMDX(nextConfig);