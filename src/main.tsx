import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from './NoPage/NoPage'
import Searcher from "./Searcher/Searcher";
import Counter from "./Counter/Counter";
import Layout from "./Layout";
import Inicio from './Inicio/Inicio';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="/Contador" element={<Counter />} />
          <Route path="/Buscador" element={<Searcher />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
