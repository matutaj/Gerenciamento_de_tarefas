import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TasksPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  return (
    <div className=" h-screen w-screen bg-slate-500 flex justify-center  p-6">
      <div className="w-[500px] space-y-4">
        <div className="flex relative  justify-center mb-6 text-slate-100">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-slate-200 p-4 rounded-sm">
          <h1 className="text-xl  font-bold text-slate-600">{title}</h1>
          <p className="text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
export default TasksPage;
