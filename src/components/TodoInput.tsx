// src/components/TodoInput.tsx
import React from "react";

interface TodoInputProps {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
  onAdd: () => void;
}

export default function TodoInput({ input, setInput, onAdd }: TodoInputProps) {
  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
        className="flex-1 border border-border rounded px-3 py-2 bg-input text-foreground focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        onKeyDown={(e) => {
          if (e.key === "Enter") onAdd();
        }}
        aria-label="Add a new task"
      />
      <button
        onClick={onAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        aria-label="Add task"
      >
        Add
      </button>
    </div>
  );
}
