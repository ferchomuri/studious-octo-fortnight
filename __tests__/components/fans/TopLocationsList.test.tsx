import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import type { ReactNode } from "react";
import { TopLocationsList } from "@/src/components/fans/TopLocationsList";

jest.mock("lucide-react", () => ({
  TrendingUp: () => <svg data-testid='icon-trending' />,
}));

jest.mock("@/src/components/ui/card", () => ({
  Card: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardHeader: ({ children }: { children: ReactNode }) => <div>{children}</div>,
  CardTitle: ({ children }: { children: ReactNode }) => <h3>{children}</h3>,
  CardDescription: ({ children }: { children: ReactNode }) => <p>{children}</p>,
  CardContent: ({ children }: { children: ReactNode }) => <div>{children}</div>,
}));

describe("TopLocationsList", () => {
  it("renders location entries with listener counts", () => {
    render(
      <TopLocationsList
        data={[
          {
            city: "Monterrey",
            country: "MX",
            listeners: 1000,
            growth: 12,
            long: -100.3,
            lat: 25.7,
          },
          {
            city: "Guadalajara",
            country: "MX",
            listeners: 250,
            growth: 5,
            long: -103.3,
            lat: 20.7,
          },
        ]}
      />,
    );

    expect(screen.getByText(/top locations/i)).toBeInTheDocument();
    expect(screen.getByText(/where your fans are/i)).toBeInTheDocument();
    expect(screen.getByText(/monterrey/i)).toBeInTheDocument();
    expect(screen.getByText(/1[.,]000 listeners/i)).toBeInTheDocument();
    expect(screen.getByText(/guadalajara/i)).toBeInTheDocument();
    expect(screen.getByText(/250 listeners/i)).toBeInTheDocument();
  });
});
