import ErrorBox from './ErrorBox';
import Header from './Header';
import SearchFilter from './SearchFilter';
import Spinners from './Spinners';
import Countries from './Countries';
const Home = ({
  isLoading,
  error,
  countries,
  regions,
  selectedChangeHandler,
  onSubmit,
}) => {
  //   //   const unique = new Set(countries.region);
  //   console.log(countries.region);
  return (
    <>
      <Header />
      <SearchFilter
        regions={regions}
        selectedChangeHandler={selectedChangeHandler}
        submitHandler={onSubmit}
      />
      {isLoading && <Spinners />}
      {error && <ErrorBox error={error} />}
      {countries && countries.length > 0 && <Countries data={countries} />}
    </>
  );
};

export default Home;
