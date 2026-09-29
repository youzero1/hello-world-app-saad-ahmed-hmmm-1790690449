import { createFileRoute } from '@tanstack/react-router';
import { Greeting } from '@/components/Greeting';

export const Route = createFileRoute('/')({
  component: HomePage,
});

function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-16 sm:px-10">
      <Greeting />
    </main>
  );
}
