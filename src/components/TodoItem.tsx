// src/components/TodoItem.tsx
import React from "react";
import { Todo } from "../hooks/useTodos";

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number, completed: boolean) => void;
  deleteTodo: (id: number) => void;
}

export default function TodoItem({ todo, toggleTodo, deleteTodo }: TodoItemProps) {
  return (
    <li
      key={todo.id}
      className="flex justify-between items-center border-b border-border py-2 transition-colors duration-300 hover:bg-input rounded"
    >
      <label className="cursor-pointer flex-1 select-none" htmlFor={`todo-${todo.id}`}>
        <input
          type="checkbox"
          id={`todo-${todo.id}`}
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id, !todo.completed)}
          className="mr-3 cursor-pointer accent-blue-500"
        />
        <span className={todo.completed ? "line-through text-gray-400" : ""}>
          {todo.text}
        </span>
      </label>
      <button
        onClick={() => deleteTodo(todo.id)}
        className="text-red-500 hover:text-red-700 transition"
        aria-label={`Delete task ${todo.text}`}
      >
        Delete
      </button>
    </li>
  );
}
