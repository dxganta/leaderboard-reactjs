import React from "react";

const LoadingBar = () => {
  return (
    <div>
      <h2>Loading...</h2>
      <progress className="progress w-56"></progress>
    </div>
  );
};

export default LoadingBar;
