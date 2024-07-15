import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar bg-gray-800 ">
        <nav className="nav mr-8 gap-8  ">
          <Link
            to={"/"}
            role="button"
            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700"
          >
            Home
          </Link>
        </nav>

        <header className="header text-gray-200 w-7 flex items-center justify-center font-bold font-mono text-2xl ml-9 gap-5">
          <img
            src=""
            className="h-12 w-12 text-sm border-2 border-gray-600 border-solid "
            alt="none  "
          />
          Tasker
        </header>
      </div>
    </>
  );
}

export default Navbar;
