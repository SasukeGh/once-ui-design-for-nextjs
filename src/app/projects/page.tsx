"use client";

import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Text, Flex, Button, Grid, Icon, Background } from '@/once-ui/components';
import Link from 'next/link';

export default function Projects() {
	const links = [
		{
			href: "https://conectar-v2.vercel.app",
			title: "Conectar Restaurant",
			description: "Responsive and well designed restaurant site.",
		},
		{
			href: "https://github.com/NatsukiSubaruGh/anirip",
			title: "Anirip",
			description: "Simple and efficient anime downloading app for PC.",
		},
		{
			href: "",
			title: "More Coming",
			description: "New projects will be added soon.",
		},
	];

	return (
		<React.Fragment>
			<Flex
				fillWidth
				fillHeight
				padding="l"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '100vh' }}
			>
				<Background dots={false} />

				<Grid
					radius="l"
					border="neutral-medium"
					borderStyle="solid-1"
					columns="repeat(3, 1fr)"
					tabletColumns="1col"
					mobileColumns="1col"
					fillWidth
				>
					{links.map((link) => {
						const isEmpty = !link.href;

						if (isEmpty) {
							return (
								<Button
									key={link.title}
									variant="tertiary"
									style={{
										height: '100%',
										justifyContent: 'flex-start',
										textAlign: 'left',
										padding: 'var(--responsive-space-l)',
									}}
									onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
										e.preventDefault()
									}
								>
									<Flex direction="column" gap="8">
										<Text variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Text variant="body-default-s" onBackground="neutral-weak">
											{link.description}
										</Text>
									</Flex>
								</Button>
							);
						}

						return (
							<Link
								target="_blank"
								key={link.href}
								href={link.href}
								style={{ padding: 'var(--responsive-space-l)' }}
							>
								<Flex fillWidth paddingY="8" gap="8" direction="column">
									<Flex fillWidth gap="12" alignItems="center">
										<Text variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Icon size="s" name="arrowUpRight" />
									</Flex>
									<Text variant="body-default-s" onBackground="neutral-weak">
										{link.description}
									</Text>
								</Flex>
							</Link>
						);
					})}
				</Grid>
			</Flex>

			<Analytics />
		</React.Fragment>
	);
}
