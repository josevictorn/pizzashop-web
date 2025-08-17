import { BarChart } from 'lucide-react';
import { LabelList, Pie, PieChart } from 'recharts';
import colors from 'tailwindcss/colors';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

const data = [
  { product: 'pepperoni', amount: 40, fill: colors.sky[500] },
  { product: 'mussarela', amount: 30, fill: colors.amber[500] },
  { product: 'marguerita', amount: 50, fill: colors.violet[500] },
  { product: 'quatroQueijos', amount: 16, fill: colors.emerald[500] },
  { product: 'frangoFrito', amount: 26, fill: colors.rose[500] },
];

const chartConfig = {
  amount: {
    label: 'Quantidade',
  },
  pepperoni: {
    label: 'Pepperoni',
    color: 'var(--chart-1)',
  },
  mussarela: {
    label: 'Mussarela',
    color: 'var(--chart-2)',
  },
  marguerita: {
    label: 'Marguerita',
    color: 'var(--chart-3)',
  },
  quatroQueijos: {
    label: '4 Queijos',
    color: 'var(--chart-4)',
  },
  frangoFrito: {
    label: 'Frango frito',
    color: 'var(--chart-5)',
  },
} satisfies ChartConfig;

export function PopularProductsChart() {
  return (
    <Card className="col-span-3">
      <CardHeader className="pb-8">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <BarChart className="text-muted-foreground size-4" />
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="[&_.recharts-text]:fill-background mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="amount" hideLabel />}
            />
            <Pie data={data} dataKey="amount">
              <LabelList
                dataKey="product"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
