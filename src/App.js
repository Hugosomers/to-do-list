import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTaskAction, editTaskAction, completedModeActiveAction } from './redux/action';
import { HiMenuAlt1 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import './App.css';
import Tasks from './tasklist/Tasks';

function App() {
  const dispatch = useDispatch();
  const { editMode } = useSelector((state) => state.todoListReducer);
  const [inputValue, setInputValue] = useState('');
  const [menuToggle, setMenuToggle] = useState(false);

  const inputHandle = ({ target }) => {
    setInputValue(target.value)
  };

  const addTask = () => {
    dispatch(addTaskAction(inputValue))
  };

  const editTask = () => {
    dispatch(editTaskAction(inputValue))
  }

  const menuHandle = () => {
    setMenuToggle(!menuToggle);
  }

  const completeModeTasks = (check) => {
    dispatch(completedModeActiveAction(check))
  }

  return (
    <main className="App">
      
      {menuToggle ? 
        <div className="menu">
          <AiOutlineClose className="closeIcon" onClick={ menuHandle }/>
          <h3 onClick={ () => completeModeTasks(false) }>To Do List</h3>
          <h3 onClick={ () => completeModeTasks(true) }>Histórico</h3>
        </div>
        :
        null
      }

      {!menuToggle ? <HiMenuAlt1 className="menuIcon" onClick={ menuHandle }/> : null}
      <header>
        <h1 className="titles">Lista de Tarefas</h1>
      </header>



      <div className="controlDiv">
        <input 
          // placeholder="Digite sua tarefa"
          onChange={ inputHandle }
          value={ inputValue }
          className="inputs"
        />
        {!editMode ? 
          <button
            className="addButton"
            onClick={ addTask }
          >
            Adicionar
          </button>
          :
          <button
            className="editButton"
            onClick={ editTask }
          >
            Editar
          </button>
        }
      </div>

      <div className="tasksMainDiv">
        <Tasks />
      </div>

    </main>
  );
}

export default App;
