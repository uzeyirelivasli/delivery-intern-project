import React from "react";
import "./Title.css";

const Title = ({name}) => {
  return (
    <div className="section--title">
      <div className="section--title__line"></div>
      <h1>{name}</h1>
      <div className="section--title__line"></div>
    </div>
  );
};

export default Title;
