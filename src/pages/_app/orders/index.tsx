import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/orders/')({
  component: Orders,
});

export function Orders() {
  return (
    <div>
      <h1>Orders</h1>
    </div>
  );
}
