import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/eyebrow";
import { Heading } from "@/components/ui/heading";

export default function HomePage() {
  return (
    <main id="main" className="flex min-h-svh items-center">
      <Container>
        <Eyebrow>Solenne</Eyebrow>
        <Heading as="h1" size="display-lg" className="mt-6">
          Places that stay with you
        </Heading>
      </Container>
    </main>
  );
}
