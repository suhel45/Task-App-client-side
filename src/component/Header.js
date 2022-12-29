
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/UserContext";

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogout = ()=>{
        logOut()
        .then(()=>{})
        .catch(e=>{console.log(e)})
    }
  return (
      <div className="navbar bg-base-100 bg-primary  text-primary-content ">
        <div className="flex-1">
          <p className="btn btn-ghost normal-case text-xl">Task-App</p>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal mr-5 gap-3">
            <Link to="/home">Home</Link>
            <Link to="/add-task">Add Task</Link>
            <Link to="/my-task">My Task</Link>
            <Link to="/completed-task">Completed Task</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <p>{user?.email}</p>
            <button onClick={handleLogout}  className="btn btn-sm">LogOut</button>
          </ul>
        </div>
      </div>
  );
};

export default Header;
