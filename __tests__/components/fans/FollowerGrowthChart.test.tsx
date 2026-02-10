import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { FollowerGrowthChart } from "@/src/components/fans/FollowerGrowthChart";

jest.mock("recharts", () => ({
  AreaChart: ({ children }: { children: ReactNode }) => <svg>{children}</svg>,
  Area: () => <div />,
  CartesianGrid: () => <div />,
  XAxis: () => <div />,
  YAxis: () => <div />,
}));

jest.mock("@/src/components/ui/card", () => ({
  Card: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardHeader: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardTitle: ({ children }: { children: ReactNode }) => <h3>{children}</h3>,
  CardDescription: ({ children }: { children: ReactNode }) => <p>{children}</p>,
  CardContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
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

describe("FollowerGrowthChart", () => {
  it("renders the header copy", () => {
    render(
      <FollowerGrowthChart
        data={[
          { month: "Jan", followers: 1000 },
          { month: "Feb", followers: 1200 },
        ]}
      />,
    );

    expect(screen.getByText(/follower growth/i)).toBeInTheDocument();
    expect(screen.getByText(/monthly follower count/i)).toBeInTheDocument();
  });
});
