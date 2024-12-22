import { RootState } from "app";

export const selectCountries = (state: RootState) => state.countries.countries;
export const selectFilter = (state: RootState) => state.countries.filterRegion;
