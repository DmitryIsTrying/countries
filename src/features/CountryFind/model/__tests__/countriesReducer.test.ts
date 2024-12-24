/**
 * @vitest-environment jsdom
 */

import { describe, test, expect } from "vitest";
import {
  CountriesReducer,
  countriesReducer,
  Region,
  setCountries,
  setFilterRegion,
} from "../countriesReducer";

describe("countriesReducer", () => {
  const initialState: CountriesReducer = {
    countries: [],
    filterRegion: "All",
  };

  test("should handle SET_COUNTRIES", () => {
    const countries = [
      {
        name: { common: "USA", official: "United States of America", nativeName: {} },
        tld: [".us"],
        cca2: "US",
        ccn3: "840",
        cca3: "USA",
        independent: true,
        status: "officially-assigned",
        unMember: true,
        currencies: {},
        idd: { root: "+1", suffixes: ["201"] },
        capital: ["Washington, D.C."],
        altSpellings: ["US", "USA"],
        region: "Americas",
        subregion: "North America",
        languages: { eng: "English" },
        translations: {},
        latlng: [38, -97],
        landlocked: false,
        borders: ["CAN", "MEX"],
        area: 9629091,
        demonyms: { eng: { f: "American", m: "American" } },
        flag: "🇺🇸",
        maps: { googleMaps: "", openStreetMaps: "" },
        population: 331002651,
        car: { signs: ["USA"], side: "right" },
        timezones: ["UTC-12:00"],
        continents: ["North America"],
        flags: { png: "", svg: "" },
        coatOfArms: {},
        startOfWeek: "sunday",
        capitalInfo: { latlng: [38.8951, -77.0364] },
      },
    ];

    const action = setCountries(countries);
    const newState = countriesReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      countries,
    });
  });

  test("should handle SET_REGION", () => {
    const region: Region = "Europe";
    const action = setFilterRegion(region);
    const newState = countriesReducer(initialState, action);

    expect(newState).toEqual({
      ...initialState,
      filterRegion: region,
    });
  });

  test("should return the same state for unknown action", () => {
    const action = { type: "UNKNOWN_ACTION" } as any;
    const newState = countriesReducer(initialState, action);

    expect(newState).toEqual(initialState);
  });
});
