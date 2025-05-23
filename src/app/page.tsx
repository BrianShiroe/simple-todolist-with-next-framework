// todolist-next-js\src\app\page.tsx
"use client";

import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Toast from "../components/Toast";

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch(() => setToast("Failed to load todos"))
      .finally(() => setLoading(false));
  }, []);

  const addTodo = async () => {
    if (!input.trim()) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: input }),
    });
    const newTodo = await res.json();
    setTodos([newTodo, ...todos]);
    setInput("");
    setToast("Task added 🎉");
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed } : todo
      )
    );
    setToast("Task updated ✔️");
  };

  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTodos(todos.filter((todo) => todo.id !== id));
    setToast("Task deleted 🗑️");
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-background text-foreground min-h-screen p-6 transition-colors duration-300">
      <div className="max-w-xl mx-auto bg-card shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4 select-none">To-Do List</h1>
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task"
            className="flex-1 border border-border rounded px-3 py-2 bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
            onKeyDown={(e) => {
              if (e.key === "Enter") addTodo();
            }}
            aria-label="Add a new task"
          />
          <button
            onClick={addTodo}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
            aria-label="Add task"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo) => (
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
          ))}
        </ul>
      </div>

      {toast && <Toast message={toast} onClose={() => setToast(null)} />}
    </div>
  );
}
