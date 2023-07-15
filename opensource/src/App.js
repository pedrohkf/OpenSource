import './App.css'
import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";

import Home from "./pages/home/home";
import Projetos from "./pages/projetos/projetos";
import CriarProjetos from "./pages/criarProjeto/criarProjeto";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/criarprojetos" element={<CriarProjetos />} />
      </Routes>
    </BrowserRouter>
  )
}