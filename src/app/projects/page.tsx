"use client";

import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, Background } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://conectar-v2.vercel.app",
			title: "COnectar Restaurant",
			description: "Restaurant site.",
		},
		{
			href: "https://github.com/NatsukiSubaruGh/anirip",
			title: "Anirip",
			description: "Anime downloading app for PC.",
		},
		{
			href: "javascript:void(0)",
			title: "Email",
			description: "For professional inquiries.",
		},
	];

	return (
		<Flex fillWidth direction="column" alignItems="center">
			{/* Main Content Wrapper */}
			<Flex 
				fillWidth 
				maxWidth={64} 
				direction="column" 
				paddingX="l" 
				paddingY="xl" 
				gap="xl">
				
				<Flex direction="column" gap="m">
					<Heading variant="display-strong-s">Projects</Heading>
					<Grid
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
						fillWidth>
						{links.map((link) => (
							<Link
								target="_blank"
								style={{ padding: 'var(--responsive-space-l)' }}
								key={link.href}
								href={link.href}>
								<Flex
									fillWidth paddingY="8" gap="8"
									direction="column">
									<Flex
										fillWidth gap="12"
										alignItems="center">
										<Text
											variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text
										variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						))}
					</Grid>
				</Flex>

				{/* Footer Section */}
				<Flex
					as="footer"
					position="relative"
					fillWidth 
					paddingY="m"
					justifyContent="space-between"
					alignItems="center">
					<Text
						variant="body-default-s" onBackground="neutral-weak">
						© 2026 KON, <Link href="https://github.com/SasukeGh">MIT License</Link>
					</Text>
					<Flex gap="12">
						<Button
							href="/"
							prefixIcon="grid" size="s" variant="secondary">
							Go Home
						</Button>
						<Button
							href="https://github.com/SasukeGh"
							prefixIcon="github" size="s" variant="tertiary">
							GitHub
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Analytics />
		</Flex>
	);
}
