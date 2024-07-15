import React, { useContext } from "react";
import { tasksContext } from "./TaskDetails";

function TaskPreview() {
  const taskContext = useContext(tasksContext);
  return (
    <>
      <div className="card flex flex-col flex-wrap items-center justify-center p-5 w-screen text-center text-white">
        <div className="flex flex-wrap items-center justify-center flex-col bg-slate-700 w-80 rounded-md border border-gray-600 ">
          <header className="text-white font-bold p-6 w-full rounded bg-slate-800 text-2xl">
            {" "}
            {taskContext.tasks.heading}{" "}
          </header>

          <article className="p-4 w-full text-white bg-gray-700 text-lg">
            {taskContext.tasks.desc}
          </article>
          <div className="bg-slate-800 w-full">
            <p className="p-5 w-full">Due Date : {taskContext.tasks.due}</p>
            <footer className="p-3">Status : {taskContext.tasks.status}</footer>
            <section className="flex gap-4 items-center justify-center p-4 pd-9">

              <button
                onClick={taskContext.handleDelete}
                className="hover:opacity-50 p-3 bg-blue-800 rounded"
              >
                Delete
              </button>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default TaskPreview;
