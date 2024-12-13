// app/routes/cloud-exam-quiz.tsx
import type { MetaFunction } from "@vercel/remix";
import { Button, Card, Container, Text, Heading, Flex } from "@radix-ui/themes";
import { generateMetaTags } from "~/utils/generateMetaTags";

export const meta: MetaFunction = () => generateMetaTags({
  title: 'Cloud Exam Quiz | Mobile App for Cloud Certification',
  description: 'Cloud Exam Quiz is a mobile app for fast and successful learning of cloud certifications'
});

export default function CloudExamQuiz() {
  const sharedCardStyle = {
    background: 'linear-gradient(145deg, rgba(16, 16, 16, 0.5) 0%, rgba(0, 0, 0, 0.9) 100%)',
    backdropFilter: 'blur(10px)',
  };

  return (
    <>
      {/* Navigation Bar */}
      <Card 
        size="1" 
        style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          ...sharedCardStyle
        }}
      >
        <Container size="4">
          <Flex align="center" justify="between" py="4">
            <Flex align="center" gap="4">
              <Text size="5" weight="bold">Cloud Exam Quiz</Text>
            </Flex>
            <Flex gap="6">
              <Text size="2" weight="medium">Features</Text>
              <Text size="2" weight="medium">Pricing</Text>
              <Text size="2" weight="medium">About</Text>
              <Button size="2" variant="soft">Get Started</Button>
            </Flex>
          </Flex>
        </Container>
      </Card>

      {/* Main Content */}
      <Container size="4" style={{ marginTop: '80px' }}>
        <Card size="5" style={{ minHeight: '90vh', ...sharedCardStyle }}>
          <Flex 
            direction="row" 
            gap="9" 
            align="center" 
            justify="between" 
            style={{ height: '100%' }}
          >
            {/* Left Column */}
            <Flex direction="column" gap="5" style={{ flex: 1 }}>
              <Heading 
                size="9" 
                weight="bold"
              >
                Do you have a Cloud Exam?
              </Heading>

              <Heading 
                size="6" 
                weight="regular" 
                color="gray"
              >
                Cloud Exam Quiz is a mobile app for fast and successful learning
              </Heading>

              <Text 
                size="4" 
                color="gray"
                style={{ letterSpacing: '0.5px' }}
              >
                Dart, Flutter, Hive
              </Text>

              <Button 
                size="4" 
                style={{ width: 'fit-content', marginTop: '2rem' }}
              >
                Discover now
              </Button>
            </Flex>

            {/* Right Column */}
            <Flex 
              justify="center" 
              align="center" 
              style={{ flex: 1 }}
            >
              <img
                src="/images/cloud-exam-quiz-mobile-mockup.png"
                alt="Cloud Exam Quiz App"
                style={{ 
                  maxWidth: '100%',
                  height: 'auto',
                  objectFit: 'contain'
                }}
              />
            </Flex>
          </Flex>
        </Card>
      </Container>
    </>
  );
}