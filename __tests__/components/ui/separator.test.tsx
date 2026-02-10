import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Separator } from "@/src/components/ui/separator";

describe("Separator", () => {
  it("renders and exposes data-slot", () => {
    const { container } = render(<Separator />);
    const sep = container.querySelector('[data-slot="separator"]');
    expect(sep).toBeInTheDocument();
  });

  it("accepts and applies className", () => {
    const { container } = render(<Separator className='my-sep' />);
    const sep = container.querySelector('[data-slot="separator"]');
    expect(sep).toHaveClass("my-sep");
  });
});
