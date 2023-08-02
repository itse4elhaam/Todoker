"use client"

import TodoInput from "@/components/TodoInput";
import TodoList from "@/components/TodoList";
import { useState } from "react"   

export interface TodoType {
	todo: string;
}

export default function Todo(){

    const [todos, setTodos] = useState<TodoType[]>([]);

    function onSubmit(todo: TodoType) {
		setTodos((current) => [...current, todo]);

        
	}
	// todo: FIX ERROR 
    return (
		<>
			{" "}
			<TodoInput onSubmit={onSubmit} />

			{/* @ts-ignore  */}
			<TodoList todos={todos}/>
		</>
	);
}