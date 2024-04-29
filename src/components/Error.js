import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h4>Oops!! Something went wrong!!</h4>
      <h1
        style={{
          fontSize: "200px",
          opacity: "20%",
          margin: "0",
        }}
      >
        {err.status}
      </h1>
      <h2>{err.statusText}</h2>
    </div>
  );
};

export default Error;
