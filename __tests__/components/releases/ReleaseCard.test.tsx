import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ImgHTMLAttributes, ReactNode } from "react";
import { ReleaseCard } from "@/src/components/releases/ReleaseCard";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: ImgHTMLAttributes<HTMLImageElement>) => (
    <img {...props} />
  ),
}));

jest.mock("lucide-react", () => ({
  Calendar: () => <svg data-testid='icon-calendar' />,
  Play: () => <svg data-testid='icon-play' />,
}));

jest.mock("@/src/components/ui/badge", () => ({
  Badge: ({ children }: { children: ReactNode }) => <span>{children}</span>,
}));

describe("ReleaseCard", () => {
  it("renders release metadata", () => {
    const expectedDate = new Date("2024-01-02").toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    render(
      <ReleaseCard
        release={{
          id: "1",
          title: "Neon Nights",
          coverImageUrl: "/cover.jpg",
          streams: 2500,
          releaseDate: "2024-01-02",
          type: "single",
        }}
      />,
    );

    expect(screen.getByText(/neon nights/i)).toBeInTheDocument();
    expect(screen.getByText(expectedDate)).toBeInTheDocument();
    expect(screen.getByText(/2.5k/i)).toBeInTheDocument();
    expect(screen.getByText(/single/i)).toBeInTheDocument();
  });
});
