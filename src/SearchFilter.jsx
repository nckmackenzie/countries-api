import { useRef } from 'react';

const SearchFilter = ({ regions, selectedChangeHandler, submitHandler }) => {
  const regionRef = useRef();
  const inputRef = useRef();
  const selectedRegionHandler = () => {
    const selectedRegion = String(regionRef.current.value).toLowerCase();
    selectedChangeHandler(selectedRegion);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    submitHandler(String(inputRef.current.value).toLowerCase());
  };

  return (
    <section className="filters">
      <div className="container d-flex justify-space-between">
        <form onSubmit={onSubmitHandler}>
          <input
            type="search"
            className="form-control"
            placeholder="Search for a country..."
            ref={inputRef}
          />
        </form>

        <select
          id="filter"
          className="form-control"
          onChange={selectedRegionHandler}
          ref={regionRef}
        >
          <option value="">Filter by Region</option>
          {regions &&
            regions.map(region => (
              <option value={region} key={region}>
                {region}
              </option>
            ))}
        </select>
      </div>
    </section>
  );
};

export default SearchFilter;
