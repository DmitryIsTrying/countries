import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "./useAppDispatch";
import { fetchCountriesTC } from "features/CountryFind";

export const useSearch = (fetchFunction: () => void, delay: number) => {
  const ref = useRef<null | ReturnType<typeof setTimeout>>(null);
  const [search, setSearch] = useState("");
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  // Инициализация search из URL при монтировании
  useEffect(() => {
    const query = searchParams.get("s");
    if (query) {
      setSearch(query);
    }
  }, []);

  // Обновление URL и вызов fetchFunction при изменении search
  useEffect(() => {
    if (search) {
      // Если search не пустой, обновляем параметр s в URL
      setSearchParams({ s: search });
      // Устанавливаем таймер для вызова fetchFunction
      ref.current = setTimeout(fetchFunction, delay);
    } else {
      // если первый рендер  - не удаляем
      if (ref.current) {
        searchParams.delete("s");
        setSearchParams(searchParams);
        dispatch(fetchCountriesTC());
      }
    }

    // Очистка таймера при размонтировании компонента или изменении зависимостей
    return () => {
      if (ref.current) {
        clearTimeout(ref.current);
      }
    };
  }, [search]);

  // Дополнительный useEffect для вызова fetchCountriesTC только после инициализации search
  useEffect(() => {
    const query = searchParams.get("s");
    if (!query) {
      dispatch(fetchCountriesTC());
    }
  }, []);

  return { search, setSearch };
};
