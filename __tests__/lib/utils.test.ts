import { cn } from "../../src/lib/utils";

describe("utils", () => {
  describe("cn", () => {
    it("merges class names correctly", () => {
      expect(cn("class1", "class2")).toBe("class1 class2");
    });

    it("handles conditional classes", () => {
      expect(cn("class1", true && "class2", false && "class3")).toBe(
        "class1 class2",
      );
    });

    it("merges tailwind classes correctly", () => {
      expect(cn("px-2 py-1", "p-4")).toBe("p-4");
    });

    it("handles arrays of classes", () => {
      expect(cn(["class1", "class2"])).toBe("class1 class2");
    });

    it("handles objects of classes", () => {
      expect(cn({ class1: true, class2: false })).toBe("class1");
    });
  });
});
