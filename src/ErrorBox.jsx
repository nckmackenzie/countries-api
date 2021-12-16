const ErrorBox = ({ error }) => {
  return (
    <div className="alert alert-error">
      <p>{error}</p>
    </div>
  );
};

export default ErrorBox;
