import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  ChartContainer,
  ChartConfig,
  ChartLegendContent,
  ChartStyle,
  ChartTooltipContent,
} from "@/src/components/ui/chart";

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
} satisfies ChartConfig;

describe("Chart", () => {
  it("renders chart container correctly", () => {
    render(
      <ChartContainer config={chartConfig} className="h-[200px] w-full">
        <div>Chart Content</div>
      </ChartContainer>,
    );
    const chart = screen.getByText("Chart Content");
    expect(chart).toBeInTheDocument();
  });

  it("renders chart with custom id", () => {
    const { container } = render(
      <ChartContainer config={chartConfig} id="custom-chart-id">
        <div>Chart Content</div>
      </ChartContainer>,
    );

    expect(
      container.querySelector('[data-chart="chart-custom-chart-id"]'),
    ).toBeInTheDocument();
  });

  it("renders chart styles when colors are configured", () => {
    const { container } = render(
      <ChartStyle id="chart-test" config={chartConfig} />,
    );

    const style = container.querySelector("style");
    expect(style).toBeInTheDocument();
    expect(style?.textContent).toContain("--color-desktop: #2563eb");
  });

  it("renders tooltip content with label and value", () => {
    render(
      <ChartContainer config={chartConfig}>
        <ChartTooltipContent
          active
          label="desktop"
          payload={[
            {
              dataKey: "desktop",
              name: "desktop",
              value: 1200,
              color: "#2563eb",
              payload: { fill: "#2563eb" },
              type: "line",
            },
          ]}
        />
      </ChartContainer>,
    );

    expect(screen.getAllByText("Desktop")).toHaveLength(2);
    expect(screen.getByText(/1[.,]200/)).toBeInTheDocument();
  });

  it("renders legend content from config", () => {
    render(
      <ChartContainer config={chartConfig}>
        <ChartLegendContent
          payload={[
            {
              dataKey: "mobile",
              value: "mobile",
              color: "#60a5fa",
              type: "line",
            },
          ]}
        />
      </ChartContainer>,
    );

    expect(screen.getByText("Mobile")).toBeInTheDocument();
  });

  it("throws when tooltip content is used without container", () => {
    expect(() =>
      render(<ChartTooltipContent active payload={[]} />),
    ).toThrow("useChart must be used within a <ChartContainer />");
  });
});
