import { fetchCountriesTC } from "bll/countriesReducer";
import { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "./useAppDispatch";

export const useSearch = (fetchFunction: () => void, delay: number) => {
  const ref = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (search) {
      ref.current = setTimeout(fetchFunction, delay);
    } else {
      dispatch(fetchCountriesTC());
    }
    // Очистка таймера при размонтировании компонента или изменении зависимостей
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, [search]);

  return { search, setSearch };
};
