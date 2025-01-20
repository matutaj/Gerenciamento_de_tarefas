import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      description: "Estudar React para se tornar cada vez melhor",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Vue",
      description: "Estudar Vue para se tornar cada vez melhor",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Angular",
      description: "Estudar Angular para se tornar cada vez melhor",
      isCompleted: false,
    },
  ]);

  function onTasksClick(taskIs) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskIs) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTasksClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTasksSubmit(title, description) {
    const newsTasks = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newsTasks]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks onAddTasksSubmit={onAddTasksSubmit} />
        <Tasks
          tasks={tasks}
          onTasksClick={onTasksClick}
          onDeleteTasksClick={onDeleteTasksClick}
        />
      </div>
    </div>
  );
}
export default App;
