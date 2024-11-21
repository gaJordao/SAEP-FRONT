import { Link } from "react-router-dom";

function CadastroTarefas() {
  return (
    <main>
      <header className="flex flex-row items-center justify-around bg-slate-600 p-[.8rem]">
        <h1 className="font-bold text-[1.5rem] text-white">Cadastrar Tarefas</h1>
        <div className="flex gap-[2.5rem]">
          <Link className="text-white underline" to="/">Cadastrar Usuários</Link>
          <Link className="text-white underline" to="/cadastro">Cadastrar Tarefas</Link>
          <Link className="text-white underline" to="/tarefas">Gerenciar Tarefas</Link>
        </div>
      </header>

      <div className="flex flex-col items-center self-center justify-center h-[93vh] w-[100%]">
        <div className="flex flex-col items-center justify-center bg-slate-600 w-[35rem] h-[45rem] rounded-3xl">
          <h1 className="mb-[2rem] text-[2rem] text-white">Cadastro de Nova Tarefa</h1>
          <div className="flex flex-col items-center gap-[1rem]">
            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Usuário:</h3>
              <select id="options" name="options" className="w-[20rem]" required>
              </select>
            </div>

            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Descrição Tarefa:</h3>
              <textarea className="w-[20rem] h-[5rem]" name="descricao" required />
            </div>

            <div className="flex flex-col">
              <h3 className="text-white mb-[1rem]">Setor:</h3>
              <input
                className="w-[20rem]"
                type="text"
                id="username"
                required
              />
          </div>

          <div className="flex flex-col">
            <h3 className="text-white mb-[1rem]">Prioridade:</h3>
            <select id="options" name="options" className="w-[20rem]" required>
            </select>
          </div>

          <div className="flex flex-col">
            <h3 className="text-white mb-[1rem]">Status:</h3>
            <select id="options" name="options" className="w-[20rem]" required>
            </select>
          </div>

        </div>
        <button className="mt-[3rem] p-[1rem] px-[2rem] rounded-2xl bg-slate-300">Cadastrar Tarefa</button>
      </div>
    </div>
    </main >
  );
}

export default CadastroTarefas;
