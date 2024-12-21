import { AxiosError } from "axios";
import { setErrorField, setStatus } from "bll/appReducer";
import { setCountries } from "bll/countriesReducer";
import { Dispatch } from "redux";

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
