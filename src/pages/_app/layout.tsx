import { createFileRoute, Outlet } from '@tanstack/react-router';
import { Pizza } from 'lucide-react';

export const Route = createFileRoute('/_app')({
  component: AppLayout,
});

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <Pizza className="size-5" />
        <span className="font-semibold">pizza.shop</span>
      </div>
      <footer className="text-sm">
        Painel do parceiro &copy; pizza.shop - {new Date().getFullYear()}
      </footer>
      <div>
        <Outlet />
      </div>
    </div>
  );
}
