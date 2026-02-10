import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { TopReleasesChart } from "@/src/components/home/charts/TopReleasesChart";

jest.mock("lucide-react", () => ({
  TrendingUp: () => <svg data-testid='icon-trending' />,
}));

jest.mock("recharts", () => ({
  BarChart: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  Bar: () => <div />,
  XAxis: () => <div />,
  YAxis: () => <div />,
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

describe("TopReleasesChart", () => {
  it("renders headers and top track copy", () => {
    render(
      <TopReleasesChart
        data={[
          { title: "Alpha", streams: 100 },
          { title: "Beta", streams: 80 },
        ]}
      />,
    );

    expect(screen.getByText(/top releases/i)).toBeInTheDocument();
    expect(screen.getByText(/most streamed tracks/i)).toBeInTheDocument();
    expect(
      screen.getByText(/top performing track: alpha/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/showing top 5 releases based on total streams/i),
    ).toBeInTheDocument();
  });
});
