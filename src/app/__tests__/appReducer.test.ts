import { appReducer, AppState, setStatus } from "app/appReducer";
import { beforeEach, describe, expect, it } from "vitest";

let startState: AppState;

beforeEach(() => {
  startState = {
    status: "PENDING",
    error: null,
    theme: "dark",
  };
});

describe(() => {
  it("status must be changed", () => {
    const endState = appReducer(startState, setStatus("SUCCEEDED"));
    expect(endState.status).toBe("SUCCEEDED");
    expect(endState.status).not.toBe("PENDING");
  });
});
