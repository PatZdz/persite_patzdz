// app/routes/cloud-exam-quiz.tsx
import type { MetaFunction } from "@vercel/remix";
import { Button, Card, Container, Separator, Text, Heading, Strong } from "@radix-ui/themes";
import { Link } from "@remix-run/react";
import Header from "~/components/Header";
import { generateMetaTags } from "~/utils/generateMetaTags";

export const meta: MetaFunction = () =>
  generateMetaTags({
    title: 'Cloud Exam Quiz | Przygotuj się do egzaminów chmurowych',
    description: 'Cloud Exam Quiz to interaktywna aplikacja mobilna, która pomoże Ci sprawdzić swoją wiedzę z zakresu technologii chmurowych i przygotować się do certyfikacji.'
  });

export default function CloudExamQuiz() {
  return (
    <Container size="2">
      <Card size={{ initial: '2', sm: '5' }}>
        <Header />
        <Separator size="4" my="6" />

        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          {/* Sekcja tekstowa po lewej */}
          <div style={{ flex: '1 1 50%', marginRight: '2rem', minWidth: '300px' }}>
            <Heading size="7" mb="4">Cloud Exam Quiz</Heading>
            <Text as="p" mb="4">
              <Strong>Cloud Exam Quiz</Strong> to nowatorska aplikacja mobilna stworzona specjalnie, aby pomóc Ci skutecznie przygotować się do egzaminów certyfikacyjnych z dziedziny chmury.
            </Text>

            <Text as="p" mb="4">
              Rozwiązuj interaktywne quizy, śledź swoje postępy i odkrywaj obszary, nad którymi warto jeszcze popracować. Idealne narzędzie dla studentów, profesjonalistów oraz firm, które chcą upewnić się, że ich zespoły są gotowe do nowych wyzwań chmurowych.
            </Text>

            <Separator size="2" my="6" />

            <Text as="p" mb="2">✨ Kluczowe funkcje:</Text>
            <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
              <li>Interaktywne quizy z kategorii chmurowych</li>
              <li>Analiza postępów i wyników</li>
              <li>Personalizowane ścieżki nauki</li>
              <li>Aktualna baza pytań z topowych certyfikacji</li>
            </ul>

            <Text as="p" mb="2">🎨 Technologie:</Text>
            <ul style={{ marginLeft: '2em', marginBottom: '1em' }}>
              <li>Flutter – szybkie i responsywne UI</li>
              <li>Firebase – dane i autentykacja w czasie rzeczywistym</li>
              <li>Integracje z chmurowymi usługami (AWS, Azure, GCP)</li>
            </ul>

            <Separator size="4" my="6" />
            <Link to="/">
              <Button size="2" variant="ghost">
                Wróć na stronę główną
              </Button>
            </Link>
          </div>

          {/* Sekcja z mockupem smartfona po prawej */}
          <div style={{ flex: '1 1 40%', display: 'flex', justifyContent: 'center', alignItems: 'center', minWidth: '300px' }}>
            <img
              src="/images/cloud-exam-quiz-mobile-mockup.png"
              alt="Mockup aplikacji Cloud Exam Quiz na smartfonie"
              style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }}
            />
          </div>
        </div>
      </Card>
    </Container>
  );
}