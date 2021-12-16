import { Link } from 'react-router-dom';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function slugify(n) {
  const convertedToLower = String(n).toLowerCase();
  return convertedToLower.replace(/\s/g, '-');
}

const Countries = ({ data }) => {
  return (
    <section className="section">
      <div className="container">
        <div className="grid">
          {data.map(item => {
            return (
              <Link to={`/${slugify(item.name)}`} key={item.name}>
                <div className="card">
                  <img src={item.flag} alt={item.name} />
                  <div className="content">
                    <h4>{item.name}</h4>
                    <p>
                      Population:{' '}
                      <span>{numberWithCommas(item.population)}</span>
                    </p>
                    <p>
                      Region: <span>{item.region}</span>
                    </p>
                    <p>
                      Capital: <span>{item.capital}</span>
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Countries;
