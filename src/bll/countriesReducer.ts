import { countriesAPI } from "api/countriesAPI";
import { CountryInfo } from "./country.types";
import { AppThunk } from "./store";

export type Region = "Americas" | "Africa" | "Asia" | "Europe" | "Oceania" | "All";

const initState = {
  countries: [] as CountryInfo[],
  filterRegion: "All" as Region,
};

type Countries = typeof initState;

export const countriesReducer = (
  state: Countries = initState,
  action: CountriesActions
): Countries => {
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
const setCountries = (countries: CountryInfo[]) => ({ type: "SET_COUNTRIES", countries } as const);
export const setFilterRegion = (region: Region) => ({ type: "SET_REGION", region } as const);

//thunks
export const fetchCountriesTC = (): AppThunk => async (dispatch) => {
  try {
    const res = await countriesAPI.getCountries();
    dispatch(setCountries(res.data));
  } catch (err) {}
};

//types
type SetCountries = ReturnType<typeof setCountries>;
type SetFilterRegion = ReturnType<typeof setFilterRegion>;

export type CountriesActions = SetCountries | SetFilterRegion;
