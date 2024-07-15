import React, { useReducer } from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import useFetch from "../components/useFetch";
import New from "../components/New";
export const DisplayContext = React.createContext();
const Home = () => {
  const url = "http://localhost:8000/tasks";
  let { tasks, error, loading } = useFetch(url);

  const handleClick = () => {
    dispatch({
      type: "display",
      display: true,
    });
  };

  const initialState = { display: false, submit: true };

  const reducer = (state, action) => {
    switch (action.type) {
      case "display":
        return { display: action.display, submit: action.submit };
      default:
        return state;
    }
  };
  const [display, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div className="home-component w-screen h-screen bg-gray-900 -z-10 ">
        <Navbar />
        <header className="w-screen h-12 flex items-end justify-end pr-5 mt-3 absolute -z-1 ">
          {display.submit && (
            <button
              onClick={handleClick}
              on
              className="px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:opacity-50"
            >
              Add
            </button>
          )}
        </header>
        {loading && <div>Loading</div>}
        {display.display && (
          <DisplayContext.Provider value={dispatch}>
            <New />
          </DisplayContext.Provider>
        )}
        {tasks && <Card tasks={tasks} />}

        {error && <div>Failed to fetch data</div>}
      </div>
    </>
  );
};

export default Home;
