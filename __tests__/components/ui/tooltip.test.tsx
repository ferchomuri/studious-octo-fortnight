import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/src/components/ui/tooltip";

describe("Tooltip", () => {
  it("should render trigger and content when used directly", () => {
    render(
      <TooltipProvider>
        <Tooltip defaultOpen>
          <TooltipTrigger>Hover</TooltipTrigger>
          <TooltipContent>Tip text</TooltipContent>
        </Tooltip>
      </TooltipProvider>,
    );

    expect(screen.getByText(/hover/i)).toBeInTheDocument();

    const tooltipContent = document.querySelector(
      '[data-slot="tooltip-content"]',
    );
    expect(tooltipContent).toBeTruthy();
    expect(tooltipContent).toHaveTextContent(/tip text/i);
  });
});
