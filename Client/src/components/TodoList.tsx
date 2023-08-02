import NewTodo from "./NewTodo";
import { type TodoType } from "@/app/todos/page";

export default function TodoList({todos} : TodoType[]){
    return (
        todos.map(todo , index => (
            <NewTodo key={index} todo={todo} />
        ))
    )
}