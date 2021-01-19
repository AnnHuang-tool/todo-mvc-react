
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';



const defaultTodos = [
  {
    id: uuidv4(),
    title: '1',
    isDone: true,

  },
  {
    id: uuidv4(),
    title: '12',
    isDone: false,

  },
  {
    id: uuidv4(),
    title: '123',
    isDone: false,

  },

]

function App() {

  const [inputValue, setInputValue] = useState('');

  const [todos, setTodos] = useState(defaultTodos);

  const numOfRemaining = todos.filter((todo) => !todo.isDone).length;

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAdd = () => {
    setTodos(((preTodos) => {
      return [
        ...preTodos,
        {
          id: uuidv4(),
          title: inputValue,
          isDone: false,
        }
      ]

    }))
  };

  const handleIsDone = (id) => () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
      })
    );
  };
  const handleDelete = (id) => () => {
    setTodos((preTodos) => preTodos.filter((todo) => todo.id !== id))

  };

  const handleClearDone = () => {
    setTodos((preTodos) => preTodos.filter((todo) => !todo.isDone)
    )
  };

  return (
    <div className="app">
      <Header />

      <AddTodo inputValue={inputValue} handleChange={handleChange} handleAdd={handleAdd} />


      <Todos todos={todos} handleDelete={handleDelete} handleIsDone={handleIsDone} />
      <Footer numOfRemaining={numOfRemaining} handleClearDone={handleClearDone} />
    </div>
  );
};


export default App;
