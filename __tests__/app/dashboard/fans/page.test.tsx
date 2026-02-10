import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FansPage from "../../../../src/app/dashboard/fans/page";

jest.mock("@/src/lib/mock-data", () => ({
  followerGrowthData: [{ date: "2024-01-01", value: 1 }],
  topLocationsData: [{ location: "MX", value: 10 }],
  engagementMetricsData: [
    { label: "Likes", value: 10 },
    { label: "Shares", value: 5 },
  ],
  recentReleases: [
    { id: "1", title: "Release 1", streams: 10 },
    { id: "2", title: "Release 2", streams: 30 },
    { id: "3", title: "Release 3", streams: 20 },
    { id: "4", title: "Release 4", streams: 40 },
    { id: "5", title: "Release 5", streams: 5 },
  ],
}));

jest.mock("@/src/components/fans/FollowerGrowthChart", () => ({
  FollowerGrowthChart: () => <div data-testid='follower-growth-chart' />,
}));

jest.mock("@/src/components/fans/TopLocationsList", () => ({
  TopLocationsList: () => <div data-testid='top-locations-list' />,
}));

jest.mock("@/src/components/fans/EngagementMetricCard", () => ({
  EngagementMetricCard: () => <div data-testid='engagement-metric-card' />,
}));

jest.mock("@/src/components/releases/ReleaseCard", () => ({
  ReleaseCard: () => <div data-testid='release-card' />,
}));

describe("Dashboard Fans Page", () => {
  it("renders headings, metrics, and releases", () => {
    render(<FansPage />);

    expect(screen.getByText(/fan engagement/i)).toBeInTheDocument();
    expect(
      screen.getByText(/connect with your audience worldwide/i),
    ).toBeInTheDocument();
    expect(screen.getByTestId("follower-growth-chart")).toBeInTheDocument();
    expect(screen.getByTestId("top-locations-list")).toBeInTheDocument();
    expect(screen.getAllByTestId("engagement-metric-card")).toHaveLength(2);
    expect(screen.getByText(/fan favorites/i)).toBeInTheDocument();
    expect(screen.getAllByTestId("release-card")).toHaveLength(4);
  });
});
