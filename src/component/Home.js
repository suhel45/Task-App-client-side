/** @format */

import React, { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://images.ctfassets.net/lzny33ho1g45/O6Ns6DttUzJym7rhGiD36/9affffb4ec5c115b8f742cd34b663cff/best_to_do_apps.jpg?w=1520&fm=jpg&q=30&fit=thumb&h=760")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold text-neutral-content">WELCOME TO DAILY TASK APP</h1>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
