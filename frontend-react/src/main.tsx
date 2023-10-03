import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import CadastroEmpresa from './pages/CadastroUsuario';
import Shell from './components/home/Shell';
import ColaboradorPage from "./pages/ColaboradorPage";
import  PerfilEmpresa from "./pages/PerfilEmpresa"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Shell />}>
        <Route index element={<Dashboard />} />
        <Route path="/cadastro-empresa" element={<CadastroEmpresa />} />
        <Route path="/usuarios" element={<ColaboradorPage />} />
        <Route path="/perfil-empresa" element={<PerfilEmpresa />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
