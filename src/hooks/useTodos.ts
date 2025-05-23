// src\components\hooks\useTodos.ts
import { useEffect, useState } from "react";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export default function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/todos")
      .then((res) => res.json())
      .then(setTodos)
      .catch(() => setToast("Failed to load todos"))
      .finally(() => setLoading(false));
  }, []);

  const addTodo = async (text: string) => {
    if (!text.trim()) return;
    const res = await fetch("/api/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const newTodo = await res.json();
    setTodos((prev) => [newTodo, ...prev]);
    setToast("Task added 🎉");
  };

  const toggleTodo = async (id: number, completed: boolean) => {
    await fetch(`/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed }),
    });
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
    setToast("Task updated ✔️");
  };

  const deleteTodo = async (id: number) => {
    await fetch(`/api/todos/${id}`, { method: "DELETE" });
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
    setToast("Task deleted 🗑️");
  };

  return {
    todos,
    loading,
    toast,
    setToast,
    addTodo,
    toggleTodo,
    deleteTodo,
  };
}
