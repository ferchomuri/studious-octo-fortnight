import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { EngagementMetricCard } from "@/src/components/fans/EngagementMetricCard";

jest.mock("lucide-react", () => ({
  Music2: () => <svg data-testid='icon-music' />,
  UserPlus: () => <svg data-testid='icon-user' />,
  Share2: () => <svg data-testid='icon-share' />,
}));

jest.mock("@/src/components/ui/card", () => ({
  Card: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

describe("EngagementMetricCard", () => {
  it("renders the label, formatted value, and growth", () => {
    render(
      <EngagementMetricCard
        metric={{
          label: "New Followers",
          value: 1500,
          growth: 12,
          icon: "UserPlus",
        }}
      />,
    );

    expect(screen.getByText(/new followers/i)).toBeInTheDocument();
    expect(screen.getByText(/1.5k/i)).toBeInTheDocument();
    expect(screen.getByText(/\+12%/i)).toBeInTheDocument();
  });
});
