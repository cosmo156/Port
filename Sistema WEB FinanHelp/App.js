import { BrowserRouter as Router,Route, Routes} from "react-router-dom";
import './App.css'

import Home from './pages/Home/Home';
import Login from './pages/Login/Login.js';
import Cadastro from './pages/Cadastro/Cadastro';
import Principal from './pages/Principal/Principal'
import Estoque from './pages/Estoque/Estoque';
import Visualizar from './pages/Estoque/visualizar/visualizar';
import Cadastrar from './pages/Estoque/cadastrar/cadastrar';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/estoque" element={<Estoque />} />
        <Route path="/visualizar/:id" element={<Visualizar />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
      </Routes>
    </Router>
  );
}

