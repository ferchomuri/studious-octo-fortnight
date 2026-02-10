import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { DashboardSidebar } from "../../src/components/Sidebar";
import { usePathname } from "next/navigation";
import { useIsMobile } from "../../src/hooks/use-mobile";

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

// Mock custom hooks
jest.mock("../../src/hooks/use-mobile", () => ({
  useIsMobile: jest.fn(),
}));

// Mock next/link
jest.mock("next/link", () => {
  const MockLink = ({
    children,
    href,
    className,
  }: {
    children: React.ReactNode;
    href: string;
    className?: string;
  }) => {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  };
  MockLink.displayName = "Link";
  return MockLink;
});

// Mock navigation data
jest.mock("../../src/lib/interfaces/navigation", () => ({
  dashboardNavigation: [
    {
      title: "Overview",
      href: "/dashboard",
      icon: () => <div data-testid="icon-home" />,
    },
    {
      title: "Releases",
      href: "/dashboard/releases",
      icon: () => <div data-testid="icon-music" />,
    },
  ],
}));

// Mock UI components to isolate DashboardSidebar logic
jest.mock("../../src/components/ui/sidebar", () => ({
  Sidebar: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sidebar">{children}</div>
  ),
  SidebarContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sidebar-content">{children}</div>
  ),
  SidebarMenu: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sidebar-menu">{children}</div>
  ),
  SidebarMenuItem: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sidebar-menu-item">{children}</div>
  ),
  SidebarMenuButton: ({
    children,
    isActive,
    asChild,
  }: {
    children: React.ReactNode;
    isActive?: boolean;
    asChild?: boolean;
  }) => (
    <div data-testid="sidebar-menu-button" data-active={isActive}>
      {children}
    </div>
  ),
  useSidebar: () => ({
    isMobile: false,
    open: true,
    setOpen: jest.fn(),
  }),
}));

describe("DashboardSidebar", () => {
  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard");
    (useIsMobile as jest.Mock).mockReturnValue(false);
  });

  it("renders sidebar navigation items", () => {
    render(<DashboardSidebar />);

    expect(screen.getByText("Overview")).toBeInTheDocument();
    expect(screen.getByText("Releases")).toBeInTheDocument();
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("highlights the active link", () => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard");
    render(<DashboardSidebar />);

    // Check if the button for Overview has active state
    // We mocked SidebarMenuButton to have data-active attribute
    const overviewButton = screen
      .getByText("Overview")
      .closest('[data-testid="sidebar-menu-button"]');
    expect(overviewButton).toHaveAttribute("data-active", "true");
  });

  it("does not highlight inactive links", () => {
    (usePathname as jest.Mock).mockReturnValue("/dashboard");
    render(<DashboardSidebar />);

    const releasesButton = screen
      .getByText("Releases")
      .closest('[data-testid="sidebar-menu-button"]');
    expect(releasesButton).toHaveAttribute("data-active", "false");
  });
});
