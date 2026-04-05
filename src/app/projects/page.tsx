"use client";

import { Analytics } from '@vercel/analytics/react';
import React from 'react';
import { Heading, Text, Flex, Button, Grid, Icon, Background } from '@/once-ui/components';
import Link from 'next/link';

export default function Projects() {
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
			href: "mailto:doktakobby@gmail.com", // Changed to mailto for functional email
			title: "Email",
			description: "For professional inquiries.",
		},
	];

	return (
		<React.Fragment>
			<Flex
				fillWidth paddingTop="l" paddingX="l"
				direction="column" alignItems="center" flex={1} minHeight="100vh">
				
				{/* The Background component with original settings */}
				<Background
					dots={false}
					gradient={true} />

				<Flex
					position="relative"
					as="section" overflow="hidden"
					fillWidth maxWidth={64}
					direction="column" alignItems="center" flex={1}>
					
					<Flex
						as="main"
						direction="column" justifyContent="center"
						fillWidth fillHeight padding="l" gap="l">
						
						<Heading variant="display-strong-s">Projects</Heading>
						
						<Grid
							radius="l"
							border="neutral-medium"
							borderStyle="solid-1"
							columns="repeat(3, 1fr)"
							tabletColumns="1col"
							mobileColumns="1col"
							fillWidth>
							{links.map((link) => {
								const isEmail = link.title === "Email";
								
								/* Common inner content for both Link and regular Flex */
								const innerContent = (
									<Flex
										fillWidth padding="l" gap="8"
										direction="column">
										<Flex
											fillWidth gap="12"
											alignItems="center">
											<Text
												variant="body-strong-m" onBackground="neutral-strong">
												{link.title}
											</Text>
											{!isEmail && <Icon size="s" name="arrowUpRight" />}
										</Flex>
										<Text
											variant="body-default-s" onBackground="neutral-weak">
											{link.description}
										</Text>
									</Flex>
								);

								return isEmail ? (
									/* Email as a regular non-link Button/Card */
									<Flex key={link.title} fillWidth>
										{innerContent}
									</Flex>
								) : (
									/* Regular Links */
									<Link
										target="_blank"
										key={link.href}
										href={link.href}>
										{innerContent}
									</Link>
								);
							})}
						</Grid>
					</Flex>
				</Flex>

				{/* Footer */}
				<Flex
					as="footer"
					position="relative"
					fillWidth paddingX="l" paddingY="m"
					justifyContent="space-between"
					marginTop="auto">
					<Text
						variant="body-default-s" onBackground="neutral-weak">
						© 2026 KON, <Link href="https://github.com/SasukeGh">MIT License</Link>
					</Text>
					<Flex gap="12">
						<Button
							href="/"
							prefixIcon="home" size="s" variant="secondary">
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
		</React.Fragment>
	);
}
