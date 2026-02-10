import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DashboardLayout from "../../../src/app/dashboard/layout";

describe("DashboardLayout", () => {
  it("renders children inside the layout wrapper", () => {
    const { container } = render(
      <DashboardLayout>
        <div>Dashboard child</div>
      </DashboardLayout>,
    );

    expect(screen.getByText(/dashboard child/i)).toBeInTheDocument();
    expect(container.firstChild).toHaveClass("h-screen");
  });
});
