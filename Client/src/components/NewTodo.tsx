import { type TodoType } from "@/app/todos/page";

export default function NewTodo({todo}: TodoType){
    return (
    <div className="todo-wrapper">
        <button className="checkbox">
            <label htmlFor="Completed">Completed</label>
            <input type="checkbox" name="completedCheckbox" id="" />
        </button>
        <div className="todo-item text-center">{todo}</div>
        <button className="px-4 py-2 transition-all duration-200 bg-black text-white hover:rounded-lg">Delete</button>
    </div>

    )
}