import { createRouter, RouterProvider } from '@tanstack/react-router';

import './index.css';
import { routeTree } from './route-tree.gen';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return <RouterProvider router={router} />;
}
