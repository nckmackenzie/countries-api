import { Link } from 'react-router-dom';
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

const CountryInfo = ({ data }) => {
  const [info] = data;
  //   console.log(info.borders);
  return (
    <>
      <div className="d-flex gap-2 mt-2">
        <div className="img-container">
          <img src={info.flags.svg} alt={info.name.official} />
        </div>
        <div className="country-info">
          <p className="country-name">{info.name.common}</p>
          <p>
            Native Name: <span>{info.name.official}</span>
          </p>
          <p>
            Population: <span>{numberWithCommas(info.population)}</span>
          </p>
          <p>
            Region: <span>{info.region}</span>
          </p>
          <p>
            Sub-Region: <span>{info.subregion}</span>
          </p>
          <p>
            Capital: <span>{info.capital}</span>
          </p>
        </div>
      </div>
      <div className="borders">
        <h5>Border countries</h5>
        <ul>
          {info.borders &&
            info.borders.map(border => {
              return (
                <Link to="/" key={border}>
                  <li>{border}</li>
                </Link>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default CountryInfo;
