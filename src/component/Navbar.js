/** @format */

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((e) => {
        console.log(e);
      });
  };
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li tabIndex={0}>
              <Link to="/add-task">Add Task</Link>
            </li>
            <li>
              <Link to="/my-task">My Task</Link>
            </li>
            <li>
              <Link to="/completed-task">Completed Task</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <button onClick={handleLogout} className="btn btn-sm mt-2">
              LogOut
            </button>
            <p className="mt-2 mx-2">{user?.email}</p>
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl">Task App</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to={"/home"}>Home</Link>
          </li>
          <li tabIndex={0}>
            <Link to="/add-task">Add Task</Link>
          </li>
          <li>
            <Link to="/my-task">My Task</Link>
          </li>
          <li>
            <Link to="/completed-task">Completed Task</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <button onClick={handleLogout} className="btn btn-sm mt-2">
            LogOut
          </button>
          <p className="mt-2 mx-2">{user?.email}</p>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" to="/register">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
