"use client";

import { Analytics } from '@vercel/analytics/react'; // Updated import statement
import React from 'react';

import { Heading, Text, Flex, Button, Grid, InlineCode, Icon, Logo, Background } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://wa.me/233257789272/?text=Hi",
			title: "WhatsApp",
			description: "Chat me up.",
		},
		{
			href: "https://www.linkedin.com/in/kwabena-osei-nketiah-583b07372",
			title: "LinkedIn",
			description: "Contact me here.",
		},
		{
			href: "mailto:doktakobby@gmail.com",
			title: "Email",
			description: "For professional inquiries.",
		},
	];

	return (
		<React.Fragment>
			<Flex
				fillWidth paddingTop="l" paddingX="l"
				direction="column" alignItems="center" flex={1}>
				<Background
					dots={false} />
				<Flex
					position="relative"
					as="section" overflow="hidden"
					fillWidth minHeight="0" maxWidth={64}
					direction="column" alignItems="center" flex={1}>
					<Flex
						as="main"
						direction="column" justifyContent="center"
						fillWidth fillHeight padding="l" gap="l">
						<Flex
							mobileDirection="column"
							fillWidth gap="24">
							<Flex
								position="relative"
								fillWidth paddingTop="56" paddingX="xl">
								<Logo size="xl" icon={false} style={{ zIndex: '1' }} />
							</Flex>
							<Flex
								position="relative"
								fillWidth gap="24" marginBottom="104"
								direction="column">
								<InlineCode
									className="shadow-m"
									style={{
										width: 'fit-content',
										padding: 'var(--static-space-8) var(--static-space-16)',
										backdropFilter: 'blur(var(--static-space-1))'
									}}>
									Welcome to the official website of<span className="brand-on-background-medium"> Kwabena</span>
								</InlineCode>
								<Heading
									variant="display-strong-s">
									Kwabena Osei-Nketiah.<br />Web and mobile dev.
								</Heading>
								<Button 
									href="https://conectar-v2.vercel.app"
									suffixIcon="chevronRight"
									variant="secondary">
									My Projects
								</Button>
							</Flex>
						</Flex>
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
				</Flex>
				<Flex
					as="footer"
					position="relative"
					fillWidth paddingX="l" paddingY="m"
					justifyContent="space-between">
					<Text
						variant="body-default-s" onBackground="neutral-weak">
						© {currentYear} KON ,<Link href="https://raw.githubusercontent.com/SasukeGh/once-ui-design-for-nextjs/refs/heads/main/LICENSE">MIT License</Link>
					</Text>
					<Flex
						gap="12">
						<Button
							href="https://github.com/SasukeGh"
							prefixIcon="github" size="s" variant="tertiary">
							GitHub
						</Button>
						<Button
							href="https://snapchat.com/add/tybw.kon"
							prefixIcon="discord" size="s" variant="tertiary">
							Snapchat
						</Button>
					</Flex>
				</Flex>
			</Flex>
			<Analytics /> {/* This line ensures the Analytics component is included */}
		</React.Fragment>
	);
}
