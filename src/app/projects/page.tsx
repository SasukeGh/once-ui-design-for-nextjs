"use client";

import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Text, Flex, Button, Grid, Icon, Background } from '@/once-ui/components';
import Link from 'next/link';

type Project = {
	href: string | null;
	title: string;
	description: string;
};

export default function Projects() {
	const currentYear = new Date().getFullYear();

	const links: Project[] = [
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
			href: null,
			title: "More Coming",
			description: "New projects will be added soon.",
		},
	];

	return (
		<React.Fragment>
			<Flex
				fillWidth
				direction="column"
				padding="l"
				style={{ minHeight: "100vh" }}
			>
				<Background dots={false} />

				<Flex flex={1} alignItems="center" justifyContent="center">
					<Grid
						fillWidth
						radius="l"
						border="neutral-medium"
						borderStyle="solid-1"
						columns="repeat(3, 1fr)"
						tabletColumns="1col"
						mobileColumns="1col"
					>
						{links.map((link) => {
							const cardStyle: React.CSSProperties = {
								padding: "var(--responsive-space-l)",
								minHeight: "180px",
								display: "flex",
								alignItems: "stretch",
							};

							if (link.href) {
								return (
									<Link
										key={link.title}
										href={link.href}
										target="_blank"
										rel="noopener noreferrer"
										style={{ textDecoration: "none" }}
									>
										<Flex
											fillWidth
											direction="column"
											justifyContent="space-between"
											style={cardStyle}
										>
											<Flex direction="column" gap="8">
												<Flex gap="12" alignItems="center">
													<Text variant="body-strong-m" onBackground="neutral-strong">
														{link.title}
													</Text>
													<Icon size="s" name="arrowUpRight" />
												</Flex>
												<Text variant="body-default-s" onBackground="neutral-weak">
													{link.description}
												</Text>
											</Flex>
										</Flex>
									</Link>
								);
							}

							return (
								<Flex
									key={link.title}
									fillWidth
									direction="column"
									justifyContent="space-between"
									style={cardStyle}
								>
									<Flex direction="column" gap="8">
										<Text variant="body-strong-m" onBackground="neutral-strong">
											{link.title}
										</Text>
										<Text variant="body-default-s" onBackground="neutral-weak">
											{link.description}
										</Text>
									</Flex>
								</Flex>
							);
						})}
					</Grid>
				</Flex>

				<Flex
					as="footer"
					fillWidth
					paddingY="m"
					justifyContent="space-between"
					alignItems="center"
					style={{ marginTop: "auto" }}
				>
					<Text variant="body-default-s" onBackground="neutral-weak">
						© {currentYear} KON,{" "}
						<Link href="https://github.com/SasukeGh">MIT License</Link>
					</Text>

					<Flex gap="12">
						<Button href="/" prefixIcon="home" size="s" variant="secondary">
							Home
						</Button>
						<Button
							href="https://github.com/SasukeGh"
							prefixIcon="github"
							size="s"
							variant="tertiary"
						>
							GitHub
						</Button>
					</Flex>
				</Flex>
			</Flex>

			<Analytics />
		</React.Fragment>
	);
}
