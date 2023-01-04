/** @format */

import React from "react";
import { toast } from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Update = () => {
  const data = useLoaderData();
  const [tasks] = data;
  console.log(tasks.task);

  const hadleClick = (e) => {
    e.preventDefault();
    const form = e.target;
    console.log(form.name.value)
    const updatedTask={
        task:form.name.value
    }
    fetch(`https://task-app-server-side.vercel.app/update-task/${tasks._id}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(updatedTask)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        toast.success("Update successfully")
    })
  };
  return (
    <div>
      <h1 className="mt-3">Update Task</h1>
      <form onSubmit={hadleClick} className="mt-8">
        <div className="form-control mx-auto w-full max-w-xs">
          <input
            type="text"
            name="name"
            defaultValue={tasks.task}
            placeholder="Your Task"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <br />
        <button className="btn btn-active btn-accent mt-2">Update</button>
      </form>
    </div>
  );
};

export default Update;
