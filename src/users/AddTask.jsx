import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddTask() {
  let navigate = useNavigate();

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

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/task", task);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="AssignedTo" className="form-label">
                Assigned To
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter assignee"
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
                type="text"
                className="form-control"
                placeholder="Enter status"
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
                type="text"
                className="form-control"
                placeholder="Enter priority level"
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
                type="date"
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
                placeholder="Enter any comments"
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
