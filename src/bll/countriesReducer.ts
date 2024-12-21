import { countriesAPI } from "api/countriesAPI";
import { errorBoundury } from "common/utils/errorBoundury";
import { setErrorField, setStatus } from "./appReducer";
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
