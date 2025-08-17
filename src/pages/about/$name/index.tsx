import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/about/$name/')({
  component: About,
});

function About() {
  const { name } = Route.useParams();
  return <div>Hello "{name}"!</div>;
}
