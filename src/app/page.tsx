// src/app/page.tsx
"use client";

import { useState } from "react";
import Loader from "../components/Loader";
import Toast from "../components/Toast";
import TodoInput from "../components/TodoInput";
import TodoItem from "../components/TodoItem";
import useTodos from "../hooks/useTodos";

export default function Home() {
  const { todos, loading, toast, setToast, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState("");

  if (loading) return <Loader />;

  return (
    <div className="bg-background text-foreground min-h-screen p-6 transition-colors duration-300">
      <div className="max-w-xl mx-auto bg-card shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 select-none">To-Do List</h1>

        <TodoInput input={input} setInput={setInput} onAdd={() => {
          addTodo(input);
          setInput("");
        }} />

        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              toggleTodo={toggleTodo}
              deleteTodo={deleteTodo}
            />
          ))}
        </ul>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
