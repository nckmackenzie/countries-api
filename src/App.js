import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Country from './Country';
import { useHttpClient } from './use-http';

function App() {
  const [countries, setCountries] = useState([]);
  const [regions, setRegions] = useState([]);
  const { isLoading, sendRequest, error } = useHttpClient();
  const url = 'https://restcountries.com/v3.1';

  useEffect(() => {
    const loadCountries = async () => {
      const response = await sendRequest(`${url}/all`);
      const transformedData = response.map(item => {
        return {
          name: item.name.common,
          population: item.population,
          flag: item.flags.svg,
          region: item.region,
          capital: item.capital,
        };
      });
      setCountries(transformedData);
      const reg = transformedData.map(dt => dt.region);
      const uniqueRegions = [...new Set(reg)];
      setRegions(uniqueRegions);
    };

    loadCountries();
  }, [sendRequest]);

  const selectedChangeHandler = async reg => {
    setCountries([]);
    const response = await sendRequest(`${url}/region/${reg}`);
    const transformedData = response.map(item => {
      return {
        name: item.name.common,
        population: item.population,
        flag: item.flags.svg,
        region: item.region,
        capital: item.capital,
      };
    });
    setCountries(transformedData);
  };

  const submitHandler = async reg => {
    setCountries([]);
    const response = await sendRequest(`${url}/name/${reg}`);
    const transformedData = response.map(item => {
      return {
        name: item.name.common,
        population: item.population,
        flag: item.flags.svg,
        region: item.region,
        capital: item.capital,
      };
    });
    setCountries(transformedData);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            isLoading={isLoading}
            error={error}
            countries={countries}
            regions={regions}
            selectedChangeHandler={selectedChangeHandler}
            onSubmit={submitHandler}
          />
        }
      />
      <Route path="/:name" element={<Country />} />
    </Routes>
  );
}

export default App;
