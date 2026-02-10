import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { UserGrowthChart } from "@/src/components/analytics/charts/UserGrowthChart";

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

describe("UserGrowthChart", () => {
  it("renders headers and footer copy", () => {
    render(
      <UserGrowthChart
        data={[{ date: "2024-01-01", totalUsers: 100, activeUsers: 50 }]}
      />,
    );

    expect(screen.getByText(/user growth/i)).toBeInTheDocument();
    expect(screen.getByText(/total vs active users/i)).toBeInTheDocument();
    expect(
      screen.getByText(/steady growth throughout the year/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/showing total and active users/i),
    ).toBeInTheDocument();
  });
});
