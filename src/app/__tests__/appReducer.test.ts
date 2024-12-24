import { appReducer, AppState, setErrorField, setStatus, setTheme } from "app/appReducer";
import { beforeEach, describe, expect, it } from "vitest";

let startState: AppState;

beforeEach(() => {
  startState = {
    status: "PENDING",
    error: null,
    theme: "dark",
  };
});

describe("Test app reducer", () => {
  it("status must be changed", () => {
    const endState = appReducer(startState, setStatus("SUCCEEDED"));
    expect(endState.status).toBe("SUCCEEDED");
    expect(endState.status).not.toBe("PENDING");
  });
  it("errorField must be changed", () => {
    const endState = appReducer(startState, setErrorField("Network error"));
    expect(endState.error).toBe("Network error");
    expect(endState.error).not.toBeNull;
  });
  it("Theme must be set", () => {
    const endState = appReducer(startState, setTheme("light"));
    expect(endState.theme).toBe("light");
    expect(endState.theme).not.toBe("dark");
  });
});
