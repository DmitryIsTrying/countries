import { errorBoundury } from "shared/utils/errorBoundury";

import { CountryInfo } from "./types/country.types";
import { AppThunk } from "app/store";
import { countriesAPI } from "../api";
import { setErrorField, setStatus } from "@app";

export type Region = "Americas" | "Africa" | "Asia" | "Europe" | "Oceania" | "All";

const initState = {
  countries: [] as CountryInfo[],
  filterRegion: "All" as Region,
};

export type CountriesReducer = typeof initState;

export const countriesReducer = (
  state: CountriesReducer = initState,
  action: CountriesActions
): CountriesReducer => {
  switch (action.type) {
    case "SET_COUNTRIES": {
      return { ...state, countries: [...action.countries] };
    }
    case "SET_REGION": {
      return { ...state, filterRegion: action.region };
    }
    default:
      return state;
  }
};

// actions
export const setCountries = (countries: CountryInfo[]) =>
  ({ type: "SET_COUNTRIES", countries } as const);
export const setFilterRegion = (region: Region) => ({ type: "SET_REGION", region } as const);

//thunks
export const fetchCountriesTC = (): AppThunk => async (dispatch) => {
  try {
    dispatch(setStatus("PENDING"));
    dispatch(setErrorField(null));
    const res = await countriesAPI.getCountries();
    dispatch(setCountries(res.data));

    dispatch(setStatus("SUCCEEDED"));
  } catch (err) {
    errorBoundury(err, dispatch);
  }
};

export const searchCountriesTC =
  ({ search, isFull = false }: { search: string; isFull?: boolean }): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(setStatus("PENDING"));
      dispatch(setErrorField(null));
      const res = await countriesAPI.searchCountries({ search, isFull });
      dispatch(setCountries(res.data));
      dispatch(setStatus("SUCCEEDED"));
    } catch (err) {
      errorBoundury(err, dispatch);
    }
  };

//types
type SetCountries = ReturnType<typeof setCountries>;
type SetFilterRegion = ReturnType<typeof setFilterRegion>;

export type CountriesActions = SetCountries | SetFilterRegion;
