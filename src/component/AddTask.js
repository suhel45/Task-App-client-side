/** @format */

import React from "react";
import { useContext } from "react";
import { AuthContext } from "../context/UserContext";

const AddTask = () => {
  const {user} = useContext(AuthContext)
  const hadleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    const task = {
      task:e.target.name.value,
      email:user?.email
    }
    fetch("https://task-app-server-side.vercel.app/add",{
      method:"post",
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(task)
    })
    .then(res=>res.json())
    .then(data=>{console.log(data)})
    form.reset();  
  };
  return (
    <div>
      <h1 className="mt-3">Add Task</h1>
      <form onSubmit={hadleClick} className="mt-8">
        <div className="form-control mx-auto w-full max-w-xs">
          <label className="label">
            <span className="label-text">Your Task</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Task"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <br />
        <div className="form-control w-full mx-auto max-w-xs">
          <label className="label">
            <span className="label-text">Upload image</span>
          </label>
          <input
            type="file"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button className="btn btn-active btn-accent mt-2">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;
