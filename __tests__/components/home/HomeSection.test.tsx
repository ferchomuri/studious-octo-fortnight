import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HomeSection } from "@/src/components/home/HomeSection";

jest.mock("lucide-react", () => ({
  Play: () => <svg data-testid='icon-play' />,
  Users: () => <svg data-testid='icon-users' />,
  DollarSign: () => <svg data-testid='icon-dollar' />,
  Activity: () => <svg data-testid='icon-activity' />,
}));

jest.mock("@/src/components/home/HomeCard", () => ({
  HomeCard: ({ title, value }: { title: string; value: string | number }) => (
    <div data-testid='home-card'>
      {title}: {value}
    </div>
  ),
}));

describe("HomeSection", () => {
  it("formats values and renders four cards", () => {
    render(
      <HomeSection
        data={{
          totalStreams: 123456,
          monthlyListeners: 456789,
          totalRevenue: 98765,
          engagementRate: 4.2,
        }}
      />,
    );

    expect(screen.getAllByTestId("home-card")).toHaveLength(4);
    expect(screen.getByText(/total streams: 123k/i)).toBeInTheDocument();
    expect(screen.getByText(/monthly listeners: 457k/i)).toBeInTheDocument();
    expect(screen.getByText(/revenue: \$98,765/i)).toBeInTheDocument();
    expect(screen.getByText(/engagement rate: 4.2%/i)).toBeInTheDocument();
  });
});
