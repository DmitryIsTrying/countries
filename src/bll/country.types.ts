export type CountryInfo = {
  name: Name;
  tld: string[];
  cca2: string;
  ccn3: string;
  cca3: string;
  independent: boolean;
  status: string;
  unMember: boolean;
  currencies: Currencies;
  idd: Idd;
  capital: string[];
  altSpellings: string[];
  region: string;
  languages: Languages;
  translations: unknown;
  latlng: number[];
  landlocked: boolean;
  area: number;
  demonyms: Demonyms;
  flag: string;
  maps: Maps;
  population: number;
  car: Car;
  timezones: string[];
  continents: string[];
  flags: Flags;
  coatOfArms: unknown;
  startOfWeek: string;
  capitalInfo: CapitalInfo;
};

type CapitalInfo = {
  latlng: number[];
};

type Flags = {
  png: string;
  svg: string;
};

type Car = {
  signs: string[];
  side: string;
};

type Maps = {
  googleMaps: string;
  openStreetMaps: string;
};

type Demonyms = {
  eng: Eng;
};

type Eng = {
  f: string;
  m: string;
};

type Languages = {
  eng: string;
};

type Idd = {
  root: string;
  suffixes: string[];
};

type Currencies = {
  SHP: SHP;
};

type SHP = {
  name: string;
  symbol: string;
};

type Name = {
  common: string;
  official: string;
  nativeName: NativeName;
};

type NativeName = {
  eng: {
    official: string;
    common: string;
  };
};
