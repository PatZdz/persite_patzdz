import type { MetaFunction } from "@vercel/remix";
import { Button, Card, Container, Separator, Text, Heading, Strong, Link as RadixLink } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import { generateMetaTags } from "~/utils/generateMetaTags";

export const meta: MetaFunction = () => generateMetaTags({
  title: 'FastApp | Mobile Task Management Solution',
  description: 'FastApp is a revolutionary mobile application for efficient task management, built with Flutter and Firebase.',
});

export default function FastApp() {
  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <Header />
        <Separator size="4" my="6" />

        <Heading size="7" mb="4">FastApp - Mobile Task Management</Heading>
        <Text as="p" mb="4">
          <Strong>FastApp</Strong> is a mobile application designed to revolutionize how you manage tasks and collaborate with your team.
        </Text>

        <Text as="p" mb="4">
          Perfect for professionals, teams, and anyone looking to boost their productivity through smart task management.
        </Text>

        <Separator size="2" my="6" />

        <Text as="p" mb="2">✨ Key Features:</Text>
        <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
          <li>Smart Task Organization</li>
          <li>Real-time Team Collaboration</li>
          <li>Intelligent Notifications</li>
          <li>Performance Analytics Dashboard</li>
        </ul>

        <Text as="p" mb="2">🎨 Technical Highlights:</Text>
        <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
          <li>Built with Flutter for smooth performance</li>
          <li>Firebase backend for real-time updates</li>
          <li>Cross-platform compatibility</li>
          <li>Offline-first architecture</li>
        </ul>

        <Text as="p" mb="2">🚀 Coming in Q1 2025:</Text>
        <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
          <li>Early access program</li>
          <li>Beta testing phase</li>
          <li>Launch roadmap</li>
        </ul>

        <Separator size="4" my="6" />
        <Link to="/">
          <Button size="2" variant="ghost">
            Back to home
          </Button>
        </Link>
      </Card>
    </Container>
  );
}
