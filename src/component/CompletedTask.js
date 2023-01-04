/** @format */

import { useQuery } from "@tanstack/react-query";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../context/UserContext";

const CompletedTask = () => {
  const { user } = useContext(AuthContext);
  // const [completedTask, setCompletedTask] = useState([]);

  const { data: completedTask = [], refetch } = useQuery({
    queryKey: ["completed-task"],
    queryFn: () =>
      fetch(
        `https://task-app-server-side.vercel.app/completed-task?email=${user?.email}`
      ).then((res) => res.json()),
  });

  const handleDelete = (id) => {
    fetch(`https://task-app-server-side.vercel.app/DeleteTask/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delete successfully");
        refetch();
      });
  };

  const handleClick = (id, tas) => {
    const task = {
      task: tas,
      email: user?.email,
    };
    fetch("https://task-app-server-side.vercel.app/add", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
    fetch(`https://task-app-server-side.vercel.app/DeleteTask/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Delete successfully");
        refetch();
      });
  };
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>completed-task</th>
            <th>delete</th>
            <th>Not completde</th>
          </tr>
        </thead>
        <tbody>
          {completedTask.map((tas, i) => (
            <tr key={tas._id}>
              <th>{i + 1}</th>
              <td>{tas.task}</td>
              <td>
                {" "}
                <button
                  onClick={() => handleDelete(tas._id)}
                  className="btn btn-error btn-sm">
                  Delete
                </button>
              </td>
              <td>
                <button
                  onClick={() => handleClick(tas._id, tas.task)}
                  className="btn btn-success btn-sm">
                  Not completed
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CompletedTask;
