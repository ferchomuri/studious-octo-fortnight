import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Input } from "@/src/components/ui/input";

describe("Input", () => {
  it("renders with placeholder and data-slot", () => {
    const { container } = render(<Input placeholder='Enter value' />);
    const input = screen.getByPlaceholderText(/enter value/i);
    expect(input).toBeInTheDocument();
    expect(container.querySelector('[data-slot="input"]')).toBeInTheDocument();
  });

  it("respects the type prop and className", () => {
    const { container } = render(
      <Input type='password' className='custom-class' />,
    );
    const el = container.querySelector('[data-slot="input"]');
    expect(el).toHaveClass("custom-class");
    expect(el).toHaveAttribute("type", "password");
  });
});
