"use client";

import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, Background, InlineCode, Logo } from '@/once-ui/components';
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
				fillWidth paddingTop="l" paddingX="l"
				direction="column" alignItems="center" flex={1}
				style={{ minHeight: '100vh' }}>

				<Background dots={false} />

				<Flex
					position="relative"
					as="section"
					overflow="hidden"
					fillWidth
					maxWidth={64}
					direction="column"
					alignItems="center"
					flex={1}
				>
					<Flex
						as="main"
						direction="column"
						justifyContent="center"
						fillWidth
						fillHeight
						padding="l"
						gap="l"
					>

						{/* TOP SECTION (matches Home) */}
						<Flex mobileDirection="column" fillWidth gap="24">
							<Flex position="relative" fillWidth paddingTop="56" paddingX="xl">
								<Logo size="xl" icon={false} />
							</Flex>

							<Flex fillWidth gap="24" marginBottom="104" direction="column">
								<InlineCode
									className="shadow-m"
									style={{
										width: 'fit-content',
										padding: 'var(--static-space-8) var(--static-space-16)',
										backdropFilter: 'blur(var(--static-space-1))'
									}}
								>
									Things I've built<span className="brand-on-background-medium"> so far</span>
								</InlineCode>

								<Heading variant="display-strong-s">
									My Projects.<br />
									Real builds, not tutorials.<br /><br />
									More coming soon.
								</Heading>

								<Button
									href="https://conectar-v2.vercel.app"
									suffixIcon="chevronRight"
									variant="secondary"
								>
									Featured Project
								</Button>
							</Flex>
						</Flex>

						{/* PROJECT GRID */}
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
												height: 'auto',
												justifyContent: 'flex-start',
												textAlign: 'left',
												padding: 'var(--responsive-space-l)'
											}}
											onClick={(e: React.MouseEvent<HTMLButtonElement>) => e.preventDefault()}
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
				</Flex>

				{/* FOOTER */}
				<Flex
					as="footer"
					position="relative"
					fillWidth
					paddingX="l"
					paddingY="m"
					justifyContent="space-between"
					style={{ marginTop: 'auto' }}
				>
					<Text variant="body-default-s" onBackground="neutral-weak">
						© 2026 KON, <Link href="https://github.com/SasukeGh">MIT License</Link>
					</Text>

					<Flex gap="12">
						<Button href="/" prefixIcon="home" size="s" variant="secondary">
							Go Home
						</Button>
						<Button href="https://github.com/SasukeGh" prefixIcon="github" size="s" variant="tertiary">
							GitHub
						</Button>
					</Flex>
				</Flex>
			</Flex>

			<Analytics />
		</React.Fragment>
	);
}
