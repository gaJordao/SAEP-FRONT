import { Link } from "react-router-dom";

function GerenciarTarefas() {
  return (
    <main>
      <header className="flex flex-row items-center justify-around bg-slate-600 p-[.8rem]">
        <h1 className="font-bold text-[1.5rem] text-white">Cadastrar Usuários</h1>
        <div className="flex gap-[2.5rem]">
          <Link className="text-white underline" to="/">Cadastrar Usuários</Link>
          <Link className="text-white underline" to="/cadastro">Cadastrar Tarefas</Link>
          <Link className="text-white underline" to="/tarefas">Gerenciar Tarefas</Link>
        </div>
      </header>

      <div className="flex flex-wrap items-center justify-center gap-[1rem] mt-[5rem] h-auto w-[100%]">

        <div className="flex flex-col items-center justify-center bg-slate-600 w-[90%] sm:w-[35rem] h-[30rem] rounded-3xl">
          <h1 className="mb-[2rem] text-[2rem] text-white">Cadastro de Usuários</h1>
          <div className="flex flex-col items-start ml-[3rem] w-[100%] gap-[0.5rem]">
            <div className="flex flex-row">
              <h3 className="text-white text-[1.5rem] mr-[1rem]">request.nomeTarefa</h3>
            </div>

            <div className="flex flex-row items-center">
              <h3 className="text-white mr-[0.6rem] text-[1.1rem] font-bold">Setor:</h3>
              <h3 className="text-white">request.setor</h3>
            </div>

            <div className="flex flex-row items-center">
              <h3 className="text-white mr-[0.6rem] text-[1.1rem] font-bold">Prioridade:</h3>
              <h3 className="text-white">request.prioridade</h3>
            </div>

            <div className="flex flex-row items-center">
              <h3 className="text-white mr-[0.6rem] text-[1.1rem] font-bold">Usuário:</h3>
              <h3 className="text-white">request.usuario</h3>
            </div>

            <div className="flex flex-row items-center">
              <h3 className="text-white mr-[0.6rem] text-[1.1rem] font-bold">Data de Cadastro:</h3>
              <h3 className="text-white">request.dataCadastro</h3>
            </div>

            <button className="bg-blue-500 font-bold text-white w-[90%]">Editar</button>
            <button className="bg-red-500 font-bold text-white w-[90%]">Excluir</button>

            <div className="flex flex-row w-[100%] gap-[2rem]">
              <div className="flex flex-row items-center w-[50%]">
                <h3 className="text-white mr-[0.6rem] text-[1.1rem] font-bold">Status:</h3>
                <select id="options" name="options" className="w-[90%]" required>
                </select>
              </div>

              <button className="flex items-center justify-center pr-[0.6rem] bg-white w-[35%]">Alterar Status</button>
            </div>

          </div>
          {/* <button className="mt-[2rem] p-[1rem] px-[2rem] rounded-2xl bg-slate-300">Cadastrar</button> */}
        </div>



      </div>
    </main>
  );
}

export default GerenciarTarefas;
