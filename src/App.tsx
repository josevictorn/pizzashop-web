import { QueryClientProvider } from '@tanstack/react-query';
import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Toaster } from 'sonner';

import { ThemeProvider } from './components/theme/theme-provider';
import './index.css';
import { queryClient } from './lib/react-query';
import { NotFound } from './pages/404';
import { routeTree } from './route-tree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <ThemeProvider storageKey="pizzashop-theme" defaultTheme="light">
      <Toaster richColors />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} defaultNotFoundComponent={NotFound} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
