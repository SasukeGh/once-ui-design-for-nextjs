"use client";

import React from 'react';

import { Heading, Text, Flex, Button, Grid, InlineCode, Icon, Logo, Background } from '@/once-ui/components';
import Link from 'next/link';

export default function Home() {
	const links = [
		{
			href: "https://whatsapp.com/channel/0029Va8aNxzJENy5Obt7Tz0t",
			title: "My WhatsApp Channel",
			description: "Join ChillHub,my channel for fun,memes,anime,and tech",
		},
		{
			href: "https://wa.me/233257789272/?text=Hi,+there+Sasuke+Uchiha",
			title: "My WhatsApp Number",
			description: "Contact me here.",
		},
		{
			href: "mailto:doktakobby@gmail.com",
			title: "My email",
			description: "For professional inquiries.",
		},
	];

	return (
		<Flex
			fillWidth paddingTop="l" paddingX="l"
			direction="column" alignItems="center" flex={1}>
			<Background
				dots={false}/>
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
							<Logo size="xl" icon={false} style={{zIndex: '1'}}/>
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
									backdropFilter: 'blur(var(--static-space-1))'}}>
								Start by editing <span className="brand-on-background-medium">app/page.tsx</span>
							</InlineCode>
							<Heading
								variant="display-strong-s">
								Sasuke Uchiha.<br/> Web developer.<br/>Game Developer.<br/>Contact me for any projects at a fee
							</Heading>
							<Button
								href="https://conectarorder.vercel.app"
								suffixIcon="chevronRight"
								variant="secondary">
								My First Main Project
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
					© 2024 SasukeTech, <Link href=" https://raw.githubusercontent.com/SasukeGh/once-ui-design-for-nextjs/main/LICENSE?token=GHSAT0AAAAAACWGN46IT2W2G2F7DGWDK2LQZWW2Q6Q">MIT License</Link>
				</Text>
				<Flex
					gap="12">
					<Button
						href="https://github.com/SasukeGh"
						prefixIcon="github" size="s" variant="tertiary">
						GitHub
					</Button>
					<Button
						href="https://whatsapp.com/channel/0029Va8aNxzJENy5Obt7Tz0t"
						prefixIcon="discord" size="s" variant="tertiary">
						Whatsapp Channel
					</Button>
				</Flex>
			</Flex>
		</Flex>
	);
}
