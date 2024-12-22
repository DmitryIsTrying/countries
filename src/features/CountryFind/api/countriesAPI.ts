import { CountryInfo } from "../model";
import { instance } from "./instance";

export const countriesAPI = {
  getCountries() {
    return instance.get<CountryInfo[]>("all");
  },
  searchCountries({ search, isFull }: { search: string; isFull: boolean }) {
    return instance.get<CountryInfo[]>(`name/${search}`, {
      params: { fullText: isFull },
    });
  },
  getCountryWithCode(code: string) {
    return instance.get<CountryInfo[]>(`alpha/${code}`);
  },
};
