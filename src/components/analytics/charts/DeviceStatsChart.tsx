"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

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
import { DeviceDistributionData } from "@/src/lib/interfaces/types";

interface DeviceStatsChartProps {
  data: DeviceDistributionData[];
}

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  Mobile: {
    label: "Mobile",
    color: "var(--chart-1)",
  },
  Desktop: {
    label: "Desktop",
    color: "var(--chart-2)",
  },
  Tablet: {
    label: "Tablet",
    color: "var(--chart-3)",
  },
} satisfies ChartConfig;

export function DeviceStatsChart({ data }: DeviceStatsChartProps) {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader className="items-center pb-0">
        <CardTitle>Device Distribution</CardTitle>
        <CardDescription>User devices breakdown</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Pie
              data={data}
              dataKey="count"
              nameKey="device"
              innerRadius={60}
              strokeWidth={5}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Mobile is the dominant platform <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
