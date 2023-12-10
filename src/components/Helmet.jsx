import React from "react";

const Helmet = ({ title, children }) => {
  document.title = "Gardoe | " + title;
  return children;
};

export default Helmet;
