import React from "react";

const Jumbotron = ({ children }) => {
  return (
    <div
      style={{ textAlign: "center", backgroundColor: "forestgreen" }}
      className="jumbotron"
    >
      <img src="./google-logo.png" alt="google-logo" style={{ height: "200px" }} />
    </div>
  );
}

export default Jumbotron;