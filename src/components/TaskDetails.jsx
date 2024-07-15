import React from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import TaskPreview from "./TaskPreview";

export const tasksContext = React.createContext({});

function TaskDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  let { tasks, loading, error } = useFetch(process.env.API_ENDPOINT + "/" + id);

  const handleDelete = () => {
    fetch(process.env.API_ENDPOINT + "/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <>
      <div className="div w-screen h-screen ">
        <Navbar />
        {loading && <div>loading</div>}
        {error && <div> An error ocuured while fetching the data</div>}
        <tasksContext.Provider value={{ tasks, handleDelete }}>
          <TaskPreview />
        </tasksContext.Provider>
      </div>
    </>
  );
}

export default TaskDetails;
