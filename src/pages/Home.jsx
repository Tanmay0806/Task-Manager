import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from "../components/Pagination"; 
export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadTasks();
  }, [currentPage]);

  const loadTasks = async () => {
    const result = await axios.get(`http://localhost:8080/tasks?page=${currentPage - 1}`);
    setTasks(result.data.content);
    setTotalPages(result.data.totalPages);
  };

  const deleteTask = async (id) => {
    await axios.delete(`http://localhost:8080/task/${id}`);
    loadTasks();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">S.N</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Status</th>
              <th scope="col">Priority</th>
              <th scope="col">Due Date</th>
              <th scope="col">Comments</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={task.id}>
                <th scope="row">{(currentPage - 1) * 5 + index + 1}</th>
                <td>{task.assignedTo}</td>
                <td>{task.status}</td>
                <td>{task.priority}</td>
                <td>{new Date(task.dueDate).toLocaleDateString()}</td>
                <td>{task.comments}</td>
                <td>
                  <Link className="btn btn-primary mx-2" to={`/viewtask/${task.id}`}>
                    View
                  </Link>
                  <Link className="btn btn-outline-primary mx-2" to={`/edittask/${task.id}`}>
                    Edit
                  </Link>
                  <button className="btn btn-danger mx-2" onClick={() => deleteTask(task.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
}
