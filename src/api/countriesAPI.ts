import { CountryInfo } from "bll/country.types";
import { instance } from "./instance";

export const countriesAPI = {
  getCountries() {
    return instance.get<CountryInfo[]>("all");
  },
};
