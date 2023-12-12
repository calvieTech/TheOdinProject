import { useState } from "react";
import AddTodo from "./AddTodo.jsx";
import TaskList from "./TaskList.jsx";

let nextId = 3;
const initialTodos = [
	{ id: 0, title: "Buy milk", done: true },
	{ id: 1, title: "Eat tacos", done: false },
	{ id: 2, title: "Brew tea", done: false },
];

/**
 * In this example, all of the event handlers in App.js use mutation. As a result, editing and deleting todos doesn’t work. Rewrite handleAddTodo, handleChangeTodo, and handleDeleteTodo to use the non-mutative methods:
 * @returns
 */
export default function TaskApp() {
	const [todos, setTodos] = useState(initialTodos);

	function handleAddTodo(title) {
		// todos.push({
		// 	id: nextId++,
		// 	title: title,
		// 	done: false,
		// });
		const newToDo = {
			id: todos.length,
			title: title,
			done: false,
		};
		const updatedToDos = [...todos, { ...newToDo }];

		setTodos(updatedToDos);
	}

	function handleChangeTodo(nextTodo) {
		// const todo = todos.find((t) => t.id === nextTodo.id);
		// todo.title = nextTodo.title;
		// todo.done = nextTodo.done;

		const updatedToDos = todos.map((todo) => {
			if (todo.id === nextTodo.id) {
				const changedToDo = { ...nextTodo };
				return changedToDo;
			}
			return todo;
		});

		setTodos(updatedToDos);
	}

	function handleDeleteTodo(todoId) {
		// const index = todos.findIndex((t) => t.id === todoId);
		// todos.splice(index, 1);
		const updatedToDos = todos.filter(
			(todo) => todo.id !== todoId
		);

		setTodos(updatedToDos);
	}

	return (
		<>
			<AddTodo onAddTodo={handleAddTodo} />
			<TaskList
				todos={todos}
				onChangeTodo={handleChangeTodo}
				onDeleteTodo={handleDeleteTodo}
			/>
		</>
	);
}
