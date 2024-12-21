"use client";

import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  XAxis,
  YAxis,
  Bar,
  ComposedChart,
  Legend,
} from "recharts";

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

const chartData = [
  { day: "Monday", answered: 50, incoming: 80, expertsOnline: 10 },
  { day: "Tuesday", answered: 60, incoming: 90, expertsOnline: 50 },
  { day: "Wednesday", answered: 70, incoming: 100, expertsOnline: 100 },
  { day: "Thursday", answered: 80, incoming: 110, expertsOnline: 150 },
  { day: "Friday", answered: 90, incoming: 60, expertsOnline: 70 },
  { day: "Saturday", answered: 100, incoming: 70, expertsOnline: 18 },
  { day: "Sunday", answered: 110, incoming: 30, expertsOnline: 20 },
];

const chartConfig = {
  answered: {
    label: "Answered",
    color: "hsl(var(--chart-1))",
  },
  incoming: {
    label: "Incoming",
    color: "hsl(var(--chart-2))",
  },
  expertsOnline: {
    label: "Experts Online",
    color: "hsla(47, 100%, 89%, 1)",
  },
} satisfies ChartConfig;

export function SummaryConsultationChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consultations Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-60">
          <ComposedChart
            data={chartData}
            margin={{
              left: -25,
              right: 12,
            }}
          >
            <CartesianGrid
              vertical={false}
              strokeDasharray="5"
              horizontal={true}
            />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
              yAxisId="left"
              width={70}
              orientation="left"
              label={{
                value: "Consultations",
                angle: 270,
                position: "",
                style: { textAnchor: "middle", },
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={5}
              orientation="right"
              yAxisId="right"
              label={{ value: "Experts Online", angle: 270, position: "" }}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar
              dataKey="expertsOnline"
              fill="var(--color-expertsOnline)"
              yAxisId="right"
            />
            <Line
              dataKey="answered"
              type="natural"
              stroke="var(--color-answered)"
              strokeWidth={2}
              yAxisId="left"
            />
            <Line
              dataKey="incoming"
              type="natural"
              stroke="var(--color-incoming)"
              strokeWidth={2}
              yAxisId="left"
            />

            <Legend />
          </ComposedChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
