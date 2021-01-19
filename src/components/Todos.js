import clsx from "clsx";
import TodoItem from './TodoItem';

const Todos = ({ todos, handleDelete, handleIsDone }) => {
  return (
    <div className="todos">

      {todos.map(todo => {
        return (
          <TodoItem todo={todo}
            handleDelete={handleDelete}
            handleIsDone={handleIsDone} />
        )
      })}



    </div>
  )
}

export default Todos;