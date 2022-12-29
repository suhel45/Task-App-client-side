/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/UserContext";
import CompletedTask from "./CompletedTask";

const MyTask = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  
  console.log(user);
  console.log(orders);

  useEffect(() => {
    fetch(`https://task-app-server-side.vercel.app/my-task?email=${user?.email}`, {})
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [user?.email]);

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
navigate('/completed-task')
  };

  const handleDelete = (id)=>{
    fetch(`https://task-app-server-side.vercel.app/task/${id}`,{
        method:'delete'
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
          {orders.map((order, i) => (
            <tr key={order._id}>
              <th>{i + 1}</th>
              <td>{order.task}</td>
              <td>
                <button className="btn btn-info btn-sm">update</button>
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
