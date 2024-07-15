import React, { useContext, useState } from "react";
import { DisplayContext } from "../pages/Home";

const New = () => {
  const dispatch = useContext(DisplayContext);
  const [heading, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [due, setDate] = useState("");
  const status = "pending";

  const data = { heading, desc, due, status };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {
      dispatch({
        type: "display",
        display: false,
        submit: true,
      });
    });
  };
  return (
    <div className="new-component absolute z-20 flex justify-center items-center mt-24 w-screen bg-transparent">
      <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-4">
          <header className="text-center text-white font-semibold text-lg mb-4">
            Add your task
          </header>
          <div>
            <label
              htmlFor="task-heading"
              className="block text-white text-sm font-medium mb-1"
            >
              Task Heading
            </label>
            <input
              type="text"
              id="task-heading"
              placeholder="Enter task heading"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={heading}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="task-description"
              className="block text-white text-sm font-medium mb-1"
            >
              Task Description
            </label>
            <textarea
              id="task-description"
              placeholder="Enter task description"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          </div>

          <div>
            <label
              htmlFor="due-date"
              className="block text-white text-sm font-medium mb-1"
            >
              Due Date
            </label>
            <input
              type="date"
              id="due-date"
              className="w-full p-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={due}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white">Status: Pending</p>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Add Task
            </button>
            <button
              type="submit"
              onClick={() => {
                dispatch({
                  type: "display",
                  display: false,
                  submit: true,
                });
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
