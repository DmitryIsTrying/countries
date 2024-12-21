import { useLayoutEffect, useState } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { setErrorField, setStatus } from "bll/appReducer";
import { countriesAPI } from "api/countriesAPI";
import { AxiosError } from "axios";

export const useBorder = (code: string) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState<null | string>(null);

  useLayoutEffect(() => {
    async function fetchCode() {
      try {
        dispatch(setStatus("PENDING"));
        const res = await countriesAPI.getCountryWithCode(code);
        dispatch(setStatus("SUCCEEDED"));
        setName(res.data[0].name.common);
      } catch (err) {
        dispatch(setStatus("FAILED"));
        if (err instanceof AxiosError) {
          dispatch(setErrorField(err.message));
        }
      }
    }
    fetchCode();
  }, []);

  return name;
};
