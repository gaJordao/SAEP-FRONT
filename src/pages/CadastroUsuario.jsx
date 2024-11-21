import { Link } from "react-router-dom";

function CadastroUsuario() {
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

            <div className="flex flex-col items-center self-center justify-center h-[93vh] w-[100%]">
                <div className="flex flex-col items-center justify-center bg-slate-600 w-[35rem] h-[20rem] rounded-3xl">
                    <h1 className="mb-[2rem] text-[2rem] text-white">Cadastro de Usuários</h1>
                    <div className="flex flex-col items-center gap-[2rem]">
                        <div className="flex flex-row">
                            <h3 className="text-white mr-[1rem]">Nome:</h3>
                            <input
                                className="w-[15rem]"
                                type="text"
                                id="username"
                                required
                            />
                        </div>
                        <div className="flex flex-row">
                            <h3 className="text-white mr-[1rem]">Email:</h3>
                            <input
                                className="w-[15rem]"
                                type="text"
                                id="email"
                                required
                            />
                        </div>
                    </div>
                    <button className="mt-[2rem] p-[1rem] px-[2rem] rounded-2xl bg-slate-300">Cadastrar</button>
                </div>
            </div>
        </main>
    );
}

export default CadastroUsuario;
