import { createFileRoute, Link } from '@tanstack/react-router';

export const Route = createFileRoute('/_home/')({
  component: Index,
  head: () => ({
    meta: [
      {
        title: 'Home',
      },
    ],
  }),
});

function Index() {
  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
      <Link to="/about">Go to About</Link>
    </div>
  );
}
