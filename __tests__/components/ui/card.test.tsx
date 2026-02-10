import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/src/components/ui/card";

describe("Card", () => {
  it("renders card and its sub-components correctly", () => {
    render(
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>,
    );

    expect(screen.getByText("Card Title")).toBeInTheDocument();
    expect(screen.getByText("Card Description")).toBeInTheDocument();
    expect(screen.getByText("Card Content")).toBeInTheDocument();
    expect(screen.getByText("Card Footer")).toBeInTheDocument();
  });

  it("renders with correct data-attributes", () => {
    const { container } = render(
      <Card>
        <CardHeader />
        <CardContent />
        <CardFooter />
      </Card>,
    );

    expect(container.querySelector('[data-slot="card"]')).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="card-header"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="card-content"]'),
    ).toBeInTheDocument();
    expect(
      container.querySelector('[data-slot="card-footer"]'),
    ).toBeInTheDocument();
  });
});
