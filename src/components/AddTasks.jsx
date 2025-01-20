import { useState } from "react";

function AddTasks({ onAddTasksSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-sm shadow flex flex-col">
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        placeholder="Digite o titulo da Tarefa"
        className="boder border-slate-300 outline-slate-400 px-4 py-2 rounded-sm"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
        placeholder="Digite a descrição da Tarefa"
        className="boder border-slate-300 outline-slate-400 px-4 py-2 rounded-sm"
      />
      <button
        onClick={() => {
          if (!title.trim() || !description.trim())
            return alert("Campos obrigatorios");
          onAddTasksSubmit(title, description);
          setTitle("");
          setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-sm font-medium"
      >
        Adicionar
      </button>
    </div>
  );
}
export default AddTasks;
