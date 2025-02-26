import { useState, useEffect } from "react";

type Task = {
  id: number;
  text: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    fetch("/api/tasks")
      .then(res => res.json())
      .then(data => setTasks(data));
  }, []);

  const addTask = async () => {
    if (!taskText.trim()) return;
    const res = await fetch("/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: taskText }),
    });
    const newTask = await res.json();
    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const removeTask = async (id: number) => {
    await fetch("/api/tasks", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">TODOリスト</h1>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={addTask} className="bg-blue-500 text-white p-2 rounded ml-2">
        追加
      </button>
      <ul className="mt-4">
        {tasks.map((task) => (
          <li key={task.id} className="flex items-center">
            {task.text}
            <button onClick={() => removeTask(task.id)} className="ml-2 text-red-500">削除</button>
          </li>
        ))}
      </ul>
    </div>
  );
}