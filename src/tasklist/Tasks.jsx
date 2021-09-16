import React from 'react'
import {  useSelector } from 'react-redux';
import './tasklist.css';

export default function Tasks() {
  const { tasks } = useSelector((state) => state.todoListReducer);
  const tasksTrue = tasks.length > 0 ? true : false;
  if(!tasksTrue) {
    return(
      <div>
        <h2>Sem tasks adicionadas.</h2>
      </div>
    )
  }
  return (
    <div className="tasksDiv">
      <ul className="ulList">
        {tasks.map((item, index) => (
          <div key={index} className="singleTaskDiv">
            <li>{item}</li>
          </div>
        ))}
      </ul>
    </div>
  )
}
