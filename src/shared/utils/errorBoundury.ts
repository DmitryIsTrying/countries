import { AxiosError } from "axios";
import { Dispatch } from "redux";
import { setCountries } from "@CountryFind";
import { setErrorField, setStatus } from "@app";

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
