import { useEffect, useState } from 'react';
import { useHttpClient } from './use-http';
import { Link, useParams } from 'react-router-dom';
import Spinners from './Spinners';
import Header from './Header';
import CountryInfo from './CountryInfo';

function unslugify(n) {
  const convertedToLower = String(n).toLowerCase();
  return convertedToLower.replaceAll('-', ' ');
}

const Country = () => {
  const { isLoading, sendRequest } = useHttpClient();
  const [countryData, setCountryData] = useState();
  const { name } = useParams();

  useEffect(() => {
    const loadDetails = async () => {
      const data = await sendRequest(
        `https://restcountries.com/v3.1/name/${unslugify(name)}?fullText=true`
      );
      setCountryData(data);
    };

    loadDetails();
  }, [name, sendRequest]);

  return (
    <>
      <Header />
      {isLoading && <Spinners />}
      <div className="container">
        <Link to="/" className="btn">
          Go Back
        </Link>
        {countryData && countryData.length > 0 && (
          <CountryInfo data={countryData} />
        )}
      </div>
    </>
  );
};

export default Country;
