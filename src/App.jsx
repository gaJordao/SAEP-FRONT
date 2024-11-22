import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroUsuario from "./pages/cadastroUsuario";
import CadastroTarefas from "./pages/cadastroTarefas";
import GerenciarTarefas from "./pages/GerenciarTarefas";
import EditarTarefa from "./pages/EditarTarefa";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<CadastroUsuario />} />

      <Route path="/cadastro" element={<CadastroTarefas />} />

      <Route path="/tarefas" element={<GerenciarTarefas />} />

      <Route path="/editar/:id" element={<EditarTarefa />} />
    </Routes>
  </Router>
  )
}

export default App;
