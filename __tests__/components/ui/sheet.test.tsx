import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import type { JSX } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
} from "@/src/components/ui/sheet";

jest.mock("radix-ui", () => {
  const passthrough = (Tag: keyof JSX.IntrinsicElements) => {
    const Component = ({
      children,
      ...props
    }: React.PropsWithChildren<Record<string, unknown>>) =>
      React.createElement(Tag as string, props, children);
    Component.displayName = `Passthrough(${String(Tag)})`;
    return Component;
  };

  return {
    Dialog: {
      Root: passthrough("div"),
      Trigger: passthrough("button"),
      Close: passthrough("button"),
      Portal: passthrough("div"),
      Overlay: passthrough("div"),
      Content: passthrough("div"),
      Title: passthrough("h2"),
      Description: passthrough("p"),
    },
  };
});

describe("SheetContent", () => {
  it("renders children and default close button", () => {
    const { container } = render(
      <Sheet>
        <SheetContent side='left'>Hello Sheet</SheetContent>
      </Sheet>,
    );

    expect(screen.getByText(/hello sheet/i)).toBeInTheDocument();

    const content = container.querySelector('[data-slot="sheet-content"]');
    expect(content).toBeInTheDocument();

    const closeBtn = screen.getByRole("button", { name: /close/i });
    expect(closeBtn).toBeInTheDocument();

    expect(content).toHaveClass("left-0");
  });

  it("does not render close button when showCloseButton is false", () => {
    render(
      <Sheet>
        <SheetContent showCloseButton={false}>No Close</SheetContent>
      </Sheet>,
    );

    expect(screen.getByText(/no close/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /close/i })).toBeNull();
  });
});

describe("Sheet layout slots", () => {
  it("renders header, footer, title, and description slots", () => {
    render(
      <Sheet>
        <SheetContent>
          <SheetHeader>Header</SheetHeader>
          <SheetTitle>Title</SheetTitle>
          <SheetDescription>Description</SheetDescription>
          <SheetFooter>Footer</SheetFooter>
        </SheetContent>
      </Sheet>,
    );

    expect(screen.getByText(/header/i)).toBeInTheDocument();
    expect(screen.getByText(/title/i)).toBeInTheDocument();
    expect(screen.getByText(/description/i)).toBeInTheDocument();
    expect(screen.getByText(/footer/i)).toBeInTheDocument();
  });
});
