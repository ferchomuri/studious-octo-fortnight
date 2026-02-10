import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { DeviceStatsChart } from "@/src/components/analytics/charts/DeviceStatsChart";

jest.mock("lucide-react", () => ({
  TrendingUp: () => <svg data-testid='icon-trending' />,
}));

jest.mock("recharts", () => ({
  PieChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Pie: () => <div />,
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

describe("DeviceStatsChart", () => {
  it("renders headers and footer copy", () => {
    render(
      <DeviceStatsChart
        data={[
          { device: "Mobile", count: 10, fill: "#000000" },
          { device: "Desktop", count: 5, fill: "#111111" },
        ]}
      />,
    );

    expect(screen.getByText(/device distribution/i)).toBeInTheDocument();
    expect(screen.getByText(/user devices breakdown/i)).toBeInTheDocument();
    expect(
      screen.getByText(/mobile is the dominant platform/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/showing total visitors for the last 6 months/i),
    ).toBeInTheDocument();
  });
});
