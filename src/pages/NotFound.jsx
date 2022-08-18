import React from "react";

import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <h1>404 Page Not Fount</h1>
      <Link to={`/pokemon`}>Home</Link>
    </>
  );
};

export default NotFound;
