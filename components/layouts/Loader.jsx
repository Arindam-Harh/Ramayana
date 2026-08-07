import "./Loader.css";

export const Loader = () => {
  return (
    <div className="loader-container">
      <div className="chakra-loader"></div>
      <p className="loader-text">Loading </p>
    </div>
  );
};