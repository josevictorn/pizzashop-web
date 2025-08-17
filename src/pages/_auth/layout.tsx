import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_auth')({
  component: AuthLayout,
});

function AuthLayout() {
  return (
    <div>
      <h1>Auth Layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
