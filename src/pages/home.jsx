import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ padding: `20px` }}>
      <Link to="/users" style={{ padding: `20px`, fontSize: `25px` }}>
        Users
      </Link>
      <Link to="/contact" style={{ padding: `20px`, fontSize: `25px` }}>
        Contact
      </Link>
    </div>
  );
};

export default Home;
