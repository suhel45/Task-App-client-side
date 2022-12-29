import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../context/UserContext';

const CompletedTask = () => {
    const { user } = useContext(AuthContext);
    const [completedTask, setCompletedTask] = useState([]);
    useEffect(() => {
        fetch(`https://task-app-server-side.vercel.app/completed-task?email=${user?.email}`, {})
          .then((res) => res.json())
          .then((data) => {
            setCompletedTask(data);
          });
      }, [user?.email]);
      console.log(completedTask);


      const handleDelete = (id)=>{
        fetch(`https://task-app-server-side.vercel.app/DeleteTask/${id}`,{
            method:'delete'
        })
        
      }
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
        {
            completedTask.map((tas,i)=><tr key={tas._id}>
                <th>{i+1}</th>
                <td>{tas.task}</td>
                <td> <button onClick={()=>handleDelete(tas._id)} className="btn btn-error btn-sm">Delete</button></td>
                <td><button className="btn btn-success btn-sm">Not completed</button></td>
              </tr>)
        }
    </tbody>
  </table>
</div>
    );
};

export default CompletedTask;