import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../../../../src/app/dashboard/home/page";

jest.mock("@/src/lib/mock-data", () => ({
  homeData: [{ label: "Plays", value: "10" }],
  totalSalesData: [{ label: "Total", value: 10 }],
  salesPerDay: [{ date: "2024-01-01", value: 1 }],
  releasesPerStreams: [{ title: "Release A", streams: 100 }],
}));

jest.mock("@/src/components/home/HomeSection", () => ({
  HomeSection: () => <div data-testid='home-section' />,
}));

jest.mock("@/src/components/home/charts/TotalSalesChart", () => ({
  TotalSalesChart: () => <div data-testid='total-sales-chart' />,
}));

jest.mock("@/src/components/home/charts/SalesTrendChart", () => ({
  SalesTrendChart: () => <div data-testid='sales-trend-chart' />,
}));

jest.mock("@/src/components/home/charts/TopReleasesChart", () => ({
  TopReleasesChart: () => <div data-testid='top-releases-chart' />,
}));

describe("Dashboard Home Page", () => {
  it("renders the headline and home sections", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/here, your stats are waiting for you/i),
    ).toBeInTheDocument();
    expect(screen.getByTestId("home-section")).toBeInTheDocument();
    expect(screen.getByTestId("total-sales-chart")).toBeInTheDocument();
    expect(screen.getByTestId("sales-trend-chart")).toBeInTheDocument();
    expect(screen.getByTestId("top-releases-chart")).toBeInTheDocument();
  });
});
