import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AnalyticsPage from "../../../../src/app/dashboard/analytics/page";

jest.mock("@/src/lib/mock-data", () => ({
  salesAnalytics: [{ label: "Sales", value: 10 }],
  userGrowthData: [{ date: "2024-01-01", value: 5 }],
  deviceDistributionData: [{ label: "Mobile", value: 80 }],
}));

jest.mock("@/src/components/analytics/charts/SalesPerformanceChart", () => ({
  SalesPerformanceChart: () => <div data-testid='sales-performance-chart' />,
}));

jest.mock("@/src/components/analytics/charts/UserGrowthChart", () => ({
  UserGrowthChart: () => <div data-testid='user-growth-chart' />,
}));

jest.mock("@/src/components/analytics/charts/DeviceStatsChart", () => ({
  DeviceStatsChart: () => <div data-testid='device-stats-chart' />,
}));

describe("Dashboard Analytics Page", () => {
  it("renders headings and charts", () => {
    render(<AnalyticsPage />);

    expect(screen.getByText(/analytics overview/i)).toBeInTheDocument();
    expect(
      screen.getByText(/detailed insights into your performance/i),
    ).toBeInTheDocument();
    expect(screen.getByTestId("sales-performance-chart")).toBeInTheDocument();
    expect(screen.getByTestId("user-growth-chart")).toBeInTheDocument();
    expect(screen.getByTestId("device-stats-chart")).toBeInTheDocument();
  });
});
