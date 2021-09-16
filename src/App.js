import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTaskAction } from './redux/action';
import './App.css';
import Tasks from './tasklist/Tasks';

function App() {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const inputHandle = ({ target }) => {
    setInputValue(target.value)
  };

  const addTask = () => {
    dispatch(addTaskAction(inputValue))
  };

  return (
    <main className="App">

      <header>
        <h1 className="titles">Lista de Tarefas</h1>
    	</header>

      <div className="controlDiv">
        <input 
          placeholder="Digite sua tarefa"
          onChange={ inputHandle }
          value={ inputValue }
          className="inputs"
        />
        <button
          className="addButton"
          onClick={ addTask }
        >
          Adicionar
        </button>
      </div>

      <div className="tasksMainDiv">
        <Tasks />
      </div>

    </main>
  );
}

export default App;
