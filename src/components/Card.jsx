import React from "react";
import './Card.css'
import {Link } from 'react-router-dom'

function Card(props) {
 
  const tasks = props.tasks
 
  return (
    <>
      <div className=" absolute card-component h-fit w-fit p-5 flex items-center justify-items-center gap-5 flex-wrap ">
        {tasks.map((task ,index)=>{
          return <div key={index} className="w-72 flex flex-wrap flex-col   p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {task.heading}
          </h5>
        
         
          <section className="section text-base text-slate-400 h-12 w-17">
           Due Date : {task.due}
          </section>
          <article className="article w-17 h-8 text-white">
          <Link to={`/tasks/${task.id}`} role="button" className="w-10 h-4 bg-blue-700 rounded p-3 ">Details</Link>
          </article>
         
          </div>
        })}
        

      
      </div>
    </>
  );
}

export default Card;
