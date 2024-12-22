import { describe, it, expect, beforeEach } from "vitest";
import { transformNumber } from "../transformNumber";

let input: number;

beforeEach(() => {
  input = 12467890;
});

describe("transformNumber", () => {
  it("should format the number correctly", () => {
    const output = transformNumber(input);
    expect(output).toBe("12.467.890");
  });
});
