// src/components/Loading.jsx
import React from "react";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loading-spinner">
      <div className="spinner" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
