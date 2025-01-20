import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
<<<<<<< HEAD
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Estudar Vue",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Estudar Angular",
      isCompleted: false,
    },
  ]);

  function onTasksClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
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
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTasksClick={onTasksClick}
          onDeleteTasksClick={onDeleteTasksClick}
        />
      </div>
=======
  return (
    <div>
      <h1 className="text-red-500">Gerenciador de Tarefas</h1>
      <AddTasks />
      <Tasks />
>>>>>>> parent of 2cc5acc (feat:  listar as tasks)
    </div>
  );
}
export default App;
