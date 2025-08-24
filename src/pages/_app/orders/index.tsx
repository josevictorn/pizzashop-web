import { getOrders } from '@/api/get-orders';
import { useQuery } from '@tanstack/react-query';
import { createFileRoute, useNavigate } from '@tanstack/react-router';
import z from 'zod';

import { Pagination } from '@/components/pagination';
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import { OrderTableFilters } from './-components/order-table-filters';
import { OrderTableRow } from './-components/order-table-row';

export const searchSchema = z.object({
  page: z.coerce.number().default(1),
});

export const Route = createFileRoute('/_app/orders/')({
  component: Orders,
  validateSearch: searchSchema,
});

export function Orders() {
  const { page } = Route.useSearch();
  const navigate = useNavigate({ from: Route.fullPath });

  const { data: result } = useQuery({
    queryKey: ['orders', page],
    queryFn: () => getOrders({ pageIndex: page }),
  });

  function handlePaginate(pageIndex: number) {
    navigate({ search: (prev) => ({ ...prev, page: pageIndex }) });
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <OrderTableFilters />

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {result &&
                  result.orders.map((order) => {
                    return <OrderTableRow key={order.orderId} order={order} />;
                  })}
              </TableBody>
            </Table>
          </div>
          {result && (
            <Pagination
              onPageChange={handlePaginate}
              pageIndex={result.meta.pageIndex}
              totalCount={result.meta.totalCount}
              perPage={result.meta.perPage}
            />
          )}
        </div>
      </div>
    </>
  );
}
