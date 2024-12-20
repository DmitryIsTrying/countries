import { RootState } from "bll/store";

export const selectTheme = (state: RootState) => state.app.theme;
