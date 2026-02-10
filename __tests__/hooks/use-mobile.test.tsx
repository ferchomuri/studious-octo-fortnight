import { renderHook, act, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useIsMobile } from "@/src/hooks/use-mobile";

describe("useIsMobile", () => {
  const listeners = new Set<() => void>();

  beforeEach(() => {
    listeners.clear();
    window.matchMedia = jest.fn().mockImplementation((query: string) => ({
      matches: window.innerWidth < 768,
      media: query,
      addEventListener: (_event: string, cb: () => void) => listeners.add(cb),
      removeEventListener: (_event: string, cb: () => void) =>
        listeners.delete(cb),
    }));
  });

  it("returns true when width is below breakpoint", async () => {
    window.innerWidth = 500;

    const { result } = renderHook(() => useIsMobile());

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });

  it("updates when the viewport changes", async () => {
    window.innerWidth = 900;

    const { result } = renderHook(() => useIsMobile());

    await waitFor(() => {
      expect(result.current).toBe(false);
    });

    window.innerWidth = 600;
    act(() => {
      listeners.forEach((cb) => cb());
    });

    await waitFor(() => {
      expect(result.current).toBe(true);
    });
  });
});
