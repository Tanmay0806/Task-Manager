import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTask() {  
  let navigate = useNavigate();

  const { id } = useParams();

  const [task, setTask] = useState({
    assignedTo: "",
    status: "",
    priority: "",
    dueDate: "",
    comments: "",
  });

  const { assignedTo, status, priority, dueDate, comments } = task;

  const onInputChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTask();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/task/${id}`, task);
    navigate("/");
  };

  const loadTask = async () => {
    const result = await axios.get(`http://localhost:8080/task/${id}`);
    setTask(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="AssignedTo" className="form-label">
                Assigned To
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter assignee's name"
                name="assignedTo"
                value={assignedTo}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Status" className="form-label">
                Status
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter the status"
                name="status"
                value={status}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Priority" className="form-label">
                Priority
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter task priority"
                name="priority"
                value={priority}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="DueDate" className="form-label">
                Due Date
              </label>
              <input
                type={"date"}
                className="form-control"
                name="dueDate"
                value={dueDate}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="Comments" className="form-label">
                Comments
              </label>
              <textarea
                className="form-control"
                placeholder="Enter comments"
                name="comments"
                value={comments}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
