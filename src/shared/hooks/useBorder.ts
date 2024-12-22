import { AxiosError } from "axios";
import { setErrorField } from "app/appReducer";
import { useLayoutEffect, useState } from "react";
import { useAppDispatch } from "./useAppDispatch";
import { countriesAPI } from "features/CountryFind";

export const useBorder = (code: string) => {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState<null | string>(null);

  useLayoutEffect(() => {
    async function fetchCode() {
      try {
        setIsLoading(true);
        const res = await countriesAPI.getCountryWithCode(code);
        setName(res.data[0].name.common);
      } catch (err) {
        if (err instanceof AxiosError) {
          dispatch(setErrorField(err.message));
        }
      } finally {
        setIsLoading(false);
      }
    }
    fetchCode();
  }, []);

  return { name, isLoading };
};
