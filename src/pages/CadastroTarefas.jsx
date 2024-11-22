import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function CadastroTarefas() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState("");
  const [descricao, setDescricao] = useState("");
  const [setor, setSetor] = useState("");
  const [prioridade, setPrioridade] = useState("");
  const [status, setStatus] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/v1/users/");
        setUsuarios(response.data);
      } catch (err) {
        console.error("Erro ao buscar usuários:", err.message);
      }
    };

    fetchUsuarios();
  }, []);

  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/tasks/", {
        description: descricao,
        department: setor,
        priority: prioridade,
        status: status,
        user_id: usuarioSelecionado,
      });
      setMensagem("Tarefa cadastrada com sucesso!");
      console.log("Resposta da API:", response.data);
    } catch (err) {
      setMensagem("Erro ao cadastrar a tarefa.");
      console.error("Erro:", err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-800">
      <header className="flex flex-row items-center justify-around bg-blue-600 p-[.8rem]">
        <h1 className="font-bold text-[1.5rem] text-white">Cadastrar Tarefas</h1>
        <div className="flex gap-[2.5rem]">
          <Link className="text-white underline" to="/">Cadastrar Usuários</Link>
          <Link className="text-white underline" to="/cadastro">Cadastrar Tarefas</Link>
          <Link className="text-white underline" to="/tarefas">Gerenciar Tarefas</Link>
        </div>
      </header>

      <div className="flex flex-col items-center self-center justify-center h-screen w-[100%]">
        <div className="flex flex-col items-center justify-center bg-gray-500 w-[30rem] h-[43rem] rounded-lg">
          <h1 className="mb-[2rem] text-[2rem] text-white">Cadastro de Nova Tarefa</h1>
          <div className="flex flex-col items-center gap-[1rem]">
            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Usuário:</h3>
              <select
                id="usuario"
                name="usuario"
                className="w-[20rem]"
                value={usuarioSelecionado}
                onChange={(e) => setUsuarioSelecionado(e.target.value)}
                required
              >
                {console.log(usuarioSelecionado)}
                <option value="">Selecione um usuário</option>
                {usuarios.map((usuario) => (
                  <option key={usuario.id} value={usuario.id}>
                    {usuario.name} - {usuario.email}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Descrição Tarefa:</h3>
              <textarea
                className="w-[20rem] h-[5rem]"
                name="descricao"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Setor:</h3>
              <input
                className="w-[20rem]"
                type="text"
                id="setor"
                value={setor}
                onChange={(e) => setSetor(e.target.value)}
                required
              />
            </div>

            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Prioridade:</h3>
              <select
                id="prioridade"
                name="prioridade"
                className="w-[20rem]"
                value={prioridade}
                onChange={(e) => setPrioridade(e.target.value)}
                required
              >
                <option value="">Selecione a prioridade</option>
                <option value="high">Alta</option>
                <option value="medium">Média</option>
                <option value="low">Baixa</option>
              </select>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Status:</h3>
              <select
                id="status"
                name="status"
                className="w-[20rem]"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                required
              >
                <option value="">Selecione o status</option>
                <option value="to do">Pendente</option>
                <option value="doing">Em Andamento</option>
                <option value="done">Concluído</option>
              </select>
            </div>
          </div>
          <button
            className="mt-[3rem] p-[1rem] px-[2rem] rounded-2xl bg-white text-black"
            onClick={handleCadastro}
          >
            Cadastrar Tarefa
          </button>
          {mensagem && <p className="text-white mt-[1rem">{mensagem}</p>}
        </div>
      </div>
    </main>
  );
}

export default CadastroTarefas;
