import { Country as CSCountry } from "country-state-city";

export interface Country {
  name: string;
  code: string;
  dialCode: string;
}

export const countries: Country[] = CSCountry.getAllCountries().map(
  (country) => ({
    name: country.name,
    code: country.isoCode,
    dialCode: `+${country.phonecode}`,
  }),
);
