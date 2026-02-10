import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Skeleton } from "@/src/components/ui/skeleton";

describe("Skeleton", () => {
  it("renders and applies classes", () => {
    const { container } = render(<Skeleton className='extra' />);
    const el = container.querySelector('[data-slot="skeleton"]');
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("animate-pulse");
    expect(el).toHaveClass("extra");
  });
});
