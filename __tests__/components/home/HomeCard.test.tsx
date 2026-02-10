import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";

import { HomeCard } from "@/src/components/home/HomeCard";

describe("HomeCard", () => {
  it("renders title, value, and trend", () => {
    const Icon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
      (props, ref) => <svg ref={ref} data-testid='home-icon' {...props} />,
    );
    Icon.displayName = "Icon";

    render(
      <HomeCard
        title='Total Streams'
        value={100}
        icon={Icon}
        trend='12.3%'
        trendDirection='up'
        iconGradient='from-blue-500 to-cyan-400'
      />,
    );

    expect(screen.getByText(/total streams/i)).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText(/12.3%/i)).toBeInTheDocument();
  });
});
