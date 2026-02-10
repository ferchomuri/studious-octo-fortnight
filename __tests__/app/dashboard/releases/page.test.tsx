import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ReleasesPage from "../../../../src/app/dashboard/releases/page";

jest.mock("@/src/lib/mock-data", () => ({
  recentReleases: [
    { id: "1", title: "Release 1", streams: 10 },
    { id: "2", title: "Release 2", streams: 20 },
    { id: "3", title: "Release 3", streams: 30 },
  ],
}));

jest.mock("@/src/components/releases/ReleaseCard", () => ({
  ReleaseCard: () => <div data-testid='release-card' />,
}));

describe("Dashboard Releases Page", () => {
  it("renders headings and release cards", () => {
    render(<ReleasesPage />);

    expect(screen.getByText(/recent releases/i)).toBeInTheDocument();
    expect(
      screen.getByText(/your latest tracks and albums/i),
    ).toBeInTheDocument();
    expect(screen.getAllByTestId("release-card")).toHaveLength(3);
  });
});
