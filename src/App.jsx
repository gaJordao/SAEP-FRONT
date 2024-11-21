import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CadastroUsuario from "./pages/cadastroUsuario";
import CadastroTarefas from "./pages/CadastroTarefas";
import GerenciarTarefas from "./pages/GerenciarTarefas";

function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<CadastroUsuario />} />

      <Route path="/cadastro" element={<CadastroTarefas />} />

      <Route path="/tarefas" element={<GerenciarTarefas />} />
    </Routes>
  </Router>
  )
}

export default App;
