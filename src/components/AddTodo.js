import clsx from "clsx";

const AddTodo = ({ inputValue, setInputValue, handleChange, handleAdd }) => {
  return (
    <div className={clsx("add-todo", { active: inputValue.length > 0 })}>
      <label className="add-todo-icon icon" htmlFor="add-todo-input"></label>
      <div className="add-todo-input">
        <input id="add-todo-input" onChange={handleChange} value={inputValue} type="text" placeholder="新增工作" />
      </div>
      <div className="add-todo-action">
        <button className="btn-reset btn-add" onClick={handleAdd}> 新增 </button>
      </div>
    </div>
  )
}
export default AddTodo;