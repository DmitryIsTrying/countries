import { RootState } from "bll/store";

export const selectCountries = (state: RootState) => state.countries.countries;
export const selectFilter = (state: RootState) => state.countries.filterRegion;
