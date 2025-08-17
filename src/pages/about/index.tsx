import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/about/')({
  component: About,
});

function About() {
  return (
    <div className="p-2">
      <h3>About Hello "/about/"!</h3>
      <Link to="/">Go to Home</Link>
    </div>
  );
}
