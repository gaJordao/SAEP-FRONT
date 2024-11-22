import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function GerenciarTarefas() {
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    const fetchTarefas = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/tasks/");
        setTarefas(response.data);
      } catch (err) {
        console.error("Erro ao buscar tarefas:", err.message);
      }
    };

    fetchTarefas();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/v1/tasks/${id}`);
      setTarefas((prevTarefas) => prevTarefas.filter((tarefa) => tarefa.id !== id));
    } catch (err) {
      console.error("Erro ao excluir tarefa:", err.message);
    }
  };

  // Filtrando tarefas por status
  const columns = {
    "To Do": tarefas.filter((tarefa) => tarefa.status === "to do"),
    Doing: tarefas.filter((tarefa) => tarefa.status === "doing"),
    Done: tarefas.filter((tarefa) => tarefa.status === "done"),
  };

  return (
    <main className="min-h-screen bg-gray-800 text-white">
      <header className="flex flex-row items-center justify-between bg-blue-600 p-4 rounded-lg mb-8">
        <h1 className="font-bold text-xl">Gerenciar Tarefas</h1>
        <div className="flex gap-6">
          <Link className="underline" to="/">Cadastrar Usuários</Link>
          <Link className="underline" to="/cadastro">Cadastrar Tarefas</Link>
          <Link className="underline" to="/tarefas">Gerenciar Tarefas</Link>
        </div>
      </header>

      <div className="flex justify-between gap-6 p-4">
        {Object.entries(columns).map(([status, tarefas]) => (
          <div key={status} className="w-1/3 p-4 bg-gray-700 rounded-lg">
            <h2 className="text-center font-bold text-lg mb-4">{status}</h2>
            <div className="flex flex-col gap-4">
              {tarefas.length > 0 ? (
                tarefas.map((tarefa) => (
                  <div
                    key={tarefa.id}
                    className="bg-gray-600 p-4 rounded-lg shadow-md"
                  >
                    <h3 className="font-bold text-lg mb-2">{tarefa.description}</h3>
                    <p>
                      <strong>Setor:</strong> {tarefa.department}
                    </p>
                    <p>
                      <strong>Prioridade:</strong> {tarefa.priority}
                    </p>
                    <p>
                      <strong>Usuário:</strong> {tarefa.user.name}
                    </p>
                    <p>
                      <strong>Data de Cadastro:</strong> {tarefa.created_at}
                    </p>
                    <div className="flex gap-2 mt-4">
                      <Link
                        to={`/editar/${tarefa.id}`}
                        className="bg-blue-500 px-4 py-2 rounded text-white text-sm"
                      >
                        Editar
                      </Link>
                      <button
                        onClick={() => handleDelete(tarefa.id)}
                        className="bg-red-500 px-4 py-2 rounded text-white text-sm"
                      >
                        Excluir
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Nenhuma tarefa.</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

export default GerenciarTarefas;
