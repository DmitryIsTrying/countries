import { RootState } from "bll/store";

export const selectTheme = (state: RootState) => state.app.theme;
export const selectStatus = (state: RootState) => state.app.status;
export const selectError = (state: RootState) => state.app.error;
