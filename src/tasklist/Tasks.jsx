import React from 'react'
import {  useSelector, useDispatch } from 'react-redux';
import { FaRegTrashAlt } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';
import { HiOutlinePencilAlt } from 'react-icons/hi';
import './tasklist.css';
import { deleteTaskAction, completeTaskAction, editModeActiveAction } from '../redux/action';

export default function Tasks() {
  const { tasks } = useSelector((state) => state.todoListReducer);
  const dispatch = useDispatch();

  const deleteTask = (index) => {
    dispatch(deleteTaskAction(index));
  }

  const completeTask = (index) => {
    dispatch(completeTaskAction(tasks[index], index));
  }

  const activeEditMode = (index) => {
    dispatch(editModeActiveAction(index));
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
              <FaCheck className="reactIcons" id="checkIcon"  onClick={ () => completeTask(index) }/>
              <HiOutlinePencilAlt className="reactIcons" id="editIcon" onClick={ () => activeEditMode(index) }/>
              <FaRegTrashAlt className="reactIcons" id="trashIcon" onClick={ () => deleteTask(index) }/>
            </div>
          </div>
        ))}
      </ul>
    </div>

  )
}
