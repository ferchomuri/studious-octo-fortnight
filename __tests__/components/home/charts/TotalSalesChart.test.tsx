import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { TotalSalesChart } from "@/src/components/home/charts/TotalSalesChart";

jest.mock("lucide-react", () => ({
  TrendingUp: () => <svg data-testid='icon-trending' />,
}));

jest.mock("recharts", () => ({
  RadialBarChart: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
  RadialBar: () => <div />,
  PolarGrid: () => <div />,
  PolarRadiusAxis: ({ children }: { children: ReactNode }) => (
    <div>{children}</div>
  ),
  Label: () => <div />,
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
}));

describe("TotalSalesChart", () => {
  it("renders title, description, and footer copy", () => {
    render(
      <TotalSalesChart
        data={{
          label: "Total Sales",
          value: 50,
          goal: 100,
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: /total sales/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/current period progress/i)).toBeInTheDocument();
    expect(
      screen.getByText(/trending up by 5.2% this month/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/showing total sales for the last 30 days/i),
    ).toBeInTheDocument();
  });
});
