import { AxiosError } from "axios";
import { setErrorField, setStatus } from "app/appReducer";
import { Dispatch } from "redux";
import { setCountries } from "features/CountryFind";

export const errorBoundury = (err: unknown, dispatch: Dispatch) => {
  if (err instanceof AxiosError) {
    if (err.status === 404) {
      dispatch(setCountries([]));
    } else {
      dispatch(setErrorField(err.message));
    }
  }

  dispatch(setStatus("FAILED"));
};
