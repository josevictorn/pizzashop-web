import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/_home/')({
  component: Home,
});

export function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}
