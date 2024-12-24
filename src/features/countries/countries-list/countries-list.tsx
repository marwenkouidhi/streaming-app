import { countries } from '@/data/countries';
import React from 'react';

const CountriesList = () => {
  return (
    <div className="flex flex-col space-y-3 px-2 py-5">
      {countries.map((country, _) => (
        <div className="flex cursor-pointer space-x-3 text-sm hover:text-primary">
          <div>{country.icon}</div>
          <div>{country.name}</div>
        </div>
      ))}
    </div>
  );
};
export default CountriesList;
