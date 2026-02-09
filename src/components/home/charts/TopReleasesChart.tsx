"use client";

import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/src/components/ui/chart";
import { ReleasesPerStreams } from "@/src/lib/interfaces/types";

interface TopReleasesChartProps {
  data: ReleasesPerStreams[];
}

const chartConfig = {
  streams: {
    label: "Streams",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function TopReleasesChart({ data }: TopReleasesChartProps) {
  const chartData = data.slice(0, 5);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Top Releases</CardTitle>
        <CardDescription>Most streamed tracks</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="max-h-[200px] w-full">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: -0,
            }}
          >
            <XAxis type="number" dataKey="streams" hide />
            <YAxis
              dataKey="title"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="streams" fill="var(--color-streams)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          Top performing track: {chartData[0]?.title}{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing top 5 releases based on total streams
        </div>
      </CardFooter>
    </Card>
  );
}
