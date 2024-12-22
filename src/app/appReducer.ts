import { checkThemeSettings } from "@shared/utils";

export type AppStatus = "IDLE" | "PENDING" | "FAILED" | "SUCCEEDED";
export type ThemeMode = "light" | "dark";

const initState = {
  status: "PENDING" as AppStatus,
  error: null as null | string,
  theme: checkThemeSettings(),
};

export type AppState = typeof initState;

export const appReducer = (state: AppState = initState, action: AppStateActions): AppState => {
  switch (action.type) {
    case "SET_STATUS": {
      return { ...state, status: action.status };
    }
    case "SET_ERROR": {
      return { ...state, error: action.error };
    }
    case "SET_THEME": {
      return { ...state, theme: action.theme };
    }
    default:
      return state;
  }
};

//actions
export const setStatus = (status: AppStatus) =>
  ({
    type: "SET_STATUS",
    status,
  } as const);

export const setErrorField = (error: null | string) =>
  ({
    type: "SET_ERROR",
    error,
  } as const);

export const setTheme = (theme: ThemeMode) =>
  ({
    type: "SET_THEME",
    theme,
  } as const);

//types
type SetStatus = ReturnType<typeof setStatus>;
type SetErrorField = ReturnType<typeof setErrorField>;
type SetTheme = ReturnType<typeof setTheme>;

export type AppStateActions = SetStatus | SetErrorField | SetTheme;
