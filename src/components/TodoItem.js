import clsx from "clsx"

const TodoItem = ({ todo, handleDelete, handleIsDone }) => {
  return (
    <div className={clsx("task-item", { done: todo.isDone })} key={todo.id}>
      <div className="task-item-checked">
        <span className="icon icon-checked" onClick={handleIsDone(todo.id)}>

        </span>
      </div>

      <div className="task-item-body">
        <span className="task-item-body-text">{todo.title}</span>
        <input className="task-item-body-input" type="text" placeholder="新增工作" />
      </div>
      <div className="task-item-action">
        <button className="btn-reset btn-destroy icon" onClick={handleDelete(todo.id)}> </button>
      </div>
    </div>

  )
}

export default TodoItem;