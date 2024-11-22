import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditarTarefa() {
  const { id } = useParams(); // Recupera o ID da URL
  const navigate = useNavigate();
  const [tarefa, setTarefa] = useState({
    description: "",
    department: "",
    priority: "low", // Valor padrão
    user: { name: "" },
    status: "to do",
  });

  useEffect(() => {
    const fetchTarefa = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/tasks/${id}`);
        setTarefa(response.data); // Preenche o estado com os dados da tarefa
      } catch (err) {
        console.error("Erro ao buscar tarefa:", err.message);
      }
    };

    fetchTarefa();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "user") {
      setTarefa((prevTarefa) => ({
        ...prevTarefa,
        user: { ...prevTarefa.user, name: value },
      }));
    } else {
      setTarefa((prevTarefa) => ({
        ...prevTarefa,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Fazendo a requisição PUT para atualizar a tarefa
      await axios.put(`http://localhost:8000/api/v1/tasks/${id}`, tarefa);
      navigate("/tarefas");
    } catch (err) {
      console.error("Erro ao atualizar tarefa:", err.message);
    }
  };

  return (
    <main className="flex justify-center mt-[5rem] bg-gray-800">
      <div className="bg-blue-600 w-[80%] sm:w-[40rem] p-[2rem] rounded-xl">
        <h1 className="text-center text-white text-[2rem] font-bold mb-[1rem]">Editar Tarefa</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="description" className="text-white">Descrição:</label>
            <input
              type="text"
              id="description"
              name="description"
              value={tarefa.description}
              onChange={handleChange}
              className="p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="department" className="text-white">Setor:</label>
            <input
              type="text"
              id="department"
              name="department"
              value={tarefa.department}
              onChange={handleChange}
              className="p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="priority" className="text-white">Prioridade:</label>
            <select
              id="priority"
              name="priority"
              value={tarefa.priority}
              onChange={handleChange}
              className="p-2 rounded-md"
            >
              <option value="low">Baixa</option>
              <option value="medium">Média</option>
              <option value="high">Alta</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="user" className="text-white">Usuário:</label>
            <input
              type="text"
              id="user"
              name="user"
              value={tarefa.user.name}
              onChange={handleChange}
              className="p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="status" className="text-white">Status:</label>
            <select
              id="status"
              name="status"
              value={tarefa.status}
              onChange={handleChange}
              className="p-2 rounded-md"
            >
              <option value="to do">Pendente</option>
              <option value="doing">Em Andamento</option>
              <option value="done">Concluído</option>
            </select>
          </div>

          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md w-full">
            Atualizar Tarefa
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditarTarefa;
