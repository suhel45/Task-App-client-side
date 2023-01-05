/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import CompletedTask from "./CompletedTask";
import Loader from "./Loader";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  
  console.log(user);
  console.log(orders);

      const { data:tasks=[],isLoading, refetch } = useQuery({
        queryKey: ['my-task',`${user?.email}`],
        queryFn: () =>
          fetch(`https://task-app-server-side.vercel.app/my-task?email=${user?.email}`).then(
            (res) => res.json(),
          ),
      })
        if(isLoading){return <Loader></Loader>}

  const hadleComplete = (ids, task) => {
    const completedTask = {
      task,
      id: ids,
      email:user?.email
    };
    console.log(completedTask);
    fetch("https://task-app-server-side.vercel.app/completed-task", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(completedTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      fetch(`https://task-app-server-side.vercel.app/task/${ids}`,{
    method:'delete'
})
.then(res=>res.json())
.then(data=>{
  toast.success("Completed successfully")
  refetch()
})
  };

  const handleDelete = (id)=>{
    fetch(`https://task-app-server-side.vercel.app/task/${id}`,{
        method:'delete'
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.deletedCount>0){
        toast.success("Delete successfully")
           refetch()
      }
    })
  }
  return (
    <div className="overflow-x-auto mt-8">
      <table className="table w-full">
        <thead>
          <tr>
            <th>sl</th>
            <th>My-Task</th>
            <th>update</th>
            <th>Delete</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((order, i) => (
            <tr key={order._id}>
              <th>{i + 1}</th>
              <td>{order.task}</td>
              <td>
                <Link to={`/update/${order._id}`}>
                <button className="btn btn-info btn-sm">update</button>
                </Link>
              </td>
              <td>
                <button onClick={()=>handleDelete(order._id)} className="btn btn-error btn-sm">Delete</button>
              </td>
              <td>
                <button
                  onClick={() => hadleComplete(order._id, order.task)}
                  className="btn btn-success btn-sm">
                  completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyTask;
