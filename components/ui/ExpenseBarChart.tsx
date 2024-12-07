"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export default function ExpenseBarChart({ expenseCategory }) {
  if (!expenseCategory || expenseCategory.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center h-full">
        <CardHeader>
          <CardTitle>Expense Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center flex-grow">
          <div className="text-center text-gray-500">
            <p className="text-xl mb-2">No Expenses Recorded</p>
            <p className="text-sm">
              Start tracking your expenses to see insights
            </p>
          </div>
        </CardContent>
      </Card>
    );
  }
  const chartData = expenseCategory.map((category) => {
    const object = {
      browser: category.category,
      visitors: category._sum.amount,
      fill: `var(--color-${category.category})`,
    };
    return object;
  });
  console.log(chartData);

  const chartConfig = {
    visitors: {
      label: "Amount",
    },
    FOOD: {
      label: "Food",
      color: "hsl(var(--chart-1))",
    },
    TRANSPORTATION: {
      label: "Transporation",
      color: "hsl(var(--chart-2))",
    },
    UTILITIES: {
      label: "Utilities",
      color: "hsl(var(--chart-3))",
    },
    ENTERTAINMENT: {
      label: "Entertainment",
      color: "hsl(var(--chart-4))",
    },
    HEALTHCARE: {
      label: "Healthcare",
      color: "hsl(var(--chart-5))",
    },
    EDUCATION: {
      label: "Education",
      color: "hsl(var(--chart-6))",
    },
    SHOPPING: {
      label: "Shopping",
      color: "hsl(var(--chart-7))",
    },
    HOUSING: {
      label: "Housing",
      color: "hsl(var(--chart-8))",
    },
    SAVINGS: {
      label: "Savings",
      color: "hsl(var(--chart-9))",
    },
    OTHER: {
      label: "Other",
      color: "hsl(var(--chart-10))",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col ">
      <CardHeader className="items-center pb-0">
        <CardTitle>Expense Distribution</CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={16}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="leading-none text-muted-foreground">
          Showing the Distribution of all your past expenses
        </div>
      </CardFooter>
    </Card>
  );
}
