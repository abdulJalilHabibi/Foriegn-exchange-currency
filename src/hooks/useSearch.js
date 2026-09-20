import { data } from "../data/data";
export default function useSearch(filterSearch) {
  const filterdCountries = data.filter((country) => {
    const value = filterSearch.toLowerCase();
    return (
      country.name.toLowerCase().includes(value) ||
      country.currencyName.toLowerCase().includes(value) ||
      country.currency.toLowerCase().includes(value)
    );
  });

  return filterdCountries;
}
