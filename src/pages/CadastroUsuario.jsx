import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleCadastro = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/", {
        "name": nome,
        "email": email
      });
      setMensagem("Usuário cadastrado com sucesso!");
      console.log("Resposta da API:", response.data);
    } catch (err) {
      setMensagem("Erro ao cadastrar o usuário.");
      console.error("Erro:", err.message);
    }
  };

  return (
    <main className="min-h-screen bg-gray-800">
      <header className="flex flex-row items-center justify-around bg-blue-600 p-[.8rem]">
        <h1 className="font-bold text-[1.5rem] text-white">Cadastrar Usuários</h1>
        <div className="flex gap-[2.5rem]">
          <Link className="text-white underline" to="/">
            Cadastrar Usuários
          </Link>
          <Link className="text-white underline" to="/cadastro">
            Cadastrar Tarefas
          </Link>
          <Link className="text-white underline" to="/tarefas">
            Gerenciar Tarefas
          </Link>
        </div>
      </header>

      <div className="flex flex-col items-center self-center justify-center h-[93vh] w-[100%]">
        <div className="flex flex-col items-center justify-center bg-gray-500 w-[35rem] h-[20rem] rounded-lg">
          <h1 className="mb-[2rem] text-[2rem] text-white">Cadastro de Usuários</h1>
          <div className="flex flex-col items-center gap-[2rem]">
            <div className="flex flex-row">
              <h3 className="text-white mr-[1rem]">Nome:</h3>
              <input
                className="w-[15rem]"
                type="text"
                id="username"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                required
              />
            </div>
            <div className="flex flex-row">
              <h3 className="text-white mr-[1rem]">Email:</h3>
              <input
                className="w-[15rem]"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>
          <button
            className="mt-[2rem] p-[1rem] px-[2rem] rounded-2xl bg-white text-black"
            onClick={handleCadastro}
          >
            Cadastrar
          </button>
          {mensagem && (
            <p className="mt-[1rem] text-white">{mensagem}</p>
          )}
        </div>
      </div>
    </main>
  );''
}

export default CadastroUsuario;
