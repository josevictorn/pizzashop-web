import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div>
      <h1>Apps Layout</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
