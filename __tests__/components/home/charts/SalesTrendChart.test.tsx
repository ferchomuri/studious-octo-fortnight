import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { SalesTrendChart } from "@/src/components/home/charts/SalesTrendChart";

jest.mock("lucide-react", () => ({
  TrendingUp: () => <svg data-testid='icon-trending' />,
}));

jest.mock("recharts", () => ({
  LineChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Line: () => <div />,
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

describe("SalesTrendChart", () => {
  it("renders headers and footer copy", () => {
    render(
      <SalesTrendChart
        data={[
          { date: "2024-01-01", sales: 10 },
          { date: "2024-01-02", sales: 12 },
        ]}
      />,
    );

    expect(screen.getByText(/sales trend/i)).toBeInTheDocument();
    expect(screen.getByText(/daily sales performance/i)).toBeInTheDocument();
    expect(
      screen.getByText(/trending up by 5.2% this month/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/showing daily sales for the selected period/i),
    ).toBeInTheDocument();
  });
});
