import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { SalesPerformanceChart } from "@/src/components/analytics/charts/SalesPerformanceChart";

jest.mock("lucide-react", () => ({
  TrendingUp: () => <svg data-testid='icon-trending' />,
}));

jest.mock("recharts", () => ({
  AreaChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Area: () => <div />,
  CartesianGrid: () => <div />,
  XAxis: () => <div />,
}));

jest.mock("@/src/components/ui/card", () => ({
  Card: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardHeader: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardTitle: ({ children }: { children: ReactNode }) => <h3>{children}</h3>,
  CardDescription: ({ children }: { children: ReactNode }) => <p>{children}</p>,
  CardContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardFooter: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

jest.mock("@/src/components/ui/chart", () => ({
  ChartContainer: ({ children }: { children: ReactNode }) => (
    <div data-testid='chart-container'>{children}</div>
  ),
  ChartTooltip: ({ children }: { children?: ReactNode }) => (
    <div>{children}</div>
  ),
  ChartTooltipContent: () => <div data-testid='chart-tooltip-content' />,
}));

describe("SalesPerformanceChart", () => {
  it("renders headers and footer copy", () => {
    render(
      <SalesPerformanceChart
        data={[
          { period: "Jan", value: 10 },
          { period: "Feb", value: 20 },
        ]}
      />,
    );

    expect(screen.getByText(/sales performance/i)).toBeInTheDocument();
    expect(
      screen.getByText(/monthly sales overview for the year/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/trending up by 5.2% this month/i),
    ).toBeInTheDocument();
  });
});
