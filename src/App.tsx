import { createRouter, RouterProvider } from '@tanstack/react-router';
import { Toaster } from 'sonner';

import './index.css';
import { routeTree } from './route-tree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return (
    <>
      <Toaster richColors />
      <RouterProvider router={router} />
    </>
  );
}
