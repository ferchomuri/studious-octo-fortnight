import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";
import { useIsMobile } from "@/src/hooks/use-mobile";

jest.mock("@/src/hooks/use-mobile", () => ({
  useIsMobile: jest.fn(),
}));

const mockUseIsMobile = useIsMobile as jest.Mock;

describe("Sidebar components", () => {
  beforeEach(() => {
    mockUseIsMobile.mockReturnValue(false);
    document.cookie = "";
  });

  it("renders simple sidebar when collapsible is none", () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar collapsible='none'>Content</Sidebar>
      </SidebarProvider>,
    );
    const sidebar = container.querySelector('[data-slot="sidebar"]');
    expect(sidebar).toBeInTheDocument();
  });

  it("SidebarTrigger toggles sidebar state (writes cookie)", () => {
    render(
      <SidebarProvider>
        <SidebarTrigger />
      </SidebarProvider>,
    );

    const trigger = screen.getByRole("button", { name: /toggle sidebar/i });
    fireEvent.click(trigger);

    expect(document.cookie).toEqual(expect.stringContaining("sidebar_state="));
  });

  it("sets data attributes when collapsed on desktop", () => {
    const { container } = render(
      <SidebarProvider defaultOpen={false}>
        <Sidebar collapsible='icon'>Content</Sidebar>
      </SidebarProvider>,
    );

    const sidebar = container.querySelector('[data-slot="sidebar"]');
    expect(sidebar).toHaveAttribute("data-state", "collapsed");
    expect(sidebar).toHaveAttribute("data-collapsible", "icon");
  });

  it("keyboard shortcut toggles sidebar (writes cookie)", () => {
    render(
      <SidebarProvider>
        <SidebarTrigger />
      </SidebarProvider>,
    );

    fireEvent.keyDown(window, { key: "b", ctrlKey: true });

    expect(document.cookie).toEqual(expect.stringContaining("sidebar_state="));
  });
});
