import { describe, expect, it } from "vitest";
import { transformNumber } from "../transformNumber";

describe("Test utils", () => {
  it("should format the number correctly", () => {
    const output = transformNumber(12467890);
    expect(output).toBe("12.467.890");
  });
});
