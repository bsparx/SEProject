"use client"

import { TrendingUp } from "lucide-react"
import { LabelList, Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

export default function IncomeBarChart({incomeCategory}) {
     if (!incomeCategory || incomeCategory.length === 0) {
    return (
      <Card className="flex flex-col items-center justify-center h-full">
        <CardHeader>
          <CardTitle>Income Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center flex-grow">
          <div className="text-center text-gray-500">
            <p className="text-xl mb-2">No Incomes Recorded</p>
            <p className="text-sm">Start tracking your incomes to see insights</p>
          </div>
        </CardContent>
      </Card>
    );
  }
    const chartData = incomeCategory.map((category) => {
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
        SALARY: {
          label: "Salary",
          color: "hsl(var(--incomechart-1))",
        },
        FREELANCE: {
          label: "Freelance",
          color: "hsl(var(--incomechart-2))",
        },
        INVESTMENT: {
          label: "Investment",
          color: "hsl(var(--incomechart-3))",
        },
        RENTAL: {
          label: "Rental",
          color: "hsl(var(--incomechart-4))",
        },
        SIDE_HUSTLE: {
          label: "Side Hustle",
          color: "hsl(var(--incomechart-5))",
        },
        BONUS: {
          label: "Bonus",
          color: "hsl(var(--incomechart-6))",
        },
        GIFT: {
          label: "gift",
          color: "hsl(var(--incomechart-7))",
        },
        PASSIVE_INCOME: {
          label: "Passive Income ",
          color: "hsl(var(--incomechart-8))",
        },
        REFUND: {
          label: "Refund",
          color: "hsl(var(--incomechart-9))",
        },
        OTHER: {
          label: "Other",
          color: "hsl(var(--incomechart-10))",
        },
      } satisfies ChartConfig;
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0 ">
        <CardTitle>Income Distribution</CardTitle>

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
          Showing the Distribution of all your past incomes
        </div>
      </CardFooter>
    </Card>
  )
}
