import React from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';
import { useState, useEffect } from 'react';

const CountryPicker = ({ handleCountryChange }) => {
  const [ fetchedCountries, setFetchedCountries ] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setFetchedCountries]);

  return (
    <NativeSelect defaultValue=""
    onChange={(e) => handleCountryChange(e.target.value)}
    >
      <option value="">Global</option>
      {fetchedCountries.map((country, key) => (
        <option key={key} value={country}>
          {country}
        </option>
      ))}
    </NativeSelect>
  )
};

export default CountryPicker;