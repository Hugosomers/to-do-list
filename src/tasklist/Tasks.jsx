import React from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import './tasklist.css';
import { deleteTaskAction } from '../redux/action';

export default function Tasks() {
  const { tasks } = useSelector((state) => state.todoListReducer);
  const dispatch = useDispatch();

  const deleteTask = (index) => {
    dispatch(deleteTaskAction(index))
  }

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
            <div>
              <FaRegTrashAlt className="reactIcons" id="trashIcon" onClick={ () => deleteTask(index) }/>
              <FaCheck className="reactIcons" id="checkIcon"/>
            </div>
          </div>
        ))}
      </ul>
    </div>
  )
}
