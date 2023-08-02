"use client"

import { useState, FormEvent } from "react";
import {type TodoType} from "@/app/todos/page";


interface props {
	onSubmit: (todoText: TodoType) => void;
}
const TodoInputBar = ({ onSubmit }: props) => {
	const [todoText, setTodoText] = useState<TodoType | string>("");

	function onAddTodo(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		if (todoText === "") return;
		onSubmit(todoText as TodoType);
		setTodoText("");
	}

	return (
		<form className="flex items-center justify-center h-screen" onSubmit={onAddTodo}>
			<input
				type="text"
				placeholder="Enter your todo..."
				value={todoText as string}
				onChange={(e) => setTodoText(e.target.value)}
				className="border border-gray-300 rounded px-4 py-2 mr-2"
			/>
			<button className="bg-blue-500 text-white rounded px-4 py-2">
				Add Todo
			</button>
		</form>
	);
};

export default TodoInputBar;
